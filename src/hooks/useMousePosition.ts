import { useEffect, useState } from "react";

interface NormalizedPosition {
  x: number; // -1 to 1
  y: number; // -1 to 1
}

/**
 * Tracks pointer position normalized to -1..1 relative to the viewport
 * center, for subtle parallax effects. Falls back to (0,0) on touch
 * devices where there's no meaningful pointer.
 */
export function useMousePosition(): NormalizedPosition {
  const [position, setPosition] = useState<NormalizedPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
