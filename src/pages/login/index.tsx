import { loginUser } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleForgotPassword = () => {};

  const handleRegister = () => {
    router.push("/register");
  };

  const handleLogin = async () => {
    const res = await loginUser(email, password);

    if (res && !res.ok) {
      setError(res.error || "Something went wrong");
    } else {
      router.push("/records");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-114px)] lg:py-0 text-white">
      <div className="max-w-lg rounded-3xl overflow-hidden shadow-lg bg-slate-800 p-12 w-full">
        <h1 className="text-center m-8 text-2xl font-medium">Login</h1>

        <form>
          <div className="relative mb-6">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className="relative mb-6">
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>

          {error && (
            <div className="flex justify-center items-center gap-2 mb-4">
              <p className="text-red-500">{error}</p>
            </div>
          )}

          <div className="flex justify-end my-5">
            <button
              className="text-blue-300"
              type="button"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>

          <div className="my-8 bg-slate-300 text-center text-slate-800 font-bold rounded">
            <button className="w-full p-2" type="button" onClick={handleLogin}>
              Login
            </button>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <p>{"Don't have an account?"}</p>
            <button
              className="text-blue-300"
              type="button"
              onClick={handleRegister}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
