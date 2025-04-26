import React from "react";
import { BeatLoader } from "react-spinners";
import { useLoadingImage } from "./hook";

interface LoadingImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  frameStyle?: string;
}
const LoadingImage = React.memo(
  ({ src, alt, size = 15, frameStyle, ...rest }: LoadingImageProps) => {
    const { isLoading, beatLoaderProps, imgClassName } = useLoadingImage({
      src: src,
      size: size,
      rest: rest.className,
    });
    return (
      <div className={`w-full h-full ${frameStyle}`}>
        {isLoading ? (
          <div className="flex w-full h-full justify-center items-center">
            <BeatLoader {...beatLoaderProps} />
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            {...rest}
            className={imgClassName}
          />
        )}
      </div>
    );
  }
);

export default LoadingImage;
