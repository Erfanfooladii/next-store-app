"use client";
import React from "react";
import { useLoginHandler } from "./hook";
import FormAuth from "../_components/FormAuth";
import InputAuth from "../_components/InputAuth";
import ButtonAuth from "../_components/ButtonAuth";
import BottomAuth from "../_components/BottomAuth";
import Notifications from "@/Components/Notification";

const Login = () => {
  const { loginHandler, inputHandler, loginUser, errors, errorServer } =
    useLoginHandler();
  return (
    <div className="min-h-[750px] flex items-center justify-center min-w-32">
      <Notifications
        isType="error"
        message={errors.email || errors.password || errorServer}
      />
      <FormAuth title="Login Form" formHandler={loginHandler}>
        <InputAuth
          label="Your email"
          value={loginUser.email}
          nameInput="email"
          type="text"
          inputHandler={inputHandler}
        />
        <InputAuth
          label="password"
          value={loginUser.password}
          nameInput="password"
          type="text"
          inputHandler={inputHandler}
        />
        <ButtonAuth type="submit">Login</ButtonAuth>
        <BottomAuth
          title="Create an account"
          contentLink="Register"
          href="/register"
        />
      </FormAuth>
    </div>
  );
};
export default Login;
