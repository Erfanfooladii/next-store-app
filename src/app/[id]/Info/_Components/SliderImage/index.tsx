import { useEffect, useState } from "react";
import { SliderButtonNext, SliderButtonPrev } from "./SliderButtons";

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
    <section className="w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden ">
        {images.map((item, index) => (
          <img
            key={item}
            src={item}
            alt={item}
            aria-hidden={image !== index}
            className="w-full rounded-lg h-full block shrink-0 grow-0 transition-transform duration-300 ease-in-out object-cover"
            style={{
              translate: `${-100 * image}%`,
              transition: "translate 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      <SliderButtonNext showImageNext={showImageNext} />
      <SliderButtonPrev showImagePrev={showImagePrev} />
    </section>
  );
};
export default SliderImages;
