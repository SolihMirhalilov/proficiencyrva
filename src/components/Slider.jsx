import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Person1 from "../assets/PERSON1.png";
import Person2 from "../assets/PERSON2.png";
import Person3 from "../assets/PERSON3.png";
import Person4 from "../assets/PERSON4.png";
import Person5 from "../assets/PERSON5.png";
import Person6 from "../assets/PERSON6.png";

const people = [
  {
    name: "Feruza Rashidova",
    img: Person1,
    description1: "Teacher",
    description2: "Co-Director of the Uzbekistan Project",
  },
  {
    name: "Umida Xikmatilla",
    img: Person2,
    description1: "Teacher",
    description2: "Co-Director of the project USA",
  },
  {
    name: "Lesli Kurkam",
    img: Person3,
    description1: "Teacher",
    description2: "Co-Director of the project United Kingdom",
  },
  {
    name: "Manisha Kav",
    img: Person4,
    description1: "Teacher",
    description2: "USA",
  },
  {
    name: "Gunjan Jeyn",
    img: Person5,
    description1: "Teacher",
    description2: "India",
  },
  {
    name: "Nilufar Tillayeva",
    img: Person6,
    description1: "Teacher",
    description2: "Uzbekistan",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % people.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisiblePeople = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(people[(index + i) % people.length]);
    }
    return result;
  };

  const visiblePeople = getVisiblePeople();

  return (
    <motion.div
      className="w-full py-10 px-4 max-w-[950px] mx-auto "
      initial={{ opacity: 0.7, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Meet Our Instructors
      </h1>

      {/* Горизонтальный скролл */}
      <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth">
        {visiblePeople.map((person, i) => (
          <motion.div
            key={i}
            className="min-w-[230px] sm:min-w-[260px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-blue-400 shadow-md"
            />
            <p className="mt-4 text-center text-lg font-semibold text-gray-900">
              {person.name}
            </p>
            <p className="text-blue-600 text-center text-sm font-medium mt-1">
              {person.description1}
            </p>
            <p className="text-gray-500 text-center text-sm mt-1">
              {person.description2}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
