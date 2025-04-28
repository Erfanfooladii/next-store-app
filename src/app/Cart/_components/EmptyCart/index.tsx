import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className=" min-h-[750px] flex items-center justify-center">
      <div className="bg-red-300 min-w-40 flex items-center flex-col p-2 my-2 rounded-lg">
        <h2 className="text-red-500 text-2xl font-semibold">Empty cart</h2>
        <Link className="underline hover:text-slate-500" href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
};
export default EmptyCart;
