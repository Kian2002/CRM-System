import Head from "next/head";

import Records from "@/components/Records";

export default function Home() {
  const isLoggedIn = true;

  return (
    <>
      <Head>
        <title>Next CRM</title>
        <meta name="description" content="CRM System created using Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoggedIn ? (
        <>
          <h1 className="text-2xl text-center text-slate-950 font-bold">
            Welcome to Next CRM
          </h1>
          <Records />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <h1 className="text-2xl text-center text-slate-950 font-bold">
            Welcome to Next CRM
          </h1>
          <p className="text-center text-slate-950 font-bold">
            Please login to view records
          </p>
        </div>
      )}
    </>
  );
}
