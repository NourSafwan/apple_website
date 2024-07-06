import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });

  useGSAP(() => {
    gsap.to("#hero", {
      delay: 2,
      duration: 1,
      opacity: 1,
      y: -10,
      ease: "power4.out",
    });
    gsap.to(".heroStager", {
      delay: 2,
      duration: 1,
      opacity: 1,
      y: -50,
      stagger: {
        amount: 0.5,
        axis: "x",
        ease: "circ.inOut",
      },
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title" id="hero">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center ">
        <a
          href="#highLights"
          className="btn heroStager translate-y-20 opacity-0 "
        >
          Buy
        </a>
        <p className="font-normal text-xl heroStager translate-y-20 opacity-0 ">
          from $199/mouth or $999
        </p>
      </div>
    </section>
  );
};

export default Hero;
