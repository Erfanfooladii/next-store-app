import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const LoadingImage = ({
  src,
  alt,
  size = 15,
}: {
  src: string;
  alt: string;
  size: number;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);
  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div className="flex w-full h-full justify-center items-center">
          <BeatLoader size={size} color="#ff7a00" />
        </div>
      ) : (
        <div className="flex">
          <img className="h-full w-full object-cover" src={src} alt={alt} />
        </div>
      )}
    </div>
  );
};
export default LoadingImage;
