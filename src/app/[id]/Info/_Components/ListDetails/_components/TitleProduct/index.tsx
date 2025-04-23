const TitleProduct = ({ title }: { title: string | undefined }) => {
  return (
    <h1 className="text-3xl font-semibold border-b border-white">{title}</h1>
  );
};
export default TitleProduct;
