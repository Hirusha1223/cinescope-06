"use client";

import { useState } from "react";
//this is a functional react component
export default function Counterfunction() {
  const [count, setCounter] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center gap-4 rounded-xl border border-primary w-1/2 p-8">
      <h2 className="text-lg font-bold">Functional Component (New)</h2>
      <p>Count {count}</p>

      <button
        onClick={() => setCounter(count + 1)}
        className="border border-primary py-2 px-4 font-semibold text-sm rounded-2xl cursor-pointer"
      >
        Count the number
      </button>
    </div>
  );
}
