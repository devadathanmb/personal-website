import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-5">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Hello! I&apos;m Devadathan M B<span className="blink hidden md:inline">|</span>
          </h1>
          <p className="text-gray-500 py-4">
            A passionate computer science student from India
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="w-fit px-6 py-3 my-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              <Link href="/about">About me</Link>
            </button>
            <button className="w-fit px-6 mx-3 py-3 my-3  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              <Link href="/blogs">Blogs</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
