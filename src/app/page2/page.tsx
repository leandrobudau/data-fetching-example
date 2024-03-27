"use client";

const Page2 = () => {
  const handleClick = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify({ name: "fiap", type: "B" }),
    });

    const result = await response.json();

    console.log("Clicked", result);
  };

  return (
    <div>
      <h1 className="text-xl">Page 2</h1>
      <input type="text" className="border-2" />
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

export default Page2;
