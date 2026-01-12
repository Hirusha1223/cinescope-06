// Example grid 03
export default function Gridpage(){
    return(
        <div className="flex min-h-screen justify-center items-center bg-amber-200 p-6">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="w-full h-40 bg-red-200 text-center">div 1</div>
                <div className="w-full h-40 bg-green-200 text-center">div 2</div>
                <div className="w-full h-40 bg-blue-200 text-center">div 3</div>
                <div className="w-full h-40 bg-orange-200 text-center">div 4</div>
                <div className="w-full h-40 bg-emerald-200 text-center">div 5</div>
                <div className="w-full h-40 bg-fuchsia-200 text-center">div 6</div>
                <div className="w-full h-40 bg-gray-200 text-center">div 7</div>
                <div className="w-full h-40 bg-lime-200 text-center">div 8</div>
            </div>
        </div>
    );
}