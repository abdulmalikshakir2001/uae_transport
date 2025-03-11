"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const OurServices = () => {
  const services = [
    { text: "Staff Transportation in Dubai", link: "#services" },
    { text: "Airport Transport Dubai", link: "#services" },
    { text: "Hotel Staff Transport in Dubai", link: "#services" },
    { text: "Party Bus Rental in Dubai", link: "#services" },
    { text: "Dubai City Tour Bus", link: "#services" },
    { text: "Labor Transport in Dubai", link: "#services" },
  ];

  return (
    <section
      id="services"
      className="text-center md:py-12 py-4  bg-[#0b1b3e] text-[#f4f4ee] overflow-hidden"
    >
      <h2 className="md:text-[57px] text-[36px]  font-medium ">Our Services</h2>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-6 pt-4 px-6 md:px-28"
      >
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <div className=" bg-[#161921] shadow-xg border border-[#1c3caa] rounded-xl md:p-10 p-10 text-center transition duration-300 hover:bg-white hover:text-black   md:w-4/4 md:h-4/4 cursor-pointer ">
              <h3 className="text-lg font-semibold">{service.text}</h3>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default OurServices;
