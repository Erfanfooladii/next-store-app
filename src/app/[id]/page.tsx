const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="bg-orange-400 rounded-md shadow-lg p-2">
      <h1 className="">products page with id :{id}</h1>
    </div>
  );
};
export default Product;
