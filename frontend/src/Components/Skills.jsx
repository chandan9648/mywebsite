const Skills = () => {
  const groups = [
    { title: "Frontend Development", tags: ["React", "JavaScript", "TailwindCSS"] },
    { title: "Backend Development", tags: ["Node.js", "Express", "REST API"] },
    { title: "Data & DB", tags: ["SQL", "NoSQL", "Data Analysis"] },
    { title: "CMS & Others", tags: ["WordPress", "AI Agents", "App Dev"] },
  ];
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Skills & Expertise</h2>
        <p className="mt-2 text-center text-slate-600">Technologies I work with</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 border border-slate-200">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
