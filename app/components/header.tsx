import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  name: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};

export const Header = ({ name, pages }: HeaderProps) => {
  return (
    <header className="flex flex-col relative bg-linear-557AFF w-full h-48">
      <div className="flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10">
        <nav className="text-right flex flex-row sm:gap-6 self-end gap-1">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="px-1 sm:px-4 py-1 sm:py-2 min-w-100 border-2 border-white bg-transparent font-semibold hover:bg-blue hover:text-blue-light font-display uppercase tracking-wide sm:bg-none
								"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/" className="inline">
          <h1 className="text-white inline w-auto uppercase pl-2 sm:pl-0"> {name} </h1>
        </Link>
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
