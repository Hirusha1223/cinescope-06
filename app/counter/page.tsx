import Counterfunction from "./counet-func.jsx";
import CounterClass from "./counter-class.jsx";

export default function Counterpage() {
  return (
    <div className="flex  justify-center items-center min-h-screen gap-4">
      <Counterfunction />
      <CounterClass />
    </div>
  );
}
