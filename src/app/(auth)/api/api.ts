import { LoginType, RegisterType } from "../_types";
/* This is fetch for register users */

export const postUserRegister = async (userData: RegisterType) => {
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

/* This is fetch for login users */
export const postUserLogin = async (userData: LoginType) => {
  try {
    const res = await fetch("https://kaaryar-ecom.liara.run/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("Invalid credentials");
      }
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
