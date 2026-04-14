import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Base dark background */}
      <div style={{
        position: "fixed", inset: 0,
        background: "radial-gradient(ellipse at 20% 20%, #0f0e1a 0%, #0B0B0F 50%, #080810 100%)",
        zIndex: -2, pointerEvents: "none",
      }} />
      {/* Subtle top-left glow */}
      <div style={{
        position: "fixed", top: "-10%", left: "-5%",
        width: "45vw", height: "45vw",
        background: "radial-gradient(circle, rgba(230,211,163,0.055) 0%, transparent 70%)",
        zIndex: -1, pointerEvents: "none",
      }} className="glow-pulse" />
      {/* Subtle bottom-right glow */}
      <div style={{
        position: "fixed", bottom: "-10%", right: "-5%",
        width: "40vw", height: "40vw",
        background: "radial-gradient(circle, rgba(180,140,80,0.04) 0%, transparent 70%)",
        zIndex: -1, pointerEvents: "none",
        animationDelay: "2s",
      }} className="glow-pulse" />

      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{
          position: "fixed", inset: 0,
          zIndex: -1, pointerEvents: "none",
        }}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 50,
          particles: {
            number: { value: 70, density: { enable: true, area: 1000 } },
            color: { value: ["#E6D3A3", "#C8A96E", "#F0E4C0"] },
            opacity: {
              value: 0.3,
              random: { enable: true, minimumValue: 0.05 },
              animation: { enable: true, speed: 0.4, minimumValue: 0.05, sync: false },
            },
            size: { value: { min: 1, max: 2 } },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
            },
            links: {
              enable: true,
              distance: 130,
              color: "#E6D3A3",
              opacity: 0.08,
              width: 0.8,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: false },
            },
            modes: {
              grab: { distance: 180, links: { opacity: 0.2 } },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default BackgroundAnimation;
