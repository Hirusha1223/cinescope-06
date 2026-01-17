"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <p className="text-2xl font-medium">Count {count}</p>

      <button
        onClick={() => setCounter(count + 1)}
        className="border border-primary py-2 px-4 font-semibold text-sm rounded-2xl cursor-pointer"
      >
        Count the number
      </button>
    </div>
  );
}
