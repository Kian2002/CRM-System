import Link from "next/link";
import React from "react";

const Records = () => {
  const records = [
    {
      Name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      created_at: "2021-01-01",
      id: 1,
    },
  ];

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
    <table className="w-full border border-collapse border-gray-300 shadow-lg mt-10">
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
        {records.map((row, index) => (
          <tr key={index} className="bg-white">
            {Object.values(row).map((value, index) =>
              index === 6 ? (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-no-wrap border border-gray-500"
                >
                  <Link
                    href={`/records/${row.id}`}
                    className="border-b border-blue-500 text-blue-500"
                  >
                    {row.id}
                  </Link>
                </td>
              ) : (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-no-wrap border border-gray-500"
                >
                  {value}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Records;
