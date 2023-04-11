import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isLoggedIn = useSession().data?.user;

  const handleSignOut = async () => {
    await signOut();

    router.push("/login");
  };

  return (
    <header className="flex w-full justify-between items-center bg-slate-800 text-white p-3 sm:px-6 sm:py-4">
      <h1 className="text-3xl border-b-2 hover:text-slate-400 hover:border-slate-400">
        <Link href="/records">Next CRM</Link>
      </h1>

      <nav className="ml-6 sm:text-lg text-slate-400 text-xs">
        <ul className="flex gap-6 hover:[&>*]:text-white hover:[&>*]:border-b">
          {isLoggedIn ? (
            <>
              <li>
                <Link href="/records/new">Add Record</Link>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
