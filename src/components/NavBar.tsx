"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const pathname = usePathname();

  // Framer Motion Variants for Menu Text Animation
  const menuVariants = {
    hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below
    visible: (i: number) => ({
      opacity: 1,
      y: 0, // Move to normal position
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }, // Delayed stagger effect
    }),
  };
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "#about" },
    { name: "Fleet", href: "#fleet" },
    { name: "Services", href: "#services" },
    { name: "Contat us", href: "#booking-from" },
    { name: "Login", href: "/login" },
  ];

  return (
    <>
      {/* Transparent Navigation Menu */}
      <nav className="absolute flex  top-0 md:left-0  right-0  w-full px-6  md:px-auto    py-4 justify-between items-center  text-white z-50">
        <div className="items-start ">
          <img
            src="/logotrans.png"
            alt="UAE TRANSPORT"
            className="md:h-20    h-16  md:mt-  "
          />
        </div>
        <ul className="md:flex hidden space-x-4  sm:ml-auto sm:px-10 first-letter:capitalize  font-medium text-lg text-right">
          {navItems.map((item) => {
            return (
              <motion.li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    "relative inline-block text-white hover:text-gray-300 transition-colors duration-300 before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-white  before:left-0 before:bottom-0 before:transition-all before:duration-500  hover:before:w-full",
                    {
                      "underline underline-offset-8": pathname === item.href,
                    }
                  )}
                >
                  {item.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <Link
          href="#booking-from"
          className=" text-xs  md:block border border-white text-white text-center rounded py-2 px-4   bg-transparent hover:bg-white hover:text-black transition delay-150 duration-500 hidden md:mr-2 "
        >
          BOOK NOW
        </Link>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.9 }}
          className="md:hidden  text-white  sm:ml-60 ml-32 pr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={28} />
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-gray-500 flex flex-col p-6 z-50 transition-transform duration-300">
          {/* Logo and Close Button Row */}
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Image
              src="/logotrans.png" // Change this to your logo path
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />

            {/* Close Button with Rotation Animation */}
            <motion.button
              onClick={() => {
                setIsRotated(!isRotated);
                setTimeout(() => setMenuOpen(false), 300);
              }}
              animate={{ rotate: isRotated ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl text-gray-400"
            >
              <FiX />
            </motion.button>
          </div>

          {/* Menu Links with Animation */}
          <nav className="flex flex-col gap-2 text-2xl mt-12 text-center border-b pb-8">
            {navItems.map((text, index) => (
              <motion.div
                key={text.name}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for stagger effect
              >
                <Link
                  href={`${text.href.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {text.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social Media Icons (Instead of Book Now Button) */}
          <div className="mt-6 flex justify-center gap-6  text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-500"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/nipt-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-500"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/noorislamtransport/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-500"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@noorislamtransport"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-500"
            >
              <AiFillTikTok size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
