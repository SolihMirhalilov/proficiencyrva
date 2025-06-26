import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // ✅ без точки с запятой
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h1
        className="text-center text-xl mt-24 font-bold"
        variants={item}
      >
        About us
      </motion.h1>

      <motion.h2 className="text-center mt-4 font-semibold" variants={item}>
        Proficiency RVA — A Global Standard Language Center
      </motion.h2>

      <motion.p className="text-center mt-3 sm:px-[20%]" variants={item}>
        At Proficiency RVA, we empower learners with world languages from A1 to
        C1 level. Our mission is to deliver practical, accessible, and effective
        language education.
      </motion.p>

      <div className="max-w-[1140px] m-auto w-full pt-16 grid sm:grid-cols-[5fr_5fr] sm:px-0 px-2  gap-16">
        {/* Левая сторона (статистика) */}
        <motion.div
          className="bg-gradient-to-br from-fuchsia-600 to-blue-500 rounded-xl p-2"
          variants={item}
        >
          <h1 className="text-center text-xl text-white font-bold">
            Key Stats
          </h1>

          {/* Повтори анимацию на каждый блок статистики при желании */}
          {[
            ["📚+500", "Students Trained"],
            ["👩‍🏫 50+", "Certified Instructors"],
            ["🌐 3", "Countries Involved"],
            ["🎓 20+ years", "Combined Experience"],
          ].map(([icon, label], i) => (
            <motion.div key={i} className="my-4" variants={item}>
              <div className="flex justify-between items-center">
                <p className="pl-7 font-bold text-white text-xl">{icon}</p>
                <p className="text-white pr-7 text-xl">{label}</p>
              </div>
              <div className="w-[95%] bg-white h-0.5 m-auto my-2"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Правая сторона (факты) */}
        <div>
          {[
            {
              text: "🌍 Education Without Borders — Global Knowledge for All",
              bg: "bg-sky-400",
            },
            {
              text: "🧠 Professional Growth Programs for teachers & students",
              bg: "bg-teal-600",
            },
            {
              text: "❤️ Human-Centered Personalized attention to each learner",
              bg: "bg-indigo-500",
            },
            {
              text: "✅ Centered Personalized attention to each learner",
              bg: "bg-violet-800",
            },
          ].map(({ text, bg }, i) => (
            <motion.div key={i} className="my-2" variants={item}>
              <p className={`px-3 py-4 text-white font-semibold rounded-xl ${bg}`}>
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
