import ListDetails from "./Info/_Components/ListDetails";
const Product = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="bg-orange-400 rounded-md shadow-lg p-2">
      <ListDetails id={id} />
    </div>
  );
};
export default Product;
