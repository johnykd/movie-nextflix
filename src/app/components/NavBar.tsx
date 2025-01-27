"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "./icons/Logo";
import N from "./icons/N";

const NavBar = () => {
  const pathname = usePathname();

  const pages = [
    { href: "/", label: "Home" },
    { href: "/tvshows", label: "TV Shows" },
    { href: "/movies", label: "Movies" },
    { href: "/new-popular", label: "New & Popular" },
    { href: "/my-list", label: "My List" },
    { href: "/languages", label: "Browse by Languages" },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex flex-row absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(20,20,20,0)] w-full">
        <div className="ml-12 mt-6">
          <LogoIcon />
        </div>
        <div className="flex flex-row space-x-4 text-white ml-8 mt-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={pathname === page.href ? "font-bold" : "text-gray-400"}
            >
              <p className="text-[22px]">{page.label}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile  */}
      <div className="md:hidden absolute bg-gradient-to-t from-[rgba(8, 7, 3, 1)] to-[rgba(2,2,2,0)] w-full m-10">
        <div>
          <N />
        </div>
        <div className="flex flex-row justify-center gap-8 text-white">
          <Link href={"/"}>
            <p className="text-[16px]">TV Shows</p>
          </Link>
          <Link href={"/"}>
            <p className="text-[16px]">Movies</p>
          </Link>
          <Link href={"/"}>
            <p className="text-[16px]">Category</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
