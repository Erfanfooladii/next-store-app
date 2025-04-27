import { LoginType } from "@/app/(auth)/_types";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import { useMutationLogin } from "../api/hook";
import { useRouter } from "next/navigation";

export const useLoginHandler = () => {
  const { mutate } = useMutationLogin();
  const { push } = useRouter();

  const [loginUser, setLoginUser] = useState<LoginType>({
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState<LoginType>({
    password: "",
    email: "",
  });
  const [errorServer, setErrorServer] = useState<string | undefined>("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorServer("");
  };

  const { loginUserAuth } = useAuthStore();

  function validateEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const validateLogin = () => {
    let isValid = true;
    const newErrors = { password: "", email: "" };

    if (!loginUser.email.trim()) {
      newErrors.email = "Please fill in the email field.";
      isValid = false;
    } else if (!validateEmail(loginUser.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!loginUser.password.trim()) {
      newErrors.password = "Please fill in the password field.";
      isValid = false;
    } else if (loginUser.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateLogin()) {
      mutate(loginUser, {
        onError: (error) => {
          setErrorServer(error.message);
        },
        onSuccess: (data) => {
          loginUserAuth(data.user);
          push("/");
        },
      });
    }
  };

  return {
    inputHandler,
    loginHandler,
    loginUser,
    errors,
    errorServer,
  };
};
