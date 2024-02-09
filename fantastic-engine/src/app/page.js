import Image from "next/image";

// create next.js component for a button with a custom title and href
const ButtonComponent = ({ title = "Go to About", href = "/about" }) => {
  return (
    <a href={href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {title}
    </a>
  );
};


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
        <ButtonComponent title="Click me!" href="/about" />
      </div>

    </main>
  );
}
