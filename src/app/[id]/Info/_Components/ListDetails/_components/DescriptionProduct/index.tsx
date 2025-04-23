const DescriptionProduct = ({
  description,
}: {
  description: string | undefined;
}) => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-slate-600">Description</h2>
      <p className="text-slate-800">{description}</p>
    </div>
  );
};
export default DescriptionProduct;
