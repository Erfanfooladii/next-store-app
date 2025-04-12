import { Register } from "./type";

export const postUser = async (userData: Register) => {
  try {
    const res = await fetch("https://kaaryar-ecom.liara.run/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
