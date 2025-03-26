import { Product } from "@/Interfaces/products";

const getProductId = async (id: string): Promise<Product | undefined> => {
  try {
    const res = await fetch(`https://kaaryar-ecom.liara.run/v1/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export { getProductId };
