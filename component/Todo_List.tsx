import Image from "next/image";

export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <Image
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
        width={200} 
        height={300}

      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}