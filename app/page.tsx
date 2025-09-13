import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Wellness Tracker</h1>
        <p>Your journey to better health starts here!</p>
        <Link href="/dashboard" className="mt-4 inline-block">
          <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded">Go to Dashboard</button>
        </Link>
    </div>
  );
}
