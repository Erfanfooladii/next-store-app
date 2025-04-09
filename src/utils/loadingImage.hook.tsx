import { useEffect, useState } from "react";

export const useLoadingImage = ({ src }: { src: string | undefined }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const img = new Image();
    img.src = src ?? "";
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [src]);
  return {
    isLoading,
  };
};
