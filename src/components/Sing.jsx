import { useState } from "react";
import { motion } from "framer-motion";
import { FaLanguage, FaCheck, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { MdSchool, MdFeedback } from "react-icons/md";
import { useEffect } from "react";
import img1 from "../assets/eng.jpg"
import img2 from "../assets/eng1.jpg"
import img3 from "../assets/eng3.jpg"


export default function Sing() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    message: "",
  });

  const slides = [
  {
    title: "Welcome to Proficiency RVA",
    text: "Learn English with experienced teachers and modern methods.",
    image: img1 ,
  },
  {
    title: "Courses for Everyone",
    text: "From kids to professionals – we have a course for you.",
    image: img2 ,
  },
  {
    title: "IELTS & CEFR Preparation",
    text: "Achieve high results with our expert exam prep programs.",
    image: img3,
  },
];



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

    const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // авто-прокрутка каждые 5 сек
    return () => clearInterval(interval);
  }, []);


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
          className="relative bg-white bg-gradient-to-br rounded-xl shadow-xl overflow-hidden p-8"
          variants={itemVariants}
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>

          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center h-full">


          <h1 className="text-3xl font-bold text-gray-800 my-4">Courses for Everyone</h1>
          <p className="text-xl text-gray-400 font-medium text-left">From absolute beginners to advanced learners – we have the right course for you.

</p>



           <div className="relative w-full mt-24 max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-96 object-cover"
      />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
        <h2 className="text-xl font-bold">{slides[current].title}</h2>
        <p>{slides[current].text}</p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white"
      >
        ›
      </button>
    </div>


    







          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex flex-col gap-4 rounded-3xl border-3  p-2">
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
