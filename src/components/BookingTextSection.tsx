"use client";
import React from "react";
import { motion } from "framer-motion";
const BookingTextSection = () => {
  return (
    <>
      {/* Left Column - Text Section */}
      <motion.div
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="md:w-1/2 text-center md:text-center space-y-4 md:space-y-6 px-2 sm:px-4 md:px-8 "
      >
        <span className="block text-xs tracking-widest uppercase">
          Why Rent a Bus from
        </span>
        <h2 className="text-3xl leading-relaxed font-bold">
          UAE Transport And Rental Buses?
        </h2>
        <p className="text-center text-base md:text-lg leading-relaxed max-w-[480px] mx-auto">
          At UAE Transport And Rental Buses, we offer tailored transportation
          solutions for every need. Whether you need a 7 seater luxury car, a
          Toyota Hiace, a 14 seater minivan, or a 30 seater bus, our fleet is
          diverse and well-maintained. We provide flexible rental options on a
          daily, monthly, quarterly, or yearly basis, ensuring convenience and
          efficiency for businesses across the UAE. With competitive rates and a
          strong focus on customer satisfaction, we’ve become the trusted choice
          for businesses that value comfort, safety, and professionalism.
          Whether you need airport transfers, a shuttle service, or bus
          transportation for events, UAE Transport And Rental Buses ensures a
          smooth experience every time.
        </p>
      </motion.div>
    </>
  );
};

export default BookingTextSection;
