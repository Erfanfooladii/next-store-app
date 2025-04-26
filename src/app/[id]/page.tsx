"use server";
import ListDetails from "./Info/_Components/ListDetails";
import NotFound from "./not-found";
const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const isValidId = /^[0-9a-f]{24}$/.test(id);

  if (!isValidId) {
    return <NotFound address={id} />;
  }
  return (
    <div className="py-2 min-h-[650px] md:min-h-[750px] md:flex md:items-center md:gap-2">
      <ListDetails id={id} />
    </div>
  );
};
export default Product;
