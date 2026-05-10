import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [

   {
    id: 1,
    title: "Ai-carrer-coach",
    description: "Build Your Future with AI Career Coach 🚀Crack interviews, build skills, and grow faster with powerful AI tools designed for your success.",
    image: "/projects/project4.png",
    tags: ["Next.js", "React", "TailwindCSS", "JavaScript", "Clerk"],
    demoUrl: "https://ai-career-coach-2cbm.vercel.app",
    githubUrl: "https://github.com/surajsinghsft/AI-Career-Coach",
  },

   {
    id: 2,
    title: "HirePrep AI",
    description: "Built an AI-powered interview preparation platform with video calling and automated question generation",
    image: "/projects/project3.png",
    tags: ["Next.js", "React", "TailwindCSS", "JavaScript", "Clerk","Stream","Supabase", "Clerk", "Arcjet"],
    demoUrl: "https://prept-ai.vercel.app",
    githubUrl: "https://github.com/surajsinghsft/prept-ai",
  },

  {
    id: 3,
    title: "Blog App With Ai",
    description: "Your own blogging Platform",
    image: "/projects/project.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://blog-with-ai-psi.vercel.app/",
    githubUrl: "https://github.com/surajsinghsft/BlogWithAi",
  },

  {
    id: 4,
    title: "All Countries About.",
    description:
      "Where in the world All countries population and Capital Region.",
    image: "/projects/project1.png",
    tags: ["JavaScript", "TailwindCSS", "React"],
    demoUrl: "https://surajsinghsft.github.io/countries-app/",
    githubUrl: "https://github.com/surajsinghsft/countries-app",
  },

  {
    id: 7,
    title: "Snake Game",
    description:
      "A classic Snake game built with React and TailwindCSS",
    image: "/projects/project7.png",
    tags: ["JavaScript", "TailwindCSS", "React"],
    demoUrl: "https://snake-game-sand-tau.vercel.app/",
    githubUrl: "https://github.com/surajsinghsft/Snake-Game",
  },
 {
    id: 5,
    title: "Language Translator",
    description:
      "Language Translator API ",
    image: "/projects/project2.png",
    tags: ["JavaScript", "TailwindCSS", "React"],
    demoUrl: "https://surajsinghsft.github.io/language-translator/",
    githubUrl: "https://surajsinghsft.github.io/language-translator/",
  },

   {
    id: 6,
    title: "Kanban UI Board",
    description:
      "Kanban UI Board with drag and drop functionality",
    image: "/projects/project6.png",
    tags: ["JavaScript", "TailwindCSS", "React"],
    demoUrl: "https://surajsinghsft.github.io/kanban-ui/",
    githubUrl: "https://github.com/surajsinghsft/kanban-ui",
  },

  {
    id: 8,
    title: "Tic-Toc-Teo",
    description:
      "Tic-Toc-Teo Game built with React and TailwindCSS",
    image: "/projects/project8.png",
    tags: ["JavaScript", "TailwindCSS", "React"],
    demoUrl: "https://tic-toc-teo-orcin.vercel.app/",
    githubUrl: "https://github.com/surajsinghsft/Tic-toc-Teo",
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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => window.open(project.demoUrl, "_blank", "noopener,noreferrer")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  window.open(project.demoUrl, "_blank", "noopener,noreferrer");
                }
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>

                <p className="mb-5 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-auto flex space-x-3">
                  <span className="text-foreground/80 transition-colors duration-300 group-hover:text-primary flex items-center gap-2">
                    <ExternalLink size={20} />
                    Live Demo
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="text-foreground/80 transition-colors duration-300 hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

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
