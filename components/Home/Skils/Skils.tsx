import React from "react";
import { SiLibreoffice } from "react-icons/si";
import { MdNetworkCheck, MdAccountBalance, MdComputer, MdBrush, MdDns } from "react-icons/md";
import { FaLanguage, FaCamera, FaPenNib } from "react-icons/fa";
import { GiFeather, GiPaintBrush } from "react-icons/gi";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "خط نسخ",
    icon: <FaPenNib />,
    percentage: 90,
    color: "text-amber-400",
    description: "خوشنویسی دقیق و منظم به سبک کلاسیک نسخ",
  },
  {
    name: "خط نستعلیق",
    icon: <GiFeather />,
    percentage: 92,
    color: "text-rose-400",
    description: "اجرای هنری و سیال خوشنویسی نستعلیق ایرانی",
  },
  {
    name: "نقاشی",
    icon: <GiPaintBrush />,
    percentage: 88,
    color: "text-emerald-400",
    description: "نقاشی با رنگ‌روغن و آبرنگ و ترکیب‌بندی خلاقانه",
  },
  {
    name: "Photoshop CS5",
    icon: <FaCamera />,
    percentage: 82,
    color: "text-blue-500",
    description: "ویرایش حرفه‌ای تصویر و رتوش عکس دیجیتال",
  },
  {
    name: "CorelDRAW X5",
    icon: <MdBrush />,
    percentage: 80,
    color: "text-yellow-400",
    description: "طراحی گرافیک برداری، لوگو و آماده‌سازی چاپ",
  },
  {
    name: "زبان انگلیسی",
    icon: <FaLanguage />,
    percentage: 80,
    color: "text-red-400",
    description: "مکالمه روان و نگارش متون تخصصی انگلیسی",
  },
  {
    name: "ترکی استانبولی",
    icon: <FaLanguage />,
    percentage: 75,
    color: "text-orange-400",
    description: "مکالمه روزمره و ارتباط ساده و روان",
  },
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
                <p className="text-2xl font-bold text-white">{skill.percentage}%</p>
                <p className="text-purple-400 mt-1 text-sm font-medium">
                  {skill.name}
                </p>
                <p
                  className="text-gray-300 mt-2 text-xs leading-relaxed min-h-[3.5rem] flex items-center justify-center"
                  dir="rtl"
                >
                  {skill.description}
                </p>
                <div className="w-3/4 h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;