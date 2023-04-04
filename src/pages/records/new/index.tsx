import React from "react";

const NewRecord = () => {
  return (
    <div className="flex flex-col mt-10 justify-normal items-center">
      <h1 className="text-3xl text-slate-900 font-medium">New Record</h1>

      <form action="" className="block mb-4 w-6/12">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" />

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" />

        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input type="phone" className="form-control" id="phone" />

        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input type="address" className="form-control" id="address" />

        <label htmlFor="city" className="form-label">
          City
        </label>
        <input type="text" className="form-control" id="city" />

        <label htmlFor="state" className="form-label">
          State
        </label>
        <input type="text" className="form-control" id="state" />

        <label htmlFor="zipcode" className="form-label">
          Zipcode
        </label>
        <input type="text" className="form-control" id="zipcode" />

        <button
          type="submit"
          className="px-4 py-2 mt-4 text-sm font-bold text-white uppercase bg-slate-900 rounded shadow outline-none active:bg-slate-400 hover:shadow-lg focus:outline-none"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewRecord;