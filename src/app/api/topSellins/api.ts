const getTopSellins = async () => {
  try {
    const res = await fetch(
      "https://kaaryar-ecom.liara.run/v1/products/top-rated"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getTopSellins;
