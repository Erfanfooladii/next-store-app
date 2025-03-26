"use client";

import { useGetProductId } from "@/app/[id]/api/hook";
import SliderImages from "../SliderImage";

const ListDetails = ({ id }: { id: string }) => {
  const { isLoading, data, error } = useGetProductId(id);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <div className="md:flex md:gap-2 md:justify-center">
      <div className="max-w-[700px] rounded-lg min-h-72 p-2 bg-orange-400">
        <SliderImages images={data?.images} />
      </div>
      <div className="p-2">
        <div className="flex h-full flex-col border-b border-white py-1 md:justify-between">
          <h1 className="text-3xl font-semibold border-b border-white">
            {data?.name}
          </h1>
          <div className="">
            <h2 className="text-2xl font-semibold text-slate-600">
              Description
            </h2>
            <p className="text-slate-800">{data?.description}</p>
          </div>
          <div className="flex flex-col">
            <p>
              Rating: <span>{Number(data?.rating).toFixed(2)}</span>
            </p>
            <p>
              Number of points:
              <span>{data?.ratingCount}</span>
            </p>
          </div>
          <p className="text-xl text-slate-600">
            Price:
            <span className="text-2xl">{Math.round(Number(data?.price))}</span>
            <i className="text-red-700">$</i>
          </p>
          <div className="flex gap-2">
            <div className="flex gap-1">
              <label htmlFor="qyt">QYT: </label>
              <input
                id="qyt"
                placeholder="0"
                className="max-w-11"
                type="number"
              />
            </div>
            <div className="flex gap-1">
              <label htmlFor="color">COLOR: </label>
              <select id="color">
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
              </select>
            </div>
          </div>
          <div className="flex gap-1 justify-center py-2">
            <a className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#434343"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            </a>
            <a className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#434343"
              >
                <path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z" />
              </svg>
            </a>
            <a className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#434343"
              >
                <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
              </svg>
            </a>
          </div>
          <button className="bg-orange-500 hover:bg-slate-500 rounded-md p-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
