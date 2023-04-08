import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = async () => {
    if (validatePassword()) {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const data = await res.json();

        if (data.error) {
          setError(data.error);
        } else {
          router.push("/"); // TODO - Auth user/create a session and redirect to dashboard
        }
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

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
              required
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              minLength={6}
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
              value={confirmPassword}
              minLength={6}
            />
          </div>

          {!validatePassword() && (
            <div className="text-red-500 text-center mb-6">
              Passwords do not match
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center mb-6">{error}</div>
          )}

          <div className="my-8 bg-slate-300 text-center text-slate-800 font-bold rounded">
            <button
              className="w-full p-2"
              type="button"
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
