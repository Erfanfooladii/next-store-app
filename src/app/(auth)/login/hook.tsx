import { LoginType } from "@/app/(auth)/types";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLoginHandeler = () => {
  const { push } = useRouter();
  const [userAuth, setUserAuth] = useState<LoginType>({
    password: "",
    email: "",
  });
  const { loginUserAuth, currentUser } = useAuthStore();

  const loginHandeler = (e: React.FormEvent) => {
    e.preventDefault();
    loginUserAuth(userAuth);
    setUserAuth({
      email: "",
      password: "",
    });
    push("/");
  };
  const inputHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return {
    inputHandeler,
    loginHandeler,
    userAuth,
  };
};
