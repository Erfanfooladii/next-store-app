import { useMutation, UseMutationResult } from "@tanstack/react-query";
import type { Register } from "./type";
import { postUser } from "./api";

export const usePostRegister = (): UseMutationResult<
  Response,
  Error,
  Register
> => {
  return useMutation({
    mutationFn: postUser,
    onError: (error: Error) => {
      console.error("Registration error:", error);
    },
  });
};
