import React from "react";
import { useRouter } from "next/router";

const ViewRecord = () => {
  const router = useRouter();
  const { id } = router.query;

  // TODO: Fetch record from API

  const handleCickBack = () => {
    router.back();
  };

  const handleDeleteRecord = () => {
    // TODO: Delete record from API
  };

  const handleUpdateRecord = () => {
    router.push(`/records/${id}/update`);
  };

  return (
    <div className="flex flex-col min-w-0 break-words mt-10 bg-white border border-solid rounded border-[rgba(0,0,0,0.125)]">
      <div className="px-5 py-2 mb-0 bg-[rgba(0,0,0,0.03)] border-b border-[rgba(0,0,0,0.125)]">
        <strong>John Doe</strong>
      </div>

      <div className="flex-auto p-5">
        <p className="mt-2">
          <strong>Email: </strong>bob@gmail.com
        </p>

        <p className="mt-2">
          <strong>Phone: </strong>123-456-7890
        </p>

        <p className="mt-2">
          <strong>Address: </strong>123 Main St
        </p>

        <p className="mt-2">
          <strong>City: </strong>New York
        </p>

        <p className="mt-2">
          <strong>State: </strong>NY
        </p>

        <p className="mt-2">
          <strong>Zipcode: </strong>55555
        </p>

        <p className="mt-2">
          <strong>Create At: </strong>2023/12/2
        </p>

        <p className="mt-2">
          <strong>ID: </strong>1
        </p>
      </div>

      <div className="flex items-center justify-start px-5 py-3 border-t border-[rgba(0,0,0,0.125)]">
        <button
          onClick={handleCickBack}
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

export default ViewRecord;
