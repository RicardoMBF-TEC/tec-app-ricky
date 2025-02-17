import Link from "next/link";
import Rectangle from "./components/RECTANGLE";

export default function Page2() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-300 gap-6">
        <div className="grid grid-cols-3 gap-2">
          <Rectangle color="white" />
          <Rectangle color="black" />
          <Rectangle color="white" />
          <Rectangle color="black" />
          <Rectangle color="white" />
          <Rectangle color="black" />
          <Rectangle color="white" />
          <Rectangle color="black" />
          <Rectangle color="white" />
        </div>
        <Link href="/page2" className="text-blue-500 hover:underline">
          Go to Page 2
        </Link>
      </div>
    );
}