import { useState } from "react";
import { RegisterType } from "../_types";
import { useMutationRegister } from "../api/hook";
import { useValidateEmail } from "@/utils/validateEmail.hook";
import { useRouter } from "next/navigation";

export const useRegisterUser = () => {
  const [registerFromUser, setRegisterFromUser] = useState<RegisterType>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<RegisterType>({
    name: "",
    email: "",
    password: "",
  });
  const [errorServer, setErrorServer] = useState<string | undefined>("");
  const { push } = useRouter();
  const { mutate } = useMutationRegister();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterFromUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateRegister = () => {
    let isValid = true;
    const newErrors = { password: "", email: "", name: "" };

    if (!registerFromUser.email.trim()) {
      newErrors.email = "Please fill in the email field.";
      isValid = false;
    } else if (!useValidateEmail(registerFromUser.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!registerFromUser.name.trim()) {
      newErrors.name = "Please fill in the name field.";
      isValid = false;
    }

    if (!registerFromUser.password.trim()) {
      newErrors.password = "Please fill in the password field.";
      isValid = false;
    } else if (registerFromUser.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateRegister()) {
      mutate(registerFromUser, {
        onError: (error) => {
          setErrorServer(error.message);
        },
        onSuccess: (data) => {
          data.user;
          push("/");
        },
      });
      setRegisterFromUser({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  return {
    inputHandler,
    formHandler,
    registerFromUser,
    errors,
    errorServer,
  };
};
