import { FiGlobe, FiBarChart2, FiBarChart } from "react-icons/fi";
import { TbApi, TbFileExcel } from "react-icons/tb";
import { LuBot } from "react-icons/lu";
import {  SiGithub, SiRescript } from "react-icons/si";
import { Link } from "react-router-dom";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 border border-slate-200">
    {children}
  </span>
);

const ProjectCard = ({ Icon, title, desc, tags, demo, github }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full">
    {/* Top icon banner */}
    <div className="grid place-items-center h-40 bg-slate-100/80">
      <span className="text-slate-400">
        <Icon size={44} />
      </span>
    </div>

    {/* Body */}
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-slate-900 leading-snug">{title}</h3>
      <p className="mt-3 text-slate-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </div>

    {/* Hover overlay for links */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-indigo-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="pointer-events-auto flex gap-3">
        {demo && (
          <Link
            to={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow hover:bg-slate-50"
          >
            <FiGlobe /> Live
          </Link>
        )}
        {github && (
          <Link
            to={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-900"
          >
            <SiGithub size={16} /> GitHub
          </Link>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      Icon: FiGlobe,
      title: "E‑Commerce\nPlatform",
      desc:
        "Full‑stack e‑commerce solution with React frontend and Node.js backend. Features include user authentication, payment integration, and Seller dashboard.",
      tags: ["React", "Node.js", "Express.js","JavaScript", "Tailwind CSS", "MongoDB"],
      demo: "#",
      github: "https://github.com/chandan9648/Cohort-final-project.git",
    },
      {
      Icon: TbFileExcel,
      title: "Excel analytics\nPlatform",
      desc:
        "Web application for uploading Excel files and generating visual analytics using charts and graphs for data insights.",
      tags: ["React", "Node.js", "Express.js","JavaScript", "Tailwind CSS", "MongoDB"],
      demo: "https://excel-analytics-2004.vercel.app",
      github: "https://github.com/chandan9648/Excel-analytics.git",
    },

    {
      Icon: LuBot,
      title: "AI Customer\nSupport Bot",
      desc:
        "Intelligent chatbot with natural language processing capabilities for automated customer support and query resolution.",
      tags: ["React", "Node.js", "Express.js","JavaScript", "Socket.io", "MongoDB"],
      demo: "#",
      github: "https://github.com/chandan9648/ai-chatbot.git",
    },
    
    {
      Icon: FiBarChart2,
      title: "ChatGpt Clone",
      desc:
        "A chat application clone with real-time messaging and user authentication and responsive design.",
      tags: ["React", "Express.js", "Node.js","JavaScript", "Socket.io", "MongoDB"],
      demo: "https://luna-your-assistance-1.onrender.com",
      github: "https://github.com/chandan9648/Luna-Your-Assistance.git",
    },
    {
      Icon: SiRescript,
      title: "Recipe management System",
      desc:
        "Responsive recipe management system with user & seller authentication, recipe CRUD operations, and search functionality.",
      tags: ["React", "Node.js", "JavaScript", "Express.js", "MongoDB"],
      demo: "#",
      github: "https://github.com/chandan9648/RecipeBox.git",
    },
        {
      Icon: FiBarChart,
      title: "Prompt Vault",
      desc:
        "A secure platform to store, manage, and visualize prompts with user authentication and data analytics.",
      tags: ["React", "Express.js","Node.js", "Notion","MongoDB"],
      demo: "#",
      github: "https://github.com/chandan9648/promptVault.git",
    },
    {
      Icon: TbApi,
      title: "REST API Service",
      desc:
        "Scalable RESTful API with comprehensive authentication, rate limiting, and extensive documentation.",
      tags: ["Node.js", "Express", "JWT",],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Featured Projects</h2>
        <div className="mt-2 flex justify-center">
          <span className="block h-1 w-14 rounded bg-indigo-500"></span>
        </div>
        <p className="mt-3 text-center text-slate-600">Some of my recent work</p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
