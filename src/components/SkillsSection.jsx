import { useState } from "react";
import { cn } from "@/lib/utils";
import Tilt from "react-parallax-tilt";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <FaHtml5 /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <FaJs /> },
  { name: "React", level: 90, category: "frontend", icon: <FaReact /> },
  { name: "TypeScript", level: 85, category: "frontend", icon: <SiTypescript /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss /> },
  { name: "Next.js", level: 80, category: "frontend", icon: <SiNextdotjs /> },

  { name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs /> },
  { name: "Express", level: 75, category: "backend", icon: <SiExpress /> },
  { name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb /> },
  { name: "PostgreSQL", level: 65, category: "backend", icon: <SiPostgresql /> },
  { name: "GraphQL", level: 60, category: "backend", icon: <SiGraphql /> },

  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGitAlt /> },
  { name: "Docker", level: 70, category: "tools", icon: <FaDocker /> },
  { name: "Figma", level: 85, category: "tools", icon: <SiFigma /> },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <Tilt
              key={key}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.05}
            >
              <div className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">

                <div className="text-3xl text-primary mb-3 flex justify-center">
                  {skill.icon}
                </div>

                <div className="w-20 h-20 mx-auto mb-4">
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      pathColor: "#6366f1",
                      textColor: "#ffffff",
                      trailColor: "#1f2937",
                      textSize: "16px",
                    })}
                  />
                </div>

                <h3 className="font-semibold text-sm">{skill.name}</h3>

              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
};