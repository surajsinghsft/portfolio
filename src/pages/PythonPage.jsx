import { Navbar } from "@/components/Navbar";
import { useEffect, useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Database,
  Bot,
  Globe,
  Terminal,
  Github,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const pythonSkills = [
  {
    title: "Python",
    description:
      "Core Python, OOP, functions, modules and clean coding practices.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Automation",
    description:
      "Automating repetitive tasks, file processing and useful workflows.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "REST API",
    description:
      "Creating and consuming REST APIs for modern web applications.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "FastAPI / Flask",
    description:
      "Building lightweight and scalable Python backend applications.",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    title: "Database",
    description:
      "Working with SQL, MongoDB and database-driven applications.",
    icon: <Database className="w-6 h-6" />,
  },
];

const pythonProjects = [
  {
    title: "Python Automation Project",
    description:
      "A Python-based automation project for handling repetitive tasks and improving workflow efficiency.",
    tech: ["Python", "Automation"],
    github: "https://github.com/YOUR_USERNAME",
    live: "#",
  },
  {
    title: "REST API Project",
    description:
      "A backend API project focused on structured endpoints, data handling and application communication.",
    tech: ["Python", "FastAPI", "REST API"],
    github: "https://github.com/YOUR_USERNAME",
    live: "#",
  },
  {
    title: "Flask Web Application",
    description:
      "A lightweight Python web application with backend routing, API integration and database support.",
    tech: ["Python", "Flask", "API"],
    github: "https://github.com/YOUR_USERNAME",
    live: "#",
  },
];

const codeItems = [
  "import python",
  "def build():",
  "FastAPI",
  "Flask",
  "REST API",
  "async def",
  "Python",
  "{}",
  "</>",
];

const particlePositions = [
  [7, 12],
  [16, 28],
  [24, 70],
  [34, 18],
  [42, 84],
  [51, 35],
  [59, 72],
  [67, 20],
  [74, 58],
  [82, 14],
  [91, 40],
  [12, 88],
  [29, 48],
  [47, 12],
  [62, 91],
  [78, 76],
  [88, 68],
  [96, 26],
  [54, 57],
  [37, 92],
  [18, 60],
  [70, 89],
  [4, 46],
  [84, 92],
  [46, 63],
];

export const PythonPage = () => {
  const particles = useMemo(() => {
    return particlePositions.map(([left, top], index) => ({
      id: index,
      left,
      top,
      size: index % 3 === 0 ? 3 : 2,
      delay: (index % 9) * 0.55,
      duration: 4 + (index % 5),
      driftX: index % 2 === 0 ? 22 : -22,
      driftY: index % 3 === 0 ? -20 : 18,
    }));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-foreground">
        <Navbar pythonPage={true} />

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Base */}
        <div className="absolute inset-0 bg-[#050816]" />

        {/* Moving Purple Glows */}
        <div className="python-blob python-blob-1" />
        <div className="python-blob python-blob-2" />
        <div className="python-blob python-blob-3" />

        {/* Floating Stars */}
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="python-star"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              "--drift-x": `${particle.driftX}px`,
              "--drift-y": `${particle.driftY}px`,
            }}
          />
        ))}

        {/* Floating Code */}
        {codeItems.map((code, index) => (
          <span
            key={`${code}-${index}`}
            className="python-floating-code"
            style={{
              left: `${8 + ((index * 19) % 84)}%`,
              top: `${8 + ((index * 23) % 80)}%`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${7 + (index % 4)}s`,
              "--code-x": index % 2 === 0 ? "28px" : "-28px",
              "--code-y": index % 3 === 0 ? "-24px" : "20px",
              "--code-r": index % 2 === 0 ? "2deg" : "-2deg",
            }}
          >
            {code}
          </span>
        ))}

        {/* Rotating Orbit Rings */}
        <div className="python-orbit orbit-1" />
        <div className="python-orbit orbit-2" />

        {/* Orbit Glow Dot */}
        <div className="python-orbit-dot" />

        {/* Moving Light Streaks */}
        <div className="python-shooting-light light-1" />
        <div className="python-shooting-light light-2" />

        {/* Subtle Grid */}
        <div className="python-grid" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050816_90%)]" />
      </div>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative z-10 min-h-[75vh] flex items-center px-6 pt-24 pb-16">
        <div className="container max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 items-center gap-14">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <a
  href="/#hero"
  className="
    group
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    mb-8
    rounded-full
    border border-purple-400/30
    bg-purple-500/10
    text-purple-200
    backdrop-blur-md
    shadow-[0_0_18px_rgba(139,92,246,0.12)]
    hover:bg-purple-500/20
    hover:border-purple-400/60
    hover:text-white
    hover:shadow-[0_0_28px_rgba(139,92,246,0.30)]
    transition-all
    duration-300
  "
>
  <ArrowLeft
    className="
      w-4
      h-4
      text-purple-400
      group-hover:-translate-x-1
      transition-transform
      duration-300
    "
  />

  <span>Back to Main Portfolio</span>
</a>

              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
                <span>🐍</span>
                Python Development
              </div> */}

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Python
                <span className="text-primary"> Developer</span>
              </h1>

              <h2 className="text-2xl md:text-4xl font-bold mt-3">
                Building Smart & Scalable Solutions
              </h2>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                I build practical Python applications, automation tools,
                REST APIs and backend solutions with a focus on clean code,
                scalability and real-world problem solving.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="#python-projects"
                  className="cosmic-button inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="/#contact"
                  className="px-6 py-3 rounded-full border border-border bg-white/[0.02] hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Let's Connect
                </a>

              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative flex justify-center"
            >

              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/15 blur-[80px]" />

              <motion.div
                className="relative w-full max-w-md min-h-[390px] rounded-3xl border border-primary/25 bg-white/[0.04] backdrop-blur-lg p-8 shadow-[0_0_45px_rgba(139,92,246,0.10)] overflow-hidden"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                {/* Decorative Rings */}
                <motion.div
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full border border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full border border-primary/20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative h-full flex flex-col items-center justify-center text-center">

                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(139,92,246,0)",
                        "0 0 28px rgba(139,92,246,0.35)",
                        "0 0 0 rgba(139,92,246,0)",
                      ],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                    }}
                  >
                    <Terminal className="w-10 h-10" />
                  </motion.div>

                  <motion.div
                    className="text-7xl mb-5"
                    animate={{
                      y: [0, -7, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🐍
                  </motion.div>

                  <h3 className="text-2xl font-bold">
                    Python Development
                  </h3>

                  <p className="text-muted-foreground mt-3">
                    Backend • Automation • APIs • Data
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {[
                      "Python",
                      "FastAPI",
                      "Flask",
                      "REST API",
                      "SQL",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-xs border border-primary/25 bg-primary/10 text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================== */}

      <section
  id="python-skills"
  className="relative z-10 py-20 px-6"
>
        <div className="container max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              Technologies
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Python Skills
            </h2>

            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Tools and technologies I use while building Python-based
              applications and backend solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {pythonSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl border border-border bg-white/[0.025] backdrop-blur-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-all duration-300">
                  {skill.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {skill.title}
                </h3>

                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {skill.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================== */}

      <section
        id="python-projects"
        className="relative z-10 py-20 px-6"
      >
        <div className="container max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              My Work
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Python Projects
            </h2>

            <p className="text-muted-foreground mt-4 max-w-2xl">
              Python projects focused on automation, backend development,
              APIs and practical problem solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {pythonProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-white/[0.025] backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all duration-300"
              >

                <div className="h-44 bg-gradient-to-br from-primary/15 via-purple-500/5 to-transparent flex items-center justify-center relative overflow-hidden">

                  <div className="absolute w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

                  <motion.div
                    className="text-7xl relative z-10"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🐍
                  </motion.div>

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          GITHUB
      ========================================================== */}

      <section className="relative z-10 py-20 px-6">
        <div className="container max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 md:p-14 rounded-3xl border border-primary/25 bg-primary/[0.05] backdrop-blur-sm"
          >

            <Github className="w-12 h-12 mx-auto text-primary mb-5" />

            <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              Explore My Code
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Check Out My GitHub
            </h2>

            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Explore my Python projects, experiments and development work
              on GitHub.
            </p>

            <a
              href="https://github.com/surajsinghsft?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button inline-flex items-center gap-2 mt-8"
            >
              Visit GitHub
              <ExternalLink className="w-4 h-4" />
            </a>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative z-10 py-24 px-6">
        <div className="container max-w-4xl mx-auto text-center">

          <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
            Let's Work Together
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Have a Python Project in Mind?
          </h2>

          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            Let's turn your idea into a clean, scalable and practical
            Python solution.
          </p>

          <a
            href="/#contact"
            className="cosmic-button inline-flex items-center gap-2 mt-8 hover:scale-105 transition-transform duration-300"
          >
            Let's Connect
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>
      </section>

      {/* =========================================================
          ANIMATION CSS
      ========================================================== */}

      <style>{`
        /* -----------------------------------------
           MOVING PURPLE BLOBS
        ----------------------------------------- */

        .python-blob {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          will-change: transform, opacity;
        }

        .python-blob-1 {
          width: 430px;
          height: 430px;
          top: -130px;
          left: 4%;
          background: rgba(139, 92, 246, 0.22);
          filter: blur(80px);
          animation: blobMoveOne 9s ease-in-out infinite;
        }

        .python-blob-2 {
          width: 420px;
          height: 420px;
          right: -90px;
          bottom: -140px;
          background: rgba(79, 70, 229, 0.18);
          filter: blur(85px);
          animation: blobMoveTwo 11s ease-in-out infinite;
        }

        .python-blob-3 {
          width: 250px;
          height: 250px;
          top: 42%;
          left: 43%;
          background: rgba(168, 85, 247, 0.10);
          filter: blur(70px);
          animation: blobMoveThree 13s ease-in-out infinite;
        }

        @keyframes blobMoveOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.45;
          }

          50% {
            transform: translate3d(90px, 55px, 0) scale(1.18);
            opacity: 0.78;
          }
        }

        @keyframes blobMoveTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.35;
          }

          50% {
            transform: translate3d(-80px, -55px, 0) scale(1.15);
            opacity: 0.68;
          }
        }

        @keyframes blobMoveThree {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.18;
          }

          50% {
            transform: translate3d(-50px, 40px, 0);
            opacity: 0.38;
          }
        }

        /* -----------------------------------------
           STARS
        ----------------------------------------- */

        .python-star {
          position: absolute;
          border-radius: 50%;
          background: #ffffff;

          box-shadow:
            0 0 6px rgba(255,255,255,0.9),
            0 0 12px rgba(168,85,247,0.8);

          animation: starFloat var(--star-duration, 5s)
            ease-in-out infinite;

          will-change: transform, opacity;
        }

        @keyframes starFloat {
          0% {
            opacity: 0.12;
            transform: translate3d(0, 0, 0) scale(1);
          }

          25% {
            opacity: 0.55;
            transform:
              translate3d(
                calc(var(--drift-x) * 0.45),
                calc(var(--drift-y) * 0.30),
                0
              )
              scale(1.2);
          }

          50% {
            opacity: 1;
            transform:
              translate3d(
                calc(var(--drift-x) * -0.70),
                var(--drift-y),
                0
              )
              scale(1.7);
          }

          75% {
            opacity: 0.45;
            transform:
              translate3d(
                calc(var(--drift-x) * 0.70),
                calc(var(--drift-y) * -0.40),
                0
              )
              scale(1.25);
          }

          100% {
            opacity: 0.12;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        /* -----------------------------------------
           FLOATING CODE
        ----------------------------------------- */

        .python-floating-code {
          position: absolute;
          font-family: monospace;
          font-size: 13px;
          font-weight: 500;
          color: rgba(196,181,253,0.20);
          white-space: nowrap;
          user-select: none;

          animation:
            pythonCodeFloat 8s ease-in-out infinite;

          will-change: transform, opacity;
        }

        @keyframes pythonCodeFloat {
          0% {
            opacity: 0.04;
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          25% {
            opacity: 0.16;
            transform:
              translate3d(
                calc(var(--code-x) * 0.45),
                calc(var(--code-y) * 0.50),
                0
              )
              rotate(var(--code-r));
          }

          50% {
            opacity: 0.30;
            transform:
              translate3d(
                var(--code-x),
                var(--code-y),
                0
              )
              rotate(calc(var(--code-r) * -1));
          }

          75% {
            opacity: 0.14;
            transform:
              translate3d(
                calc(var(--code-x) * -0.65),
                calc(var(--code-y) * -0.50),
                0
              )
              rotate(0deg);
          }

          100% {
            opacity: 0.04;
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }

        /* -----------------------------------------
           ORBITS
        ----------------------------------------- */

        .python-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          will-change: transform;
        }

        .orbit-1 {
          width: 520px;
          height: 520px;
          border: 1px solid rgba(168,85,247,0.18);

          animation:
            orbitOne 24s linear infinite;
        }

        .orbit-2 {
          width: 340px;
          height: 340px;
          border: 1px solid rgba(139,92,246,0.14);

          animation:
            orbitTwo 17s linear infinite;
        }

        @keyframes orbitOne {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes orbitTwo {
          from {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }
        }

        /* -----------------------------------------
           CENTER DOT
        ----------------------------------------- */

        .python-orbit-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;

          border-radius: 50%;
          background: #a855f7;

          box-shadow:
            0 0 10px #a855f7,
            0 0 24px #8b5cf6,
            0 0 45px rgba(139,92,246,0.7);

          animation:
            dotPulse 2.2s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }

          50% {
            transform: scale(2);
            opacity: 1;
          }
        }

        /* -----------------------------------------
           LIGHT STREAKS
        ----------------------------------------- */

        .python-shooting-light {
          position: absolute;

          width: 180px;
          height: 3px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.95),
            rgba(168,85,247,0.80),
            transparent
          );

          box-shadow:
            0 0 12px rgba(255,255,255,0.8),
            0 0 25px rgba(139,92,246,0.7);

          transform: rotate(25deg);

          animation:
            shootingLight 6s linear infinite;

          will-change: transform, opacity;
        }

        .light-1 {
          top: 10%;
          left: -15%;
        }

        .light-2 {
          top: 55%;
          left: -25%;
          animation-delay: 3s;
          animation-duration: 8s;
        }

        @keyframes shootingLight {
          0% {
            transform:
              translate3d(0,0,0)
              rotate(25deg);
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          45% {
            opacity: 1;
          }

          58% {
            opacity: 0;
          }

          100% {
            transform:
              translate3d(145vw,100vh,0)
              rotate(25deg);
            opacity: 0;
          }
        }

        /* -----------------------------------------
           GRID
        ----------------------------------------- */

        .python-grid {
          position: absolute;
          inset: 0;

          opacity: 0.028;

          background-image:
            linear-gradient(
              rgba(139,92,246,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(139,92,246,0.7) 1px,
              transparent 1px
            );

          background-size: 55px 55px;
        }

        /* -----------------------------------------
           MOBILE
        ----------------------------------------- */

        @media (max-width: 768px) {
          .python-blob-1 {
            width: 280px;
            height: 280px;
          }

          .python-blob-2 {
            width: 300px;
            height: 300px;
          }

          .python-blob-3 {
            width: 180px;
            height: 180px;
          }

          .orbit-1 {
            width: 360px;
            height: 360px;
          }

          .orbit-2 {
            width: 250px;
            height: 250px;
          }

          .python-floating-code {
            font-size: 10px;
          }

          .python-shooting-light {
            width: 120px;
          }
        }

        /* -----------------------------------------
           REDUCED MOTION
        ----------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          .python-blob,
          .python-star,
          .python-floating-code,
          .python-orbit,
          .python-orbit-dot,
          .python-shooting-light {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default PythonPage;