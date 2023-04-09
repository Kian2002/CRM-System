import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { IUser } from "@/types";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const prisma = new PrismaClient();

        const user = await prisma.users.findFirst({
          where: {
            email: credentials?.email,
          },

          select: { id: true, email: true, password: true },
        });

        if (!user) {
          throw new Error("Email or password is incorrect");
        }

        const isValid = await compare(credentials!.password, user.password!);

        if (!isValid) {
          throw new Error("Email or password is incorrect");
        }

        return user;
      },
    }),
  ],

  pages: { signIn: "/login" },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user;
      session.user = user as IUser;
      return session;
    },
  },
};

export default NextAuth(options);
