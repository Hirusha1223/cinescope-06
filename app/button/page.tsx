import { Button } from "@/component/ui/button";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
export default function vise() {
  return (
    <main className="flex-10 flex flex-col gap-6 items-center justify-center bg-white">
      <h1 className="text-4xl font-bold">Button Page</h1>

      <div className="flex gap-10">
        <Button>Click Me</Button>
        <Button variant="outline" className="ml-2">
          Click Me
        </Button>
        <Button variant="destructive">Click me</Button>
        <Button size="sm">Click me</Button>
        <Button size="lg">Click me</Button>
        <Button size="icon">
          <HomeIcon />
        </Button>
      </div>

      <div className="flex">
        <Image
          src="/star.png"
          alt="placeholder"
          width={400}
          height={300}
          className="mb-12 border rounded-xl object-cover "
        />
      </div>
    </main>
  );
}
