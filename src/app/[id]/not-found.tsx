import LoadingImage from "@/Components/LoadingImage";
import Link from "next/link";
import image404 from "@/assets/images/404-page-not-found.png";
const NotFound = ({ address }: { address: string }) => {
  return (
    <div className="min-h-[750px] flex justify-center px-3 md:p-0 gap-2 flex-col items-center">
      <div className="w-full md:w-96">
        <LoadingImage src={image404.src} />
      </div>
      <h1 className="text-red-600 text-4xl text-center font-bold">
        Page not found {"(404)"}
      </h1>
      <h2 className="text-lg">
        This page with address{" "}
        <span className="text-red-500 text-xl font-bold">{address}</span> was
        not found.
      </h2>
      <Link className=" underline text-slate-500 hover:text-slate-400" href="/">
        back home page
      </Link>
    </div>
  );
};
export default NotFound;
