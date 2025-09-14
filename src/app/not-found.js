import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-red-500 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Page Not Found</h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Looks like this page has gone missing.
        </p>
        <Link href="/">
          <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-red-600 transition-colors duration-300 transform hover:-translate-y-1 cursor-pointer">
            Go to the homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
