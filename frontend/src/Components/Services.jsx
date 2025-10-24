const ServiceCard = ({ title, points }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    <ul className="mt-4 space-y-2 text-slate-600">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <span className="text-emerald-600">✓</span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Web Development",
      points: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
        "Modern UI/UX",
      ],
    },
    {
      title: "CMS Solutions",
      points: ["Custom Themes", "Plugin Development", "Content Management"],
    },
    {
      title: "Data Science",
      points: ["Data Analysis", "Visualization", "Predictive Modeling"],
    },
    {
      title: "Application Development",
      points: ["Cross‑platform", "Native Performance", "Scalable Architecture"],
    },
    {
      title: "AI Agent Development",
      points: ["Chatbots", "Automation", "NLP Workflows"],
    },
    {
      title: "API Development",
      points: ["RESTful APIs", "Security", "Integrations"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Services</h2>
        <p className="mt-2 text-center text-slate-600">What I can do for you</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
