import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { IRecord } from "@/types";

const UpdateRecord = ({ record }: { record: IRecord }) => {
  const router = useRouter();

  const [name, setName] = useState(record?.name);
  const [address, setAddress] = useState(record?.address);
  const [city, setCity] = useState(record?.city);
  const [state, setState] = useState(record?.state);
  const [zipcode, setZipcode] = useState(record?.zipcode);

  const handleUpdate = async () => {
    const res = await fetch("/api/updateRecord", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: record?.id,
        name,
        address,
        city,
        state,
        zipcode,
      }),
    });

    if (res.status === 200) {
      alert("Record updated successfully");
      router.push("/records");
    } else {
      alert("Something went wrong");
      router.push("/records");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-114px)] lg:py-0">
      <h1 className="text-3xl text-slate-900 font-medium">Update Record</h1>

      {router.isFallback && <div>Loading...</div>}

      <form action="" className="block mb-4 w-6/12">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="address"
          className="form-control"
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />

        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <label htmlFor="state" className="form-label">
          State
        </label>
        <input
          type="text"
          className="form-control"
          id="state"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />

        <label htmlFor="zipcode" className="form-label">
          Zipcode
        </label>
        <input
          type="text"
          className="form-control"
          id="zipcode"
          value={zipcode}
          onChange={(e) => {
            setZipcode(Number(e.target.value));
          }}
        />

        <button
          type="button"
          className="px-4 py-2 mt-4 text-sm font-bold text-white uppercase bg-slate-900 rounded shadow outline-none active:bg-slate-400 hover:shadow-lg focus:outline-none"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();

  const records = await prisma.posts.findMany();

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
  const id = context.params?.id;

  const record = await prisma.posts.findUnique({
    where: {
      id: Number(id),
    },
  });

  const serializedRecord = {
    id: record?.id.toString(),
    name: record?.name,
    address: record?.address,
    city: record?.city,
    state: record?.state,
    zipcode: record?.zipcode?.toString(),
  };

  return {
    props: {
      record: serializedRecord,
    },
  };
};

export default UpdateRecord;
