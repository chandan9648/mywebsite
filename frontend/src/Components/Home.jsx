import React from "react";
import { Link } from "react-router-dom";
import { SiMongodb, SiReact, SiJavascript } from "react-icons/si";


const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16v16H4z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m8 9-3 3 3 3" />
    <path d="m16 9 3 3-3 3" />
    <path d="m14 4-4 16" />
  </svg>
);

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* subtle grid background */}
      <div className="absolute inset-0 -z-10 bg-grid-home" />

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Text section */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Hi, I'm <span className="text-indigo-600">Chandan Chaudhary</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Full Stack Developer & Data Enthusiast
          </p>
          <p className="mt-3 text-base text-slate-500 max-w-xl">
            Passionate about building modern web apps, CMS solutions, and
            data-driven digital experiences that transform ideas into impactful
            products.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="#contact"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition"
            >
              <MailIcon /> Get In Touch
            </Link>
            <Link
              to="#projects"
              className="inline-flex items-center gap-2 border border-indigo-200 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition"
            >
              <CodeIcon /> View Projects
            </Link>
          </div>

          {/* Socials */}
          <div className="mt-8 flex gap-4">
            <a
              href="mailto:contact@chandanc.dev"
              className="p-3 bg-white rounded-lg shadow hover:shadow-md transition"
              aria-label="Email"
            >
              <MailIcon />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white rounded-lg shadow hover:shadow-md transition"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#0a66c2"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4zM8.5 8.5h3.8v2h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V23h-3.99v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.68-2.49 3.42V23H8.5z" />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white rounded-lg shadow hover:shadow-md transition"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Glowing Card */}
        <div className="relative flex justify-center">
          <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-2xl grid place-items-center text-white overflow-hidden">
            {/* Glow Blur Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-400 opacity-30 blur-2xl" />

            {/* Main avatar */}
            <svg
              width="110"
              height="110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 drop-shadow-xl"
            >
              <path d="M20 21a8 8 0 1 0-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>

            {/* Floating icons */}
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-xl text-green-600 p-4 rounded-2xl shadow-lg animate-float-slow">
              <SiMongodb size={26} />
            </div>

            <div className="absolute -right-4 top-10 bg-white/40 backdrop-blur-xl text-cyan-500 p-4 rounded-2xl shadow-lg animate-float-medium">
              <SiReact size={26} className="animate-spin-slow" />
            </div>

            <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 bg-white/40 backdrop-blur-xl text-yellow-500 p-4 rounded-2xl shadow-lg animate-float-delay">
              <SiJavascript size={26} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
