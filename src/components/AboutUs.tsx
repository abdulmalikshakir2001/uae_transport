"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col p-4 sm:pl-8 md:pl-12 md:flex-row items-center justify-between   bg-white  h-full mt-5 mb-5 overflow-hidden"
    >
      {/* Left Section - Text */}
      <motion.div
        initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="md:w-1/2 text-left font-medium   md:mt-4 mt-10 space-y-5 "
      >
        <h3 className="md:text-base text-sm uppercase tracking-widest text-black">
          WELCOME TO
        </h3>
        <h2 className="md:text-6xl  text-4xl uppercase">
          UAE Transport And
          <span className="text-blue-600 lg:text-justify"> RENTAL BUSES</span>
        </h2>
        <p className="mt-4 text-base text-justify md:text-lg text-gray-900 pr-12">
          UAE Transport And Rental Buses Dubai & Passenger Transport by Rented
          Buses L.L.C is among the top transport providers in Dubai, U.A.E. We
          are committed to delivering high-quality bus tour services that meet
          your needs, ensuring comfort and affordability in every journey.
        </p>
        {/* Buttons */}
        <div className="lg:flex  items-center md:space-x-6 space-y-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.9 }}
            className="bg-golden_brown text-white md:mt-4 px-6 py-3 text-xs rounded-lg  
           font-semibold shadow-md hover:bg-golden_brown"
          >
            READ MORE
          </motion.button>
          <div className="flex items-center space-x-2 text-golden_brown text-lg font-semibold ">
            <span className="bg-golden_brown w-10 h-10 flex items-center justify-center rounded-full">
              📞
            </span>
            <span>+971 55 757 2712</span>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="relative w-full md:w-1/2 h-[500px] top-5"
      >
        <Image
          src="/about.webp"
          alt="About us Picture"
          fill
          className="rounded-lg shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
};

export default AboutUs;
