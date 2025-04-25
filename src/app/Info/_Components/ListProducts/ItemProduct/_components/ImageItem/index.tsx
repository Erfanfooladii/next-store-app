import LoadingImage from "@/Components/LoadingImage";

const ImageItem = ({ imageSrc, name }: { imageSrc: string; name: string }) => {
  return (
    <div className="w-full h-52">
      <LoadingImage src={imageSrc} size={15} alt={name} />
    </div>
  );
};
export default ImageItem;
