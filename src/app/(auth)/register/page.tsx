"use client";
import Link from "next/link";
import React from "react";
import { useRegisterUser } from "./hook";
const Register = () => {
  const { formHandler, registerFromUser, inputHandler } = useRegisterUser();
  return (
    <div className="min-h-[750px] flex items-center justify-center min-w-32">
      <form
        onSubmit={formHandler}
        className="flex border border-orange-900 p-4 rounded-lg gap-2 flex-col items-center"
      >
        <h1 className="text-2xl font-semibold">Register Form</h1>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={registerFromUser.name}
            onChange={inputHandler}
            className="p-1 shadow focus:outline-none rounded-md"
            required
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={inputHandler}
            value={registerFromUser.email}
            className="p-1 shadow focus:outline-none rounded-md"
            required
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={inputHandler}
            value={registerFromUser.password}
            className="p-1 shadow focus:outline-none rounded-md"
            required
            minLength={6}
          />
        </div>
        <button
          type="submit"
          className="bg-orange-400 px-10 py-2 shadow hover:bg-orange-300 rounded-full"
        >
          Register
        </button>
        <div>
          <p>
            Already have an account?{" "}
            <Link className="text-gray-600 hover:underline" href="/login">
              Login in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Register;
