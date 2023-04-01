import React from "react";
import Link from "next/link";

const Navbar = () => {
  const isLoggedIn = true; // TODO: Replace with actual logic

  return (
    <header className="flex w-full justify-between items-center bg-slate-800 text-white p-3 sm:px-6 sm:py-4">
      <h1 className="text-3xl border-b-2 hover:text-slate-400 hover:border-slate-400">
        <Link href="/">Next CRM</Link>
      </h1>

      <nav className="ml-6 sm:text-lg text-slate-400 text-xs">
        <ul className="flex gap-6 hover:[&>*]:text-white hover:[&>*]:border-b">
          {isLoggedIn ? (
            <>
              <li>
                <Link href="/records/new">Add Record</Link>
              </li>
              <li>
                <Link href="/logout">Logout</Link>
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

// TODO: use next serverless functions to handle login and register
