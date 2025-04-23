import { useEffect, useState } from "react";
import { SliderButtonNext, SliderButtonPrev } from "./SliderButtons";
import LoadingImage from "@/Components/LoadingImage";

const SliderImages = ({ images = [] }: { images: string[] | undefined }) => {
  const [image, setImage] = useState(0);
  const showImageNext = () => {
    setImage((indexImg) => {
      if (indexImg === images.length - 1) return 0;
      return indexImg + 1;
    });
  };
  const showImagePrev = () => {
    setImage((indexImg) => {
      if (indexImg === 0) return images.length - 1;
      return indexImg - 1;
    });
  };
  useEffect(() => {
    setTimeout(() => {
      showImageNext();
    }, 2000);
  }, []);
  return (
    <section className="w-full h-full relative overflow-hidden">
      <div className="w-full h-full flex">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${100 * image}%)`,
            }}
          >
            <LoadingImage
              src={item}
              alt={item}
              size={15}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <SliderButtonNext showImageNext={showImageNext} />
      <SliderButtonPrev showImagePrev={showImagePrev} />
    </section>
  );
};
export default SliderImages;
