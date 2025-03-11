import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971557572712"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
        <FaWhatsapp
          className="bg-green-600 text-8xl rounded-xl"
          size={50}
          color="white"
        />
      </div>
    </a>
  );
};

export default WhatsAppButton;
