import Link from "next/link";
import Rectangle from "../components/RECTANGLE";

export default function Page2() {
    return (
      <div className="min-h-screen grid items-center justify-center bg-black">
        <Rectangle color="yellow" />
        <Link href="/" className="text-blue-500 hover:underline">
          Go to Home
        </Link>
      </div>
    );
}