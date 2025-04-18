"use client";
import Link from "next/link";
import React from "react";
import { useLoginHandeler } from "./hook";

const Login = () => {
  const { loginHandeler, inputHandeler, userAuth } = useLoginHandeler();
  return (
    <div className="min-h-[750px] flex items-center justify-center min-w-32">
      <form
        onSubmit={loginHandeler}
        className="flex border border-orange-900 p-4 rounded-lg gap-2 flex-col items-center"
      >
        <h1 className="text-2xl font-semibold">Login Form</h1>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="email">Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={inputHandeler}
            value={userAuth.email}
            className="p-1 shadow focus:outline-none rounded-md"
            required
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={inputHandeler}
            value={userAuth.password}
            className="p-1 shadow focus:outline-none rounded-md"
          />
        </div>
        <button className="bg-orange-400 px-10 py-2 shadow hover:bg-orange-300 rounded-full">
          Register
        </button>
        <div>
          <p>
            Create an account{" "}
            <Link className="text-gray-600 hover:underline" href="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
