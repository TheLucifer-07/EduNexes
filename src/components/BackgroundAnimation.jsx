import { useCallback, useEffect, useRef } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundAnimation = () => {
  const sceneRef = useRef(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateScene = () => {
      if (document.hidden || reducedMotion.matches) {
        frameRef.current = window.requestAnimationFrame(updateScene);
        return;
      }

      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.06;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.06;

      if (sceneRef.current) {
        sceneRef.current.style.setProperty("--mouse-x", `${currentRef.current.x}px`);
        sceneRef.current.style.setProperty("--mouse-y", `${currentRef.current.y}px`);
      }

      frameRef.current = window.requestAnimationFrame(updateScene);
    };

    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 13;
      mouseRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    frameRef.current = window.requestAnimationFrame(updateScene);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div ref={sceneRef} className="edunexes-bg" aria-hidden="true">
      <div className="site-background" />
      <div className="site-vignette" />
      <div className="site-grain" />
      <div className="site-mesh site-mesh-left glow-pulse bg-parallax-layer bg-layer-soft" />
      <div className="site-mesh site-mesh-right glow-pulse bg-parallax-layer bg-layer-deep" />
      <div className="site-grid bg-parallax-layer bg-layer-soft" />
      <div className="site-orb orb-one" />
      <div className="site-orb orb-two" />
      <div className="site-orb orb-three" />
      <div className="particle-light-field bg-parallax-layer bg-layer-deep" />

      <div className="ambient-equation eq-one bg-parallax-layer bg-layer-soft">E = mc²</div>
      <div className="ambient-equation eq-two bg-parallax-layer bg-layer-deep">∫ f(x) dx</div>
      <div className="ambient-equation eq-three bg-parallax-layer bg-layer-soft">a² + b² = c²</div>

      <div className="floating-doc doc-one bg-parallax-layer bg-layer-soft" />
      <div className="floating-doc doc-two bg-parallax-layer bg-layer-deep" />
      <div className="floating-card card-one bg-parallax-layer bg-layer-soft">
        <span />
        <span />
        <span />
      </div>
      <div className="floating-card card-two bg-parallax-layer bg-layer-deep">
        <span />
        <span />
      </div>

      <div className="study-scene bg-parallax-layer bg-layer-soft">
        <div className="scene-room-glow" />
        <div className="scene-focus-haze" />
        <div className="scene-floor" />
        <div className="scene-wall-shadow" />
        <div className="scene-desk" />
        <div className="scene-laptop laptop-breathe">
          <span className="laptop-screen-glow" />
          <span className="laptop-screen-line line-a" />
          <span className="laptop-screen-line line-b" />
          <span className="laptop-screen-line line-c" />
        </div>
        <div className="scene-student breathe-soft">
          <span className="student-head" />
          <span className="student-torso" />
          <span className="student-arm arm-left typing-loop" />
          <span className="student-arm arm-right writing-loop" />
        </div>
        <div className="scene-chair" />
        <div className="scene-book page-shift">
          <span className="book-page" />
        </div>
        <div className="scene-notebook" />
        <div className="scene-mug" />
      </div>

      <div className="ai-network bg-parallax-layer bg-layer-deep">
        <span className="network-node node-a pulse-node" />
        <span className="network-node node-b pulse-node" />
        <span className="network-node node-c pulse-node" />
        <span className="network-node node-d pulse-node" />
        <span className="network-link link-a" />
        <span className="network-link link-b" />
        <span className="network-link link-c" />
      </div>

      <div className="study-scene-overlay">
        <div className="scene-note note-one float-soft" />
        <div className="scene-note note-two float-soft" />
        <div className="scene-note note-three float-soft" />
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 48,
          particles: {
            number: { value: 30, density: { enable: true, area: 1200 } },
            color: { value: ["#E6D3A3", "#C8A96E"] },
            opacity: {
              value: 0.16,
              random: { enable: true, minimumValue: 0.04 },
              animation: { enable: true, speed: 0.16, minimumValue: 0.04, sync: false },
            },
            size: {
              value: { min: 1, max: 2.8 },
              animation: { enable: true, speed: 1.2, minimumValue: 0.8, sync: false },
            },
            shadow: {
              enable: true,
              color: "#E6D3A3",
              blur: 14,
            },
            move: {
              enable: true,
              speed: 0.14,
              direction: "none",
              random: true,
              straight: false,
              attract: { enable: true, rotateX: 1600, rotateY: 2200 },
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              distance: 128,
              color: "#E6D3A3",
              opacity: 0.04,
              width: 0.65,
              triangles: { enable: false },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: false },
            },
            modes: {
              grab: { distance: 120, links: { opacity: 0.08 } },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
