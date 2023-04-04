import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { DbRecord } from "@/types";
import { PrismaClient } from "@prisma/client";

const ViewRecord = ({ dbRecord }: { dbRecord: DbRecord }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleClickBack = () => {
    router.back();
  };

  const handleDeleteRecord = async () => {
    const res = await fetch("/api/deleteRecord", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.status === 200) {
      router.push("/");
    }
  };

  const handleUpdateRecord = () => {
    router.push(`/records/${id}/update`);
  };

  return (
    <div className="flex flex-col min-w-0 break-words mt-10 bg-white border border-solid rounded border-[rgba(0,0,0,0.125)]">
      {dbRecord.map((record) => (
        <div key={record.id}>
          <div className="px-5 py-2 mb-0 bg-[rgba(0,0,0,0.03)] border-b border-[rgba(0,0,0,0.125)]">
            <strong>{record.name}</strong>
          </div>

          <div className="flex-auto p-5">
            <p className="mt-2">
              <strong>Email: </strong>
              {record.email}
            </p>

            <p className="mt-2">
              <strong>Phone: </strong>
              {record.phone}
            </p>

            <p className="mt-2">
              <strong>Address: </strong>
              {record.address}
            </p>

            <p className="mt-2">
              <strong>City: </strong>
              {record.city}
            </p>

            <p className="mt-2">
              <strong>State: </strong>
              {record.state}
            </p>

            <p className="mt-2">
              <strong>Zipcode: </strong>
              {record.zipcode}
            </p>

            <p className="mt-2">
              <strong>Created At: </strong>
              {record.date_created}
            </p>

            <p className="mt-2">
              <strong>ID: </strong>
              {record.id}
            </p>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-start px-5 py-3 border-t border-[rgba(0,0,0,0.125)]">
        <button
          onClick={handleClickBack}
          className="px-4 py-2 mr-1 text-sm font-bold text-white uppercase bg-slate-900 rounded shadow outline-none active:bg-slate-400 hover:shadow-lg focus:outline-none"
        >
          Back
        </button>

        <button
          onClick={handleDeleteRecord}
          className="px-4 py-2 mr-1 text-sm font-bold text-white uppercase bg-red-500 rounded shadow outline-none active:bg-red-900 hover:shadow-lg focus:outline-none"
        >
          Delete
        </button>

        <button
          onClick={handleUpdateRecord}
          className="px-4 py-2 mr-1 text-sm font-bold text-white uppercase bg-slate-900 rounded shadow outline-none active:bg-slate-400 hover:shadow-lg focus:outline-none"
        >
          Update Record
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const prisma = new PrismaClient();

  const records = await prisma.posts.findMany({
    select: {
      id: true,
    },
  });

  const paths = records.map((record) => ({
    params: { id: record.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prisma = new PrismaClient();

  const dbRecord = await prisma.posts.findMany({
    where: {
      id: Number(context.params?.id),
    },
  });

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

export default ViewRecord;
