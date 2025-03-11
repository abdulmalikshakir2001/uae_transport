"use client";
import { motion } from "framer-motion";
const OurFleet = () => {
  const fleet = [
    {
      image: "/fleet/30-seater-coster.webp",
      text: "30 Seater Coaster Rental in Dubai",
    },
    { image: "/fleet/19-Mercedes.jpg", text: "19 Seater Van Rental in Dubai" },
    { image: "/fleet/14.jpg", text: "15 Seater Hiace for Rent in Dubai" },
  ];

  return (
    <section
      id="fleet"
      className="text-center py-12  space-y-4 bg-gray-100  mt-12 overflow-hidden"
    >
      <p className="text-[#161921] uppercase tracking-wider text-[13px]">
        UAE Transport And Rental Buses
      </p>
      <h2 className=" text-[34px] md:text-[57px] ">Our Fleet</h2>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3   md:px-8"
      >
        {fleet.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden  text-center hover:shadow-lg transition duration-300  "
          >
            <div className="flex justify-center items-center  overflow-hidden px-4 ">
              <img
                src={item.image}
                alt={item.text}
                className="w-4/4 p-4 object-contain transform transition duration-500 hover:scale-110"
              />
            </div>
            <p className="text-[19px] mt-4 px-5 lg:text-[24px]  text-center   text-[#161921] md:px-[16px] hover:text-golden_brown">
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurFleet;
