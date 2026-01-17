"use client";

import Profile from "./profile";
// import Counterfunction from "./counet-func.jsx";
// import CounterClass from "./counter-class.jsx";

export default function Counterpage() {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center min-h-screen gap-4 mt-5">
        {/* <Counterfunction />
        <CounterClass /> */}
        <div className=" flex justify-center items-center mb-10 gap-2">
          <Profile />
        </div>
      </div>
    </>
  );
}
