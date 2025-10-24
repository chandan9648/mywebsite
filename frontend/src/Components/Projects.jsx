const ProjectCard = ({ title, desc, tags }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
    <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
    <p className="mt-3 text-slate-600">{desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 border border-slate-200">{t}</span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E‑Commerce Platform",
      desc:
        "Full‑stack solution with authentication, payments, and admin dashboard.",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      title: "Data Analytics Dashboard",
      desc:
        "Interactive dashboard with real‑time charts and analytics.",
      tags: ["React", "Charts", "ETL"],
    },
    {
      title: "AI Customer Support Bot",
      desc:
        "NLP‑powered chatbot for automated customer support and routing.",
      tags: ["NLP", "Automation", "Node.js"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Featured Projects</h2>
        <p className="mt-2 text-center text-slate-600">Some of my recent work</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
