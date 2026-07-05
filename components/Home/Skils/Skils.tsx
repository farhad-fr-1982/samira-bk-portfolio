import React from "react";
import { SiLibreoffice } from "react-icons/si";
import { MdNetworkCheck, MdAccountBalance, MdComputer, MdBrush, MdDns } from "react-icons/md";
import { FaLanguage, FaCamera, FaPenNib } from "react-icons/fa";
import { GiFeather, GiPaintBrush } from "react-icons/gi";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "خط نسخ فصیح",
    icon: <FaPenNib />,
    color: "text-amber-400",
    description: "خوشنویسی دقیق و منظم به سبک کلاسیک نسخ",
  },
  {
    name: "خط نستعلیق",
    icon: <GiFeather />,
    color: "text-rose-400",
    description: "اجرای هنری و سیال خوشنویسی نستعلیق ایرانی",
  },
  {
    name: "نقاشی",
    icon: <GiPaintBrush />,
    color: "text-emerald-400",
    description: "نقاشی با رنگ‌روغن و آبرنگ و ترکیب‌بندی خلاقانه",
  }
];

const Skills = () => {
  return (
    <section className="py-16 md:py-20" id="skills">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            مهارت‌های <span className="text-cyan-300">من</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {skills.map((skill) => (
            <Tilt
              key={skill.name}
              scale={1.05}
              transitionSpeed={400}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              className="w-44 h-72"
            >
              <div className="bg-[#14134145] backdrop-blur-sm text-center w-44 h-72 rounded-3xl flex flex-col items-center justify-center px-4 border border-white/10 hover:border-cyan-300/50 transition-all duration-300">
                <div className={`text-5xl mb-3 ${skill.color}`}>
                  {skill.icon}
                </div>
                <p className="text-purple-400 mt-1 text-sm font-medium">
                  {skill.name}
                </p>
                <p
                  className="text-gray-300 mt-2 text-xs leading-relaxed min-h-[3.5rem] flex items-center justify-center"
                  dir="rtl"
                >
                  {skill.description}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;