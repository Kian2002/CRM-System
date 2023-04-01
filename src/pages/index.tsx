import Head from "next/head";
import { Inter } from "next/font/google";

import Records from "@/components/Records";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next CRM</title>
        <meta name="description" content="CRM System created using Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Records />
    </>
  );
}
