import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animation";
import { Md3dRotation } from "react-icons/md";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  //camera control
  const cameraControlSmall = useRef(null);
  const cameraControlLarge = useRef(null);

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation values are read at animation time; keeping them in refs avoids
  // rebuilding the timeline every time OrbitControls moves.
  const smallRotation = useRef(0);
  const largeRotation = useRef(0);

  // Mount the WebGL scene only when the section approaches the viewport. It
  // keeps the first paint light and avoids paying for a canvas nobody sees.
  const modelRef = useRef(null);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const element = modelRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowModel(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showModel) return;

    const timeline = gsap.timeline();

    if (size === "large") {
      animateWithGsapTimeline(
        timeline,
        small,
        smallRotation.current,
        "#view1",
        "#view2",
        {
          transform: "translateX(-100%)",
          duration: 2,
        }
      );
    }

    if (size === "small") {
      animateWithGsapTimeline(
        timeline,
        large,
        largeRotation.current,
        "#view2",
        "#view1",
        {
          transform: "translateX(0)",
          duration: 2,
        }
      );
    }

    return () => timeline.kill();
  }, [size, showModel]);

  // h1 animation
  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="common-padding overflow-hidden">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading flex gap-5 items-center justify-between">
          <div>Take a closer look.</div>
          <div className="p-1 mr-5">
            <Md3dRotation />
          </div>
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div
            ref={modelRef}
            className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative"
          >
            {showModel && (
              <>
                <ModelView
                  index={1}
                  groupRef={small}
                  gsapType={"view1"}
                  controlRef={cameraControlSmall}
                  setRotationState={(value) => {
                    smallRotation.current = value;
                  }}
                  item={model}
                />
                <ModelView
                  index={2}
                  groupRef={large}
                  gsapType={"view2"}
                  controlRef={cameraControlLarge}
                  setRotationState={(value) => {
                    largeRotation.current = value;
                  }}
                  item={model}
                />

                <Canvas
                  className="w-full h-full"
                  dpr={[1, 1.75]}
                  gl={{ antialias: true, powerPreference: "high-performance" }}
                  style={{
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  eventSource={document.getElementById("root")}
                >
                  <View.Port />
                </Canvas>
              </>
            )}
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container" aria-label="Phone finish">
                {models.map((item) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      className="block w-6 h-6 rounded-full mx-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      style={{ backgroundColor: item.color[0] }}
                      aria-label={`View ${item.title}`}
                      aria-pressed={model.title === item.title}
                      onClick={() => setModel(item)}
                    />
                  </li>
                ))}
              </ul>
              <div
                className="size-btn-container"
                role="group"
                aria-label="Model size"
              >
                {sizes.map(({ label, value }) => (
                  <button
                    key={label}
                    type="button"
                    className="size-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{
                      backgroundColor: size === value ? "White" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    aria-pressed={size === value}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
