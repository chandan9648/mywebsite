import { FiGlobe, FiTrendingUp, FiSmartphone, FiShield } from "react-icons/fi";
import { TbApi } from "react-icons/tb";
import { SiWordpress } from "react-icons/si";
import { LuBot } from "react-icons/lu";
import { MdInsights } from "react-icons/md";

const Check = () => <span className="text-emerald-600">✓</span>;

const ServiceCard = ({ Icon, title, description, points }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm h-full">
    <div className="mx-auto mb-5 grid place-items-center">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md">
        <Icon size={28} />
      </span>
    </div>
    <h3 className="text-2xl font-semibold text-slate-900 text-center leading-snug">{title}</h3>
    {description && (
      <p className="mt-3 text-center text-slate-600 max-w-md mx-auto">{description}</p>
    )}
    <ul className="mt-6 space-y-2 text-slate-700 max-w-md mx-auto">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <Check />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const services = [
    {
      Icon: FiGlobe,
      title: "Web Development",
      description:
        "Custom web applications using modern technologies like React, Node.js, and Next.js. Responsive, fast, and user-friendly websites.",
      points: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
        "Modern UI/UX",
      ],
    },
    {
      Icon: SiWordpress,
      title: "CMS Solutions",
      description:
        "WordPress development and customization. From simple blogs to complex e-commerce sites with custom themes and plugins.",
      points: [
        "Custom Themes",
        "Plugin Development",
        "E-commerce Integration",
        "Content Management",
      ],
    },
    {
      Icon: MdInsights,
      title: "Data Science",
      description:
        "Data analysis, visualization, and machine learning solutions. Transform your data into actionable insights and intelligent systems.",
      points: [
        "Data Analysis",
        "Machine Learning",
        "Data Visualization",
        "Predictive Modeling",
      ],
    },
    {
      Icon: FiSmartphone,
      title: "Application Development",
      description:
        "Cross-platform mobile and desktop applications. Native performance with modern frameworks and technologies.",
      points: [
        "Cross-platform Apps",
        "Native Performance",
        "User-centric Design",
        "Scalable Architecture",
      ],
    },
    {
      Icon: LuBot,
      title: "AI Agent Development",
      description:
        "Intelligent automation and AI-powered solutions. Custom chatbots, automated workflows, and smart data processing systems.",
      points: [
        "Chatbot Development",
        "Process Automation",
        "Natural Language Processing",
        "Smart Integrations",
      ],
    },
    {
      Icon: TbApi,
      title: "API Development",
      description:
        "RESTful API design and development. Secure, scalable, and well-documented APIs for seamless integration.",
      points: [
        "RESTful APIs",
        "API Documentation",
        "Security Implementation",
        "Third-party Integrations",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Services</h2>
        <div className="mt-2 flex justify-center">
          <span className="block h-1 w-14 rounded bg-indigo-500"></span>
        </div>
        <p className="mt-3 text-center text-slate-600">What I can do for you</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
