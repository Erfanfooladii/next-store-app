"use client";
import { useEffect, useMemo, useState } from "react";

export const useLoadingImage = ({
  src,
  size,
  rest,
}: {
  size: number;
  src: string | undefined;
  rest: string | undefined;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const img = new Image();
    img.src = src ?? "";
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [src]);
  const beatLoaderProps = useMemo(
    () => ({
      size,
      color: "#ff7a00",
    }),
    [size]
  );
  const imgClassName = useMemo(
    () => `w-full h-full object-cover ${rest || ""}`,
    [rest]
  );
  return {
    isLoading,
    beatLoaderProps,
    imgClassName,
  };
};
