import Link from "next/link";
import React from "react";
import {HiMenuAlt1} from 'react-icons/hi'
const Navbar = () => {
  return (
    <header className="flex gap-5 w-full justify-between p-[25px]">
      <h1>Rajgir</h1>

      <nav className="flex gap-4 hidden sm:flex">
        <Link href="/">Discover</Link>
        <Link href="/saved-trip">Saved Trip</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
      <div className="flex items-center justify-center">
        <HiMenuAlt1 />



      </div>
    </header>
  );
};

export default Navbar;
