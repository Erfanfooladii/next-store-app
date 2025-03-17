import { Data } from "@/Interfaces/products";

const getData = async (
  search: string = "",
  page: string = "1",
  category: string = "",
  limit: string = "10"
): Promise<Data | undefined> => {
  const baseURL = "https://kaaryar-ecom.liara.run/v1/products";
  try {
    const res = await fetch(
      `${baseURL}?search=${search}&category=${category}&page=${page}&limit=${limit}`
    );
    const data: Data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return undefined;
  }
};
export { getData };
