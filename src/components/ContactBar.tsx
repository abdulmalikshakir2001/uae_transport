"use client";

import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
const ContactBar = () => {
  return (
    <div className="flex  flex-row justify-between items-center  bg-golden_brown text-black py-1  px-4 md:px:10 lg:px-14 text-xs md:text-xs">
      {/* Left Section - Contact Info */}
      <div className="flex flex-col sm:flex-row items-left sm:px- space-y-2 md:space-y-0 md:space-x-8 text-center md:text-left">
        <span className="contactBar-slash">|</span>
        {/* Phone */}
        <a href="tel:+971557572712" className="contactBar-items">
          <IoIosCall size={16} />
          <span>+971 55 757 2712</span>
        </a>
        <span className="contactBar-slash">|</span>

        {/* WhatsApp */}
        <a
          href="https://wa.me/971557572712"
          target="_blank"
          className="contactBar-items"
        >
          <IoLogoWhatsapp color="#48c858" size={16} />
          <span>+971 55 757 2712</span>
        </a>
        <span className="contactBar-slash">|</span>

        {/* Email */}
        <a
          href="mailto:uaetransport1982@gmail.com"
          className="contactBar-items text-xs"
        >
          <MdEmail size={16} />
          <span>uaetransport1982@gmail.com</span>
        </a>
      </div>

      {/* Right Section - Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex space-x-2 md:space-x-4 mt-2  md:mt-0 "
      >
        <a
          href="https://www.facebook.com/noorislaamtransport/"
          target="_blank"
          className="bg-black p-1 rounded"
        >
          <FaFacebook size={16} color="#FFFFFF" />
        </a>
        <a
          href="https://www.instagram.com/noorislamtransport"
          target="_blank"
          className="bg-gray-700 p-1 rounded"
        >
          <FaInstagram size={16} color="#FFFFFF" />
        </a>
        <a
          href="http://tiktok.com/@noorislamtransport"
          target="_blank"
          className="bg-gray-600 p-1 rounded"
        >
          <FaTiktok size={16} color="#FFFFFF" />
        </a>
        <a
          href="https://www.pinterest.com/Noorislam_transport/"
          target="_blank"
          className="bg-red-700 p-1 rounded"
        >
          <FaPinterest size={16} color="#FFFFFF" />
        </a>
      </motion.div>
    </div>
  );
};

export default ContactBar;
