"use client";
import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0b1b3e] text-gray-300 py-8 ">
      {/* Top Row - Logo and Menu */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto flex flex-col md:flex-row justify-between items-center px-16 md:h-40 h-24 border-b border-gray-600"
      >
        <div>
          <img
            src="./logotrans.png"
            alt="UAE Transport"
            className="md:h-20 h-28"
          />
        </div>
        <nav className="md:flex space-x-6 text-lg hidden">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="#about" className="hover:text-white">
            About Us
          </Link>
          <Link href="#blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact Us
          </Link>
        </nav>
      </motion.div>

      {/* Middle Row - 3 Columns */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  text-center md:text-left px-12 mt-20  "
      >
        {/* About Section */}
        <div className="space-y-6 p-4">
          <h3 className="text-xl font-semibold">
            UAE Transport And Rental Buses
          </h3>
          <p className="mt-2 text-gray-400">
            Your trusted partner for reliable transportation services. UAE Transport  and rental buses offers a fleet of carefully selected vehicles,
            ensuring top-notch safety and comfort for every journey.
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="mt-2 text-gray-400 ">
            Office No. 88, Hamsah Building A, Al Karama <br />
            <Link
              href="mailto:info@noorislambusrental.com"
              className="hover:text-white"
              target="_blank"
            >
              uaetransport1982@gmail.com
            </Link>{" "}
            <br />
            <Link
              href="tel:+971 55 757 2712"
              className="hover:text-white"
              target="_blank"
            >
              Tel: +971 55 757 2712
            </Link>
            <br />
            <Link
              href="https://wa.me/971 55 757 2712"
              className="hover:text-white"
              target="_blank"
            >
              {" "}
              Mob: +971 55 757 2712
            </Link>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>
              <Link href="#fleet" className="hover:text-white">
                30 Luxury Bus Rental
              </Link>
            </li>
            <li>
              <Link href="#fleet" className="hover:text-white">
                19 Seater Van  Rental in Dubai
              </Link>
            </li>
            <li>
              <Link href="#fleet" className="hover:text-white">
                15 Seater Hiace Rental 
              </Link>
            </li>
            
          </ul>
        </div>
      </motion.div>

      {/* Bottom Row - Copyright & Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 mt-20 border-t border-gray-700 pt-4 "
      >
        <p className="text-gray-400 order-2 p-4">
          UAE Transport And Rental Buses © 2024. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 order-1 md:order-2">
          <a
            href="https://www.facebook.com/noorislaamtransport/"
            target="_blank"
            className="bg-[#36528e] p-1 rounded"
          >
            <FaFacebook size={34} color="#FFFFFF" />
          </a>
          <a
            href="https://www.instagram.com/noorislamtransport"
            target="_blank"
            className="bg-gray-800  p-1 rounded"
          >
            <FaInstagram size={34} color="#FFFFFF" />
          </a>
          <a
            href="http://tiktok.com/@noorislamtransport"
            target="_blank"
            className="bg-gray-600 p-1 rounded"
          >
            <FaTiktok size={34} color="#FFFFFF" />
          </a>
          <a
            href="https://www.pinterest.com/Noorislam_transport/"
            target="_blank"
            className="bg-red-700 p-1 rounded"
          >
            <FaPinterest size={34} color="#FFFFFF" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
