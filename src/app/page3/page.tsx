"use client";
import { useState } from "react";

const Page3 = () => {
  const [name, setName] = useState("");

  const handleClick = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify({ name: name, type: "B" }),
    });

    const result = await response.json();

    console.log("Clicked", result);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1 className="text-xl">Page 2</h1>
      <input onChange={handleChange} type="text" className="border-2" />
      <br />
      <select>
        <option>Item</option>
        <option>Item</option>
        <option>Item</option>
        <option>Item</option>
      </select>
      <br />
      <button onClick={handleClick} className="bg-slate-500 p-2">
        OK
      </button>
    </div>
  );
};

export default Page3;
