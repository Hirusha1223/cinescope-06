import TodoList from "@/component/Todo_List";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-amber-400 dark:bg-black sm:items-start">
        <TodoList/>
        <h1 className="text-lg font-bold capitalize">Need More information&apos;s</h1>
        <div className="flex gap-2 w-full flex-wrap">
          <Button>Click Me</Button>
          <Button variant={"outline"}>Click Me</Button>
          <Button size="icon-sm" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
          <Button variant={"secondary"}>Click Me</Button>
          <Button variant={"ghost"}>Click Me</Button>
          <Button variant={"link"}>Click Me</Button>
          <Button variant={"destructive"}>Click Me</Button>
          <Button className="bg-amber-200">Click Me</Button>


        </div>
      </main>
    </div>
  );
}
