import Head from "next/head";
import { PrismaClient } from "@prisma/client";

import Records from "@/components/Records";
import { DbRecord } from "@/types";

export default function Home({ dbRecord }: { dbRecord: DbRecord }) {
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
          <Records dbRecord={dbRecord} />
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

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const dbRecord = await prisma.posts.findMany();

  const serializedRecord = dbRecord.map((record) => {
    return {
      ...record,
      id: record.id.toString(),
      date_created: record.date_created?.toISOString(),
      phone: record.phone?.toString(),
      zipcode: record.zipcode?.toString(),
    };
  });

  return {
    props: {
      dbRecord: serializedRecord,
    },
  };
};
