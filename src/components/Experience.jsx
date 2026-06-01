import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index, isLeft }) => {
  return (
    <motion.div
      variants={fadeIn(isLeft ? "right" : "left", "spring", index * 0.2, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex ${isLeft ? "justify-end" : "justify-start"} mb-8 md:mb-12 w-full`}
    >
      {/* Card Container */}
      <div
        className={`w-full md:w-5/12 relative group cursor-pointer`}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className={`p-6 md:p-8 rounded-xl backdrop-blur-md border border-purple-500/20 
            bg-gradient-to-br from-gray-900/80 via-purple-900/40 to-gray-900/80
            shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300`}
        >
          {/* Icon and Duration */}
          <div className="flex items-center justify-between mb-4">
            <div
              className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
              style={{
                background: experience.iconBg,
                boxShadow: `0 0 20px ${experience.iconBg}60`,
              }}
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
            <span className="text-xs md:text-sm px-3 py-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full font-semibold border border-purple-400/30 whitespace-nowrap">
              {experience.duration}
            </span>
          </div>

          {/* Title and Company */}
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2 tracking-wide">
            {experience.title}
          </h3>
          <p className="text-sm md:text-base text-purple-300 font-semibold mb-4">
            {experience.company_name}
          </p>
          <p className="text-xs md:text-sm text-gray-400 mb-4">
            {experience.date}
          </p>

          {/* Points */}
          <ul className="space-y-2 md:space-y-3">
            {experience.points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: isLeft ? 10 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm text-gray-300 flex items-start group/item hover:text-white transition-colors"
              >
                <span className="text-purple-400 mr-3 flex-shrink-0 mt-1 group-hover/item:scale-125 transition-transform">
                  ▸
                </span>
                <span className="leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Center Dot */}
        <motion.div
          whileHover={{ scale: 1.3, rotate: 180 }}
          transition={{ type: "spring", stiffness: 400 }}
          className={`absolute top-1/2 transform -translate-y-1/2 ${
            isLeft ? "-right-4 md:-right-6" : "-left-4 md:-left-6"
          } w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full 
            border-4 border-gray-950 shadow-lg shadow-purple-500/50 z-10`}
        />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Journey & Expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical Center Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent rounded-full" />

        {/* Experience Items */}
        <div className="space-y-4 md:space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <span className="text-white text-xl">✓</span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
