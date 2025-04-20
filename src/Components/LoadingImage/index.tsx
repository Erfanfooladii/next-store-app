import { useLoadingImage } from "@/utils/loadingImage.hook";
import React, { useMemo } from "react";
import { BeatLoader } from "react-spinners";

interface LoadingImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  frameStyle?: string;
}

const LoadingImage = React.memo(
  ({ src, alt, size = 15, frameStyle, ...rest }: LoadingImageProps) => {
    const { isLoading } = useLoadingImage({ src });
    const beatLoaderProps = useMemo(
      () => ({
        size,
        color: "#ff7a00",
      }),
      [size]
    );
    const imgClassName = useMemo(
      () => `w-full h-full object-cover ${rest.className || ""}`,
      [rest.className]
    );
    const containerClassName = `w-full h-full ${frameStyle}`;

    return (
      <div className={containerClassName}>
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
