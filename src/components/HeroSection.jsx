import { FloatingIcons } from "@/components/FloatingIcons";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Floating Background Icons */}
      <FloatingIcons />

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="text-primary">
              <TypeAnimation
                sequence={[
                  "Suraj Kushwaha",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            As a Full Stack Web Developer, I develop complete web solutions —
            from designing responsive user interfaces to building secure and
            powerful backend systems.
          </p>

          <div className="pt-4">
            <a
              href="#projects"
              className="cosmic-button hover:scale-110 transition-transform duration-300"
            >
              View My Work
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-700 dark:text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    </section>
  );
};