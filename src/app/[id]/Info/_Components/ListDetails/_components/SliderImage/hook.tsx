import { useEffect, useState } from "react";

const useSliderImage = ({ images }: { images: string[] }) => {
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
  return {
    image,
    showImageNext,
    showImagePrev,
  };
};

export default useSliderImage;
