"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  id: number;
  name: string;
  path: string;
}

export default function Navbar() {
  const [domain, setDomain] = useState("devadathanmb");
  useEffect(() => {
    setDomain(window.location.hostname);
  });
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const links: Link[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Blogs",
      path: "/blogs",
    },
    {
      id: 4,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="flex bg-black px-4 justify-between items-center w-full h-16 fixed">
      <div>
        <h1 className="text-2xl ml-2">
          <Link href="/">{domain}</Link>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            id={link.id.toString()}
            className={`px-4 cursor-pointer capitalize font-medium ${
              pathname === link.path ||
              (pathname.includes(link.path) && link.path.length > 1)
                ? "text-white"
                : "text-gray-500 hover:text-white"
            } hover:scale:-105 duration-200`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}{" "}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointyer pr-4 md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              id={link.id.toString()}
              className={`px-4 cursor-pointer py-6 text-4xl capitalize font-medium ${
                pathname === link.path ||
                (pathname.includes(link.path) && link.path.length > 1)
                  ? "text-white"
                  : "text-gray-500 hover:text-white"
              } hover:scale:-105 duration-200`}
            >
              <Link onClick={() => setNav(!nav)} href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}{" "}
        </ul>
      )}
    </div>
  );
}
