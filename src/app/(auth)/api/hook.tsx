import { useMutation } from "@tanstack/react-query";
import type { LoginType, RegisterType } from "../_types";
import { postUserRegister, postUserLogin } from "./api";
import { useAuthStore } from "@/stores/authStore";
/* This is hook for register users */

export const useMutationRegister = () => {
  const { addUserAuth } = useAuthStore();

  return useMutation({
    mutationFn: (formData: RegisterType) => postUserRegister(formData),
    onSuccess: (data) => {
      addUserAuth(data);
    },
    onError: (error) => {
      console.error("Registration error:", error.message);
    },
  });
};
/* This is hook for login users */

export const useMutationLogin = () => {
  const { addUserAuth } = useAuthStore();

  return useMutation({
    mutationFn: (formData: LoginType) => postUserLogin(formData),
    onSuccess: (data) => {
      addUserAuth(data);
    },
  });
};
