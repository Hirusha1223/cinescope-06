import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Cinescope Dashboard",
  description: "Learn more about Cinescope Dashboard ",
};



export default function aboutPage(){
    return(
        <div className="flex flex-col min-h-screen">
      {/* {Header Section} */}

    

    {/* {Main Section} */}

    <main className="flex-10 flex items-center justify-center bg-yellow-200">
      <h1 className="text-4xl font-bold">I&apos;m the About Page</h1>
    </main>

    {/* {Footer Section} */}

   


    </div>
    )
}