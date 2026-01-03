export default function aboutPage(){
    return(
        <div className="flex flex-col min-h-screen">
      {/* {Header Section} */}

    <header className="flex-1 flex items-center justify-center bg-blue-200">
      <span>I&apos;m the header section</span>
    </header>

    {/* {Main Section} */}

    <main className="flex-10 flex items-center justify-center bg-yellow-200">
      <h1 className="text-4xl font-bold">I&apos;m the About Page</h1>
    </main>

    {/* {Footer Section} */}

    <footer className="flex-1 flex items-center justify-center bg-red-600">
      <span>I&apos;m the footer section</span>
    </footer>


    </div>
    )
}