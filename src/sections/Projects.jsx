import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "SMS Sending Application",
    description:
      "Developed a secure SMS sending application using JEE and Spring Boot, containerized with Docker and integrated with an external SMS gateway. Implemented error handling, logging, and CI/CD workflows using Git and GitLab.",
    image: "/projects/sms.png",
    tags: ["JEE", "Spring Boot", "Docker", "REST API", "Git", "GitLab", "CI/CD"],
    link: "#",
    github: "#",
  },
  {
    title: "Chat Application",
    description:
      "Built a chat application using React and Redux, connected to a Node.js (Express) REST API for real-time message exchange. Implemented authentication, chat rooms, private messaging, and Docker-based deployment with Git/GitLab.",
    image: "/projects/chat.png",
    tags: ["React", "Redux", "Node.js", "Express", "REST API", "Docker", "GitLab"],
    link: "#",
    github: "#",
  },
  {
    title: "Fraud Detection System",
    description:
      "Developed a predictive model on 284K+ transactions using Isolation Forest and Random Forest. Performed data preprocessing and feature engineering to improve detection accuracy.",
    image: "/projects/FRAUDPREVENTION.jpg",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
    link: "#",
    github: "https://github.com/Mariam123-Git/FraudDetection",
  },
  {
    title: "Event Management Application",
    description:
      "Designed an event management system handling registrations, participants, and dashboards, connected to a MySQL database.",
    image: "/projects/event.jpeg",
    tags: ["JavaFX", "MySQL", "UI/UX", "Event Management"],
    link: "#",
    github: "https://github.com/Mariam123-Git/application",
  },
  {
    title: "Assessment Management Application",
    description:
      "Developed an application enabling teachers to create, share, and duplicate assessments for students. Students can complete evaluations through online forms. Built with Spring Boot (backend) and Next.js (frontend), containerized with Docker and deployed behind Nginx. Implemented CI/CD pipelines using Git and GitLab for automated integration and deployment.",
    image: "/projects/evaluation.png",
    tags: ["Next.js", "Spring Boot", "Docker", "Nginx", "REST API", "GitLab", "CI/CD"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
           <AnimatedBorderButton href="https://github.com/Mariam123-Git?tab=repositories">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
