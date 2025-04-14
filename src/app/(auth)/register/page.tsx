"use client";
import Link from "next/link";
import React, { useState } from "react";
import type { Register } from "../api/type";
import { useMutation } from "@tanstack/react-query";
import { postUser } from "../api/api";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
const Register = () => {
  const { addUserAuth, currentUser } = useAuthStore();
  const [registerFromUser, setRegisterFromUser] = useState<Register>({
    name: "",
    email: "",
    password: "",
  });
  const { push } = useRouter();

  const mutation = useMutation({
    mutationFn: (formData: Register) => postUser(formData),
    onSuccess: (data) => {
      addUserAuth(data);
      push("/");
    },
    onError: (error) => {
      console.error("Registration error:", error.message);
    },
  });
  console.log(currentUser);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(registerFromUser);
    setRegisterFromUser({
      name: "",
      email: "",
      password: "",
    });
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterFromUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
