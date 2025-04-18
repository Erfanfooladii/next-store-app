import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import { RegisterType } from "../types";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { postUser } from "../api/api";

export const useRegisterUser = () => {
  const { addUserAuth } = useAuthStore();
  const [registerFromUser, setRegisterFromUser] = useState<RegisterType>({
    name: "",
    email: "",
    password: "",
  });
  const { push } = useRouter();

  const mutation = useMutation({
    mutationFn: (formData: RegisterType) => postUser(formData),
    onSuccess: (data) => {
      addUserAuth(data);
      push("/");
    },
    onError: (error) => {
      console.error("Registration error:", error.message);
    },
  });

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(registerFromUser);
    setRegisterFromUser({
      name: "",
      email: "",
      password: "",
    });
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterFromUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return {
    inputHandler,
    formHandler,
    registerFromUser,
  };
};
