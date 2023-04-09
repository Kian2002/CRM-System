import { signIn } from "next-auth/react";

export const loginUser = async (email: string, password: string) => {
  const result = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  return result;
};
