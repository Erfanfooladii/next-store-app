"use client";

import { useGetProductId } from "@/app/[id]/api/hook";

const ListDetails = ({ id }: { id: string }) => {
  const { isLoading, data, error } = useGetProductId(id);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <div className="">
      <h1 className="">{data.name}</h1>
    </div>
  );
};

export default ListDetails;
