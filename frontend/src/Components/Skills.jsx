import { FiCode, FiServer, FiDatabase, FiSmartphone } from "react-icons/fi";
import { TbApi } from "react-icons/tb";
import { MdDataUsage } from "react-icons/md";
import { SiReact, SiJavascript, SiNextdotjs, SiNodedotjs, SiExpress, SiWordpress, SiChatbot } from "react-icons/si";
import { LuBrain } from "react-icons/lu";

const TagPill = ({ icon: Icon, label }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 border border-slate-200">
    {Icon && <Icon className="text-slate-500" size={16} />} {label}
  </span>
);

const Card = ({ Icon, title, tags, className = "" }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
    <div className="flex items-start gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
        <Icon size={22} />
      </span>
      <div>
        <h3 className="text-2xl font-semibold text-slate-900 leading-snug">{title}</h3>
        <div className="mt-4 h-px w-full bg-slate-200" />
      </div>
    </div>
    <div className="mt-4 flex flex-wrap gap-3">
      {tags.map((t) => (
        <TagPill key={t.label} icon={t.icon} label={t.label} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const groups = [
    {
      title: "Frontend Development",
      icon: FiCode,
      tags: [
        { label: "React", icon: SiReact },
        { label: "JavaScript", icon: SiJavascript },
        { label: "Next.js", icon: SiNextdotjs },
      ],
    },
    {
      title: "Backend\nDevelopment",
      icon: FiServer,
      tags: [
        { label: "Node.js", icon: SiNodedotjs },
        { label: "Express", icon: SiExpress },
        { label: "REST API", icon: TbApi },
      ],
    },
    {
      title: "Data Science &\nDatabase",
      icon: FiDatabase,
      tags: [
        { label: "SQL", icon: FiDatabase },
        { label: "NoSQL", icon: FiDatabase },
        { label: "Data Analysis", icon: MdDataUsage },
        { label: "DBMS", icon: FiDatabase },
      ],
    },
  ];

  const cms = {
    title: "CMS & Others",
    icon: LuBrain,
    tags: [

      { label: "AI Agents", icon: LuBrain },
      { label: "Chatbots", icon: SiChatbot },
      { label: "App Development", icon: FiSmartphone },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Skills & Expertise</h2>
        <div className="mt-2 flex justify-center">
          <span className="block h-1 w-14 rounded bg-indigo-500"></span>
        </div>
        <p className="mt-3 text-center text-slate-600">Technologies I work with</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <Card
              key={g.title}
              Icon={g.icon}
              title={g.title}
              tags={g.tags}
            />
          ))}

          {/* CMS & Others spanning two columns on large screens */}
          <Card
            Icon={cms.icon}
            title={cms.title}
            tags={cms.tags}
            className="lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
