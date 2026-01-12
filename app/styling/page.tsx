//By default RSC
export default function style(){
    console.log("Server Componenet in here");

    return(
        <div className="flex flex-col min-h-screen justify-center items-center p-6 gap-6">
            <h1 className="text-primary font-bold text-3xl capitalize">
                    This is my first Heading as H1
            </h1>

            <div className="flex gap-4 text-xs text-center">
                    <div className="w-40 h-40 bg-primary">Background Primary</div>

                    <div className="w-40 h-40 p-4 border-primary border">Border Primary</div>

                    <div className="w-40 h-40 outline-4 outline-primary">
                            Outline Primary
                    </div>
                    <div className="w-40 h-40 relative border border-primary">
                        <h2 className="text-primary font-bold text-lg">REGA</h2>
                        <div className="w-20 h-20 bg-purple-500 absolute bottom-2 right-3 z-10"></div>
                    </div>

                    <div className="w-40 h-40 relative bg-accent">Named Colors</div>
            </div>

        </div>

        
    );
}