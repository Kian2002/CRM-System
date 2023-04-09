import React from "react";
import { PrismaClient } from "@prisma/client";

import Records from "@/components/Records";
import { DbRecord } from "@/types";

const RecordsPage = ({ dbRecord }: { dbRecord: DbRecord }) => {
  return (
    <>
      <h1 className="text-2xl text-center text-slate-950 font-bold mt-10">
        Welcome to Next CRM
      </h1>
      <Records dbRecord={dbRecord} />
    </>
  );
};

export default RecordsPage;

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
