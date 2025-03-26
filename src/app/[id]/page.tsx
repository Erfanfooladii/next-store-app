import ListDetails from "./Info/_Components/ListDetails";
const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="py-2 min-h-[650px] md:min-h-[750px] md:flex md:items-center md:gap-2">
      <ListDetails id={id} />
    </div>
  );
};
export default Product;
