"use client";
import React from "react";
import { useRegisterUser } from "./hook";
import FormAuth from "../_components/FormAuth";
import InputAuth from "../_components/InputAuth";
import ButtonAuth from "../_components/ButtonAuth";
import BottomAuth from "../_components/BottomAuth";
import Notifications from "@/Components/Notification";
const Register = () => {
  const { formHandler, registerFromUser, inputHandler, errors, errorServer } =
    useRegisterUser();
  return (
    <div className="min-h-[750px] flex items-center justify-center min-w-32">
      <Notifications
        isType="error"
        message={errors.name || errors.email || errors.password || errorServer}
      />
      <FormAuth title="Register Form" formHandler={formHandler}>
        <InputAuth
          value={registerFromUser.name}
          inputHandler={inputHandler}
          nameInput="name"
          label="Your name"
        />
        <InputAuth
          value={registerFromUser.email}
          inputHandler={inputHandler}
          nameInput="email"
          label="Your email"
        />
        <InputAuth
          value={registerFromUser.password}
          inputHandler={inputHandler}
          nameInput="password"
          label="Password"
          type="password"
        />
        <ButtonAuth type="submit">Register</ButtonAuth>
        <BottomAuth
          title="Already have an account?"
          contentLink="Login"
          href="/login"
        />
      </FormAuth>
    </div>
  );
};
export default Register;
