import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {};

  const validatePassword = () => {
    if (password !== confirmPassword) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-114px)] lg:py-0 text-white">
      <div className="max-w-lg rounded-3xl overflow-hidden shadow-lg bg-slate-800 p-12 w-full">
        <h1 className="text-center m-8 text-2xl font-medium">Register</h1>

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
              required
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="relative mb-6">
            <input
              className="form-control"
              type="password"
              name="password"
              required
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          {!validatePassword() && (
            <div className="text-red-500 text-center mb-6">
              Passwords do not match
            </div>
          )}

          <div className="my-8 bg-slate-300 text-center text-slate-800 font-bold rounded">
            <button
              className="w-full p-2"
              type="submit"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <p>{"Already have an account?"}</p>
            <button
              className="text-blue-300"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
