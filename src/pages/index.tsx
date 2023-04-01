import Head from "next/head";
import { Inter } from "next/font/google";

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

      <div>
        <h1 className={`${inter.className}`}>MAIN</h1>
      </div>
    </>
  );
}
