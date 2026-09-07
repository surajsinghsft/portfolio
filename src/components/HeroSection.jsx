import { FloatingIcons } from "@/components/FloatingIcons";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 md:px-8 overflow-hidden"
    >
      {/* Floating Background Icons */}
      <FloatingIcons />

      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-16 min-h-screen">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center md:text-left">
            <div className="space-y-6">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="text-primary">
                  <TypeAnimation
                    sequence={[
                      "Suraj Kushwaha",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "Python Developer",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-fade-in">
                As a Full Stack Web Developer, I develop complete web
                solutions — from designing responsive user interfaces to
                building secure and powerful backend systems.
              </p>

              <div className="pt-4">
                <a
                  href="#projects"
                  className="cosmic-button inline-flex hover:scale-110 transition-transform duration-300"
                >
                  View My Work
                </a>
              </div>

            </div>
          </div>

          {/* ================= RIGHT PHOTO ================= */}
          <div className="flex justify-center md:justify-end relative">

            <div className="relative w-[280px] h-[380px] sm:w-[330px] sm:h-[450px] md:w-[400px] md:h-[520px]">

              {/* Purple Glow */}
              <div
                className="
                  absolute
                  top-8
                  left-1/2
                  -translate-x-1/2
                  w-[250px]
                  h-[250px]
                  md:w-[360px]
                  md:h-[360px]
                  rounded-full
                  bg-primary/20
                  blur-3xl
                "
              />

              {/* Purple Circle */}
              <div
                className="
                  absolute
                  top-10
                  left-1/2
                  -translate-x-1/2
                  w-[250px]
                  h-[250px]
                  md:w-[350px]
                  md:h-[350px]
                  rounded-full
                  border-2
                  border-primary/60
                  shadow-[0_0_60px_rgba(139,92,246,0.45)]
                "
              />

              {/* Orbit Ring */}
              <div
                className="
                  absolute
                  top-[170px]
                  left-1/2
                  -translate-x-1/2
                  w-[300px]
                  h-[90px]
                  md:w-[420px]
                  md:h-[120px]
                  rounded-[50%]
                  border-2
                  border-primary/70
                  rotate-[-12deg]
                  shadow-[0_0_20px_rgba(139,92,246,0.5)]
                "
              />

              {/* Profile Image */}
              <img
                src="/profile.png"
                alt="Suraj Kushwaha"
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  w-full
                  h-full
                  object-contain
                  drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]
                  z-10
                "
              />

              {/* Developer Badge */}
              <div
                className="
                  hidden md:block
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-primary/30
                  bg-background/60
                  backdrop-blur-md
                  text-sm
                  text-foreground
                  shadow-lg
                  z-20
                "
              >
                <span className="text-primary font-semibold">
                  &lt;/&gt;
                </span>
                <br />
                Full Stack
                <br />
                Developer
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-700 dark:text-muted-foreground mb-2">
          Scroll
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    </section>
  );
};