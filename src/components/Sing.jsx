import { useState } from "react";
import { motion } from "framer-motion";
import { FaLanguage, FaCheck, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { MdSchool, MdFeedback } from "react-icons/md";

export default function Sing() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    message: "",
  });

 const handleSubmit = async () => {
  const { name, surname, phone, message } = form;

  const text = `📝 Yangi ariza%0A%0A👤 Ismi: ${encodeURIComponent(name)}%0A👥 Familiyasi: ${encodeURIComponent(surname)}%0A📞 Telefon: ${encodeURIComponent(phone)}%0A✉️ Xabar: ${encodeURIComponent(message || "yo'q")}`;

  const chatId = "-1002665216344";
  const token = "7990311905:AAF4ijTNEJQsxRbWGgVYBHy99bcA53fcrIQ";

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      alert("✅ Сообщение отправлено!");
      setForm({ name: "", surname: "", phone: "", message: "" });
    } else {
      alert("❌ Не удалось отправить.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Ошибка при подключении к Telegram.");
  }
};



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

  const featureBgColors = [
    "bg-red-400/60",
    "bg-yellow-400/60",
    "bg-green-400/60",
    "bg-pink-400/60",
    "bg-cyan-400/60",
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const features = [
    {
      text: "Proven Proficiency Method",
      icon: <FaCheck className="text-blue-100 text-xl" />,
    },
    {
      text: "Certified, Experienced Teachers",
      icon: <MdSchool className="text-blue-100 text-xl" />,
    },
    {
      text: "Prepare for IELTS & CEFR",
      icon: <FaGlobe className="text-blue-100 text-xl" />,
    },
    {
      text: "Learn Anywhere — Phone or Laptop",
      icon: <FaMobileAlt className="text-blue-100 text-xl" />,
    },
    {
      text: "Daily Support & Feedback",
      icon: <MdFeedback className="text-blue-100 text-xl" />,
    },
  ];

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
        {/* Enhanced Left Card */}
        <motion.div
          className="relative bg-gradient-to-br from-orange-500  via-amber-400  to-yellow-300 rounded-xl shadow-2xl overflow-hidden p-8"
          variants={itemVariants}
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>

          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center h-full">
            {/* Icon with animated ring */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-white/20 animate-pulse"></div>
              <FaLanguage className="text-white text-6xl p-3 relative z-10" />
            </div>

            {/* Title and subtitle */}
            <h3 className="text-center text-2xl md:text-3xl text-white font-bold mt-6">
              Start Speaking English with Confidence!
            </h3>
            <p className="text-center text-blue-100 text-lg font-medium mt-3 mb-8">
              Learn English easily — from beginner to fluent. Online and
              offline.
            </p>

            {/* Enhanced feature list */}
            <ul className="w-full space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`flex items-start gap-4 p-3 rounded-lg backdrop-blur-sm ${
                    featureBgColors[index % featureBgColors.length]
                  }`}
                >
                  <div className="p-2 bg-white/20 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-white font-medium text-lg">
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 w-full h-1 bg-white/20 rounded-full"></div>
          </div>
        </motion.div>

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
              onClick={handleSubmit}
            >
              Submit Application
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>



  );
}
