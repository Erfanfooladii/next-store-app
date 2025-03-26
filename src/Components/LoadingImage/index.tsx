import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

interface LoadingImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  frameStyle?: string;
}

const LoadingImage = ({
  src,
  alt,
  size = 15,
  frameStyle,
  ...rest
}: LoadingImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const img = new Image();
    img.src = src ?? "";
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [src]);

  return (
    <div className={`w-full h-full ${frameStyle}`}>
      {isLoading ? (
        <div className="flex w-full h-full justify-center items-center">
          <BeatLoader size={size} color="#ff7a00" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          {...rest}
          className={`w-full h-full object-cover ${rest.className || ""}`}
        />
      )}
    </div>
  );
};

export default LoadingImage;
