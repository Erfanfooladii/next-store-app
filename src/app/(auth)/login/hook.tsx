import { LoginType } from "@/app/(auth)/types";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLoginHandler = () => {
  const { push } = useRouter();
  const [userAuth, setUserAuth] = useState<LoginType>({
    password: "",
    email: "",
  });
  const { loginUserAuth } = useAuthStore();

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    loginUserAuth(userAuth);
    setUserAuth({
      email: "",
      password: "",
    });
    push("/");
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return {
    inputHandler,
    loginHandler,
    userAuth,
  };
};
