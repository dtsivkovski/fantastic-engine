import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Create slightly smaller divs inside the main div */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center">
          Welcome to my website!
        </h1>
        <p className="text-xl text-center m-6">
          Testing out Next.js and Tailwind CSS
        </p>
      </div>

    </main>
  );
}
