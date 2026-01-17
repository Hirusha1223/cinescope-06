"use client";

import Avatar from "./avatar";

//parent component
export default function Profile() {
  return (
    <section className="flex flex-row w-3xl items-end bg-amber-300 rounded px-4 py-2">
      <div className="flex text-2xl justify-center font-bold mb-4">
        <h1>Amazing scientists</h1>
      </div>
      <div className="flex gap-4">
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
          onClick={(name) => {
            alert(name);
          }}
        />
        <Avatar
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
          onClick={(name) => {
            alert(name);
          }}
        />
        <Avatar
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
          onClick={(name) => {
            alert(name);
          }}
        />
      </div>
    </section>
  );
}
