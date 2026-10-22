import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(
    () => {
      gsap.to(".video-slider", {
        xPercent: -100 * videoId,
        duration: 2,
        ease: "power2.inOut",
        overwrite: true,
      });
    },
    [videoId]
  );

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#highLights",
      start: "top 70%",
      once: true,
      onEnter: () =>
        setVideo((previous) => ({
          ...previous,
          startPlay: true,
          isPlaying: true,
        })),
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    videoRef.current.forEach((element, index) => {
      if (!element) return;
      if (index !== videoId) element.pause();
    });

    const activeVideo = videoRef.current[videoId];
    if (!activeVideo) return;

    if (startPlay && isPlaying) {
      activeVideo.play().catch(() => {
        // Browsers can reject autoplay until the user interacts; the controls
        // still work, so there is nothing useful to report here.
      });
    } else {
      activeVideo.pause();
    }
  }, [startPlay, videoId, isPlaying]);

  useEffect(() => {
    videoDivRef.current.forEach((element) => {
      if (element) element.style.width = "12px";
    });
    videoSpanRef.current.forEach((element) => {
      if (!element) return;
      element.style.width = "0%";
      element.style.backgroundColor = "#afafaf";
    });

    if (!isPlaying) return;
    const activeBar = videoDivRef.current[videoId];
    if (activeBar) {
      activeBar.style.width = window.innerWidth < 1200 ? "10vw" : "4vw";
    }
  }, [videoId, isPlaying]);

  const handleProcess = (type, index) => {
    switch (type) {
      case "video-end":
        setVideo((previous) => ({
          ...previous,
          videoId: index + 1,
          isLastVideo: false,
        }));
        break;

      case "video-last":
        setVideo((previous) => ({
          ...previous,
          isLastVideo: true,
          isPlaying: false,
        }));
        break;

      case "video-reset":
        setVideo((previous) => ({
          ...previous,
          videoId: 0,
          isLastVideo: false,
          isPlaying: true,
        }));
        break;

      case "pause":
        setVideo((previous) => ({ ...previous, isPlaying: false }));
        break;

      case "play":
        setVideo((previous) => ({ ...previous, isPlaying: true }));
        break;

      default:
        break;
    }
  };

  const handleTimeUpdate = (index) => {
    if (index !== videoId) return;
    const activeVideo = videoRef.current[index];
    const activeSpan = videoSpanRef.current[index];
    const activeBar = videoDivRef.current[index];
    if (!activeVideo || !activeSpan || !activeBar) return;

    const duration =
      activeVideo.duration || hightlightsSlides[index].videoDuration;
    const progress = Math.min(100, (activeVideo.currentTime / duration) * 100);

    activeSpan.style.width = `${progress}%`;
    activeSpan.style.backgroundColor = "white";
    if (isPlaying) {
      activeBar.style.width = window.innerWidth < 1200 ? "10vw" : "4vw";
    }
  };

  const handleEnded = (index) => {
    const activeBar = videoDivRef.current[index];
    const activeSpan = videoSpanRef.current[index];
    if (activeBar) activeBar.style.width = "12px";
    if (activeSpan) {
      activeSpan.style.width = "0%";
      activeSpan.style.backgroundColor = "#afafaf";
    }

    if (index !== hightlightsSlides.length - 1) {
      handleProcess("video-end", index);
    } else {
      handleProcess("video-last");
    }
  };

  const togglePlayback = () => {
    if (isLastVideo) {
      handleProcess("video-reset");
      return;
    }
    handleProcess(isPlaying ? "pause" : "play");
  };

  return (
    <div>
      <div className="flex items-center">
        {hightlightsSlides.map((list, index) => (
          <div
            key={list.id}
            className="video-slider sm:pr-20 pr-10 shrink-0"
          >
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  playsInline
                  className={`${
                    list.id === 2 ? "translate-x-44" : ""
                  } pointer-events-none`}
                  preload={index === 0 ? "auto" : "metadata"}
                  muted
                  ref={(element) => {
                    videoRef.current[index] = element;
                  }}
                  onEnded={() => handleEnded(index)}
                  onPlay={() =>
                    setVideo((previous) => ({
                      ...previous,
                      isPlaying: true,
                    }))
                  }
                  onTimeUpdate={() => handleTimeUpdate(index)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, textIndex) => (
                  <p
                    key={textIndex}
                    className="md:text-2xl text-xl font-medium"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {hightlightsSlides.map((slide, index) => (
            <span
              key={slide.id}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer transition-[width] duration-500"
              ref={(element) => {
                videoDivRef.current[index] = element;
              }}
            >
              <span
                className="absolute h-full w-full rounded-full transition-[width,background-color] duration-200"
                ref={(element) => {
                  videoSpanRef.current[index] = element;
                }}
              />
            </span>
          ))}
        </div>

        <button
          type="button"
          className="control-btn"
          aria-label={
            isLastVideo ? "Replay highlights" : isPlaying ? "Pause" : "Play"
          }
          onClick={togglePlayback}
        >
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
