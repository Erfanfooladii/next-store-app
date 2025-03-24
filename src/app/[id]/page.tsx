import ListDetails from "./Info/_Components/ListDetails";
const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="bg-orange-400 min-h-[550px] rounded-md shadow-lg p-2">
      <ListDetails id={id} />
    </div>
  );
};
export default Product;
