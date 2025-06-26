import { useState } from "react";
import { motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";

export default function Sing() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="max-w-[1140px] m-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-center mt-16"
        variants={itemVariants}
      >
        Want to start learning English right now?
      </motion.h1>

      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
      >
        {/* Левая карточка */}
        <motion.div
          className="relative bg-gradient-to-tr from-blue-600 to-blue-300 rounded-xl shadow-xl overflow-hidden"
          variants={itemVariants}
        >
          {/* Размытый фон-круг */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl z-0"></div>

          {/* Иконка */}
          <FaLanguage className="text-white text-6xl mx-auto mt-10 relative z-10" />

          {/* Заголовок и текст */}
          <h3 className="text-center text-2xl text-white font-bold pt-4 relative z-10">
            Start Speaking English with Confidence!
          </h3>
          <p className="text-center text-white text-lg font-semibold pt-3 px-6 relative z-10">
            Learn English easily — from beginner to fluent. Online and offline.
          </p>

          {/* Анимированный список */}
          <ul className="ml-10 pt-10 text-left text-white font-medium space-y-3 pr-6 text-[17px] pb-6 relative z-10">
            {[
              "📚 Proven Proficiency Method",
              "👨‍🏫 Certified, Experienced Teachers",
              "🎯 Prepare for IELTS & CEFR",
              "📱 Learn Anywhere — Phone or Laptop",
              "✅ Daily Support & Feedback",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center my-3 gap-2 text-xl"
              >
                {item}
              </motion.li>
            ))}
          </ul>


        </motion.div>

        {/* Правая форма */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-400 py-3 px-4 rounded-xl focus:outline-blue-500"
            />

            <label className="text-sm font-medium">Your Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Enter your surname"
              value={form.surname}
              onChange={handleChange}
              className="w-full border border-gray-400 py-3 px-4 rounded-xl focus:outline-blue-500"
            />

            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+998..."
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-400 py-3 px-4 rounded-xl focus:outline-blue-500"
            />

            <label className="text-sm font-medium">Message (optional)</label>
            <textarea
              name="message"
              placeholder="Tell us your goals or ask a question..."
              value={form.message}
              onChange={handleChange}
              className="w-full h-36 border border-gray-400 p-3 rounded-xl resize-none focus:outline-blue-500"
            />

            <p className="text-xs text-gray-500 mt-2">
              Your personal information is confidential and will not be shared.
            </p>

            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl"
              onClick={() => console.log(form)}
            >
              Submit Application
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

