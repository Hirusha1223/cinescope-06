import Profile from "./profile";

export default function Gallery() {
  return (
    <section>
      <div className="flex text-2xl justify-center font-bold mb-4">
        <h1>Amazing scientists</h1>
      </div>
      <div className="flex gap-4">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
