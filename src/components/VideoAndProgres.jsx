import Trophy from "../assets/trophy.png";
import Agenda from "../assets/agenda.png";
import Analitycs from "../assets/analytics.png";
import Care from "../assets/care.png";
import { motion } from "framer-motion";

export default function Video() {
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="max-w-[1140px] mx-auto px-4 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Заголовок */}
      <motion.h1
        className="text-center text-2xl md:text-3xl font-bold"
        variants={item}
        initial="hidden"
        whileInView="visible"
      >
        See How We Help You Achieve Success
      </motion.h1>

      {/* Подзаголовок */}
      <motion.p
        className="mt-2 text-center text-gray-600 md:px-32 text-sm md:text-base"
        variants={item}
        initial="hidden"
        whileInView="visible"
      >
        Watch this video to get an inside look at our teaching methods, course
        offerings, and real student experiences. Join ProficiencyRVA and take
        the first step towards your language proficiency goals!
      </motion.p>

      {/* Видео */}
      <motion.div
        className="mt-8"
        variants={item}
        initial="hidden"
        whileInView="visible"
      >
        <iframe
          src="https://www.youtube.com/embed/53dJqQMBgC8?si=exd6quru9kn_FZ3H"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full rounded-xl md:h-[600px] h-56"
        ></iframe>
      </motion.div>

      {/* Карточки преимуществ (без массива) */}
      <div className="grid sm:grid-cols-2 gap-6 mt-16">
        {/* Карточка 1 */}
        <motion.div
          className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-white shadow hover:shadow-md rounded-xl transition duration-300"
          variants={item}
          initial="hidden"
          whileInView="visible"
        >
          <img src={Trophy} alt="" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-lg font-semibold">Expert Teachers</h2>
            <p className="text-gray-600 text-sm">
              Learn from highly qualified and experienced instructors dedicated to your success.
            </p>
          </div>
        </motion.div>

        {/* Карточка 2 */}
        <motion.div
          className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-white shadow hover:shadow-md rounded-xl transition duration-300"
          variants={item}
          initial="hidden"
          whileInView="visible"
        >
          <img src={Agenda} alt="" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-lg font-semibold">Structured Programs</h2>
            <p className="text-gray-600 text-sm">
              Courses are designed to help you reach proficiency step-by-step with real-life practice.
            </p>
          </div>
        </motion.div>

        {/* Карточка 3 */}
        <motion.div
          className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-white shadow hover:shadow-md rounded-xl transition duration-300"
          variants={item}
          initial="hidden"
          whileInView="visible"
        >
          <img src={Analitycs} alt="" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-lg font-semibold">Progress Tracking</h2>
            <p className="text-gray-600 text-sm">
              Track your learning, get feedback and boost results with real analytics.
            </p>
          </div>
        </motion.div>

        {/* Карточка 4 */}
        <motion.div
          className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-white shadow hover:shadow-md rounded-xl transition duration-300"
          variants={item}
          initial="hidden"
          whileInView="visible"
        >
          <img src={Care} alt="" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-lg font-semibold">Supportive Environment</h2>
            <p className="text-gray-600 text-sm">
              We truly care. Get 24/7 help from your mentors and peers, online or offline.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
