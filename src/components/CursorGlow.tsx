import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] w-[400px] h-[400px] rounded-full blur-3xl opacity-30 transition-transform duration-300 ease-out"
      style={{
        background: "radial-gradient(circle, hsl(var(--primary) / 0.5), transparent 60%)",
        transform: `translate3d(${pos.x - 200}px, ${pos.y - 200}px, 0)`,
      }}
    />
  );
};

export default CursorGlow;
