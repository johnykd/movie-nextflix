"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import LogoIcon from "../icons/Logo";
import N from "../icons/N";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const pages = [
    { href: "/", label: t("navBar.home") },
    { href: "/tvshows", label: t("navBar.tvShows") },
    { href: "/movies", label: t("navBar.movies") },
    { href: "/new-popular", label: t("navBar.newPopular") },
    { href: "/my-list", label: t("navBar.myList") },
    { href: "/languages", label: t("navBar.browseByLanguages") },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex flex-row absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(20,20,20,0)] w-full justify-between">
        <div className="flex flex-row items-center">
          <div className="ml-12 mt-6">
            <LogoIcon />
          </div>
          <div className="flex flex-row space-x-4 text-white ml-8 mt-6 text-[22px]">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={
                  pathname === page.href ? "font-bold" : "text-gray-400"
                }
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mr-12 mt-6">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile  */}
      <div className="md:hidden absolute bg-gradient-to-t from-[rgba(8, 7, 3, 1)] to-[rgba(2,2,2,0)] w-full m-10">
        <div>
          <N />
        </div>
        <div className="flex flex-row justify-center gap-8 text-white">
          <Link href={"/"}>
            <p className="text-[16px]">{t("navBar.tvShows")}</p>
          </Link>
          <Link href={"/"}>
            <p className="text-[16px]">{t("navBar.movies")}</p>
          </Link>
          <Link href={"/"}>
            <p className="text-[16px]">{t("navBar.category")}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
