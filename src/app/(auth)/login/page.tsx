"use client";
import React from "react";
import { useLoginHandler } from "./hook";
import FormAuth from "../_components/FormAuth";
import InputAuth from "../_components/InputAuth";
import ButtonAuth from "../_components/ButtonAuth";
import BottomAuth from "../_components/BottomAuth";

const Login = () => {
  const { loginHandler, inputHandler, userAuth } = useLoginHandler();
  return (
    <div className="min-h-[750px] flex items-center justify-center min-w-32">
      <FormAuth title="Login Form" formHandler={loginHandler}>
        <InputAuth
          label="Your email"
          value={userAuth.email}
          nameInput="email"
          inputHandler={inputHandler}
        />
        <InputAuth
          label="password"
          value={userAuth.password}
          nameInput="password"
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
