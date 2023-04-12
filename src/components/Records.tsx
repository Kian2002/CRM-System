import Link from "next/link";
import React, { FC } from "react";

import { DbRecord } from "@/types";

const Records = ({ dbRecord }: { dbRecord: DbRecord }) => {
  const records = dbRecord;

  const headers = [
    "Name",
    "Address",
    "City",
    "State",
    "Zipcode",
    "Date Created",
    "ID",
  ];

  return (
    <div className="container mx-auto relative overflow-x-auto shadow-md sm:rounded-lg mb-10 mt-10 w-full">
      <table className="w-full text-sm text-left text-slate-800">
        <thead className="bg-slate-800">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left font-bold text-white border border-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="border border-gray-300">
              <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                {record.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                {record.address}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                {record.city}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                {record.state}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                {record.zipcode}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                {record.date_created}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border border-gray-500">
                <Link
                  href={`/records/${record.id}`}
                  className="border-b border-blue-500 text-blue-500"
                >
                  {record.id}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
