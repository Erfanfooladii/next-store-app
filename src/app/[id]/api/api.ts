const getProductId = async (id: string) => {
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
