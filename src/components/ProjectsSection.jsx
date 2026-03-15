import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    id: 1,
    title: "Blog App With Ai",
    description: "Your own blogging Platform",
    image: "/projects/project.png",
    tags: ["React", "TailwindCSS", "Node.js"],
    demoUrl: "https://blog-with-ai-psi.vercel.app/",
    githubUrl: "https://github.com/surajsinghsft/BlogWithAi",
  },
  {
    id: 2,
    title: "All Countries About.",
    description:
      "Where in the world All countries population and Capital Region.",
    image: "/projects/project1.png",
    tags: ["JavaScript", "TailwindCSS", "React"],
    demoUrl: "https://surajsinghsft.github.io/countries-app/",
    githubUrl: "https://github.com/surajsinghsft/countries-app",
  },
  {
    id: 3,
    title: "Language Translator",
    description: "Language Translator API.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://surajsinghsft.github.io/language-translator/",
    githubUrl: "https://github.com/surajsinghsft/language-translator",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Moving Projects */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.05}
              className="min-w-[300px]"
            >
              <div className="group bg-card rounded-lg overflow-hidden shadow-lg">

                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </Tilt>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/surajsinghsft"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};