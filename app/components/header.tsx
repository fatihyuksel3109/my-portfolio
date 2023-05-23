"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type HeaderProps = {
  name: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};

export const Header = ({ name, pages }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-col relative bg-linear-557AFF w-full h-48">
      <div className="flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10">
        {isSmallScreen ? (
          <nav className="text-right self-end mr-10">
            <button
              onClick={toggleMenu}
              className="btn px-1 sm:px-4 py-1 sm:py-2 border-2 border-white text-white bg-transparent font-semibold hover:bg-white hover:text-blue tracking-wide sm:bg-none rounded-full"
            >
              Menu
            </button>
            {menuOpen && (
              <div className="absolute top-14 right-10 bg-white w-30 rounded-lg">
                {pages.map((page) => (
                  <Link
                    key={page.id}
                    href={page.link}
                    className="block px-4 py-2 text-blue hover:bg-blue hover:text-white"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            )}
          </nav>
        ) : (
          <nav className="nav-dropdown sm:block text-right flex flex-row sm:flex-row sm:gap-6 self-end gap-1 mr-10 sm:2">
            {pages.map((page) => {
              return (
                <Link
                  aria-label={page.label}
                  key={page.id}
                  href={page.link}
                  className="btn px-1 sm:px-4 py-1 sm:py-2 border-2 mr-4 border-white text-white bg-transparent font-semibold hover:bg-white hover:text-blue tracking-wide sm:bg-none rounded-full"
                >
                  {page.label}
                </Link>
              );
            })}
          </nav>
        )}

        <div className="">
          <Link href="/" className="inline">
            <h1 className="animate-typing uppercase overflow-hidden whitespace-nowrap pr-5 text-4xl text-white font-bold">
              {name}
            </h1>
          </Link>
        </div>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className="w-full h-48 object-cover object-top absolute mb-6"
        src="/images/header.jpg"
        alt={`Image of ${name}`}
        aria-label={`Image of ${name}`}
      />
    </header>
  );
};
