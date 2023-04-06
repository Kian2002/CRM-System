import { useRouter } from "next/router";
import React from "react";

const Login = () => {
  const router = useRouter();

  const handleForgotPassword = () => {};

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleLogin = () => {};

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
            />
          </div>

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
            <button className="w-full p-2" type="submit" onClick={handleLogin}>
              Login
            </button>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <p>{"Don't have an account?"}</p>
            <button
              className="text-blue-300"
              type="button"
              onClick={handleSignUp}
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
