import { useState, useEffect } from "react";
interface WidthDimensions {
  width: number | null;
  height: number | null;
}
export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";
  const getWindowDimensions = (): WidthDimensions => {
    return {
      width: hasWindow ? window.innerWidth : null,
      height: hasWindow ? window.innerHeight : null,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    if (!hasWindow) return;
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [hasWindow]);
  return windowDimensions;
}
