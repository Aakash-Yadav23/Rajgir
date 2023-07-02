import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="flex fixed gap-5 w-full justify-between z-[100] pl-[20px] pt-[10px] pb-[10px] pr-[25px]">
      <h1 className="text-white font-bold text-3xl">Rajgir</h1>

      <nav className="flex gap-4 hidden items-center text-white sm:flex">
        <Link href="/">Discover</Link>
        <Link href="/saved-trip">Saved Trip</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>

      <div className="relative flex flex-col gap-3 text-white items-end sm:hidden md:hidden lg:hidden justify-center">
        <div
          className="flex gap-3 items-center text-white sm:hidden md:hidden lg:hidden justify-center"
          onClick={() => setNavOpen(!navOpen)}
        >
          <HiMenuAlt1
            className={`cursor-pointer text-white ${
              navOpen ? "hidden" : "block"
            }`}
            size={20}
          />
          <GrFormClose
        
            className={`cursor-pointer text-white ${
              navOpen ? "block " : "hidden"
            }`}
            size={20}
          />
        </div>
        <nav
          className={`absolute w-[250px] z-[100]  backdrop-blur-lg flex flex-col gap-2 text-white p-5 ${
            navOpen
              ? "translate-y-[114px] transition duration-1000 ease-in-out"
              : "translate-y-[-100%] transition duration-1000 ease-in-out"
          }`}
        >
          <Link href="/">Discover</Link>
          <Link href="/saved-trip">Saved Trip</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
