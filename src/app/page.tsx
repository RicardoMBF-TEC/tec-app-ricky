import Link from "next/link";
import Rectangle from "./components/RECTANGLE";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Rectangle color="red"/>
      <Link href="/page2" className="text-blue-500 hover:underline">
        Go to page 2
      </Link>
    </div>
  );
}