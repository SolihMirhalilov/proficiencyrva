import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/LOGO (3).png";
import logo2 from "../assets/logopart.png";

const logos = [Logo, logo2, Logo];

const TeamSlider = () => {
  return (
    <section className="mt-10 bg-gray-100 w-full mb-16 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-semibold mb-8">OUR PARTNERS</h1>

        <div className="flex justify-between items-center px-4 md:px-0 gap-4">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="w-24"
            >
              <img src={logo} alt={`Partner ${index + 1}`} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
