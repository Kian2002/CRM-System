import { useRouter } from "next/router";
import React, { useState } from "react";

const NewRecord = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "zipcode":
        setZipcode(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/newRecord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        city,
        state,
        zipcode,
      }),
    });

    if (res.status === 200) {
      alert("Record created");
      router.push("/");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col mt-10 justify-normal items-center">
      <h1 className="text-3xl text-slate-900 font-medium">New Record</h1>

      <form action="" className="block mb-4 w-6/12">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={handleChanges}
        />

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleChanges}
        />

        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          name="phone"
          type="phone"
          className="form-control"
          id="phone"
          value={phone}
          onChange={handleChanges}
        />

        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          name="address"
          type="address"
          className="form-control"
          id="address"
          value={address}
          onChange={handleChanges}
        />

        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          name="city"
          type="text"
          className="form-control"
          id="city"
          value={city}
          onChange={handleChanges}
        />

        <label htmlFor="state" className="form-label">
          State
        </label>
        <input
          name="state"
          type="text"
          className="form-control"
          id="state"
          value={state}
          onChange={handleChanges}
        />

        <label htmlFor="zipcode" className="form-label">
          Zipcode
        </label>
        <input
          name="zipcode"
          type="text"
          className="form-control"
          id="zipcode"
          value={zipcode}
          onChange={handleChanges}
        />

        <button
          type="button"
          className="px-4 py-2 mt-4 text-sm font-bold text-white uppercase bg-slate-900 rounded shadow outline-none active:bg-slate-400 hover:shadow-lg focus:outline-none"
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewRecord;
