"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "./icons/Logo";

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
    <div className="flex flex-row absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(20,20,20,0)] w-full">
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
  );
};

export default NavBar;
