//By default RSC
export default function FlexBoxPage(){
    console.log("Server Componenet in here");

    //Example one FlexBox
    return(
        <>
        <div className="flex flex-col md:flex-row justify-start items-start bg-purple-300 min-h-screen p-6 gap-6 ">
            <div className="h-20 w-30 p-6 bg-green-200 rounded text-center">
                Div 01
            </div>
            <div className="h-20 w-30 p-6 bg-red-200 rounded text-center">
                Div 02
            </div>
            <div className="h-20 w-30 p-6 bg-blue-200 rounded text-center">
                Div 03
            </div>
            <div className="h-20 w-30 p-6 bg-orange-200 rounded text-center">
                Div 04
            </div>
        </div>
        
        </>
    )


}


