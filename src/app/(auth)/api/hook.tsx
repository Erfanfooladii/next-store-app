import { useMutation, UseMutationResult } from "@tanstack/react-query";
import type { RegisterType } from "../types";
import { postUser } from "./api";

export const usePostRegister = (): UseMutationResult<
  Response,
  Error,
  RegisterType
> => {
  return useMutation({
    mutationFn: postUser,
    onError: (error: Error) => {
      console.error("Registration error:", error);
    },
  });
};
