const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(226,232,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.5) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-slate-600">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Chandan <span className="text-indigo-600">Chaudhary</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Full Stack Developer & Data Enthusiast. I build fast, modern web apps
            and data-driven solutions.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-500">Get In Touch</a>
            <a href="#projects" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 hover:border-slate-400">View Projects</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="h-64 w-64 md:h-80 md:w-80 rounded-3xl bg-indigo-500/90 shadow-2xl grid place-items-center text-white mx-auto">
            <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21a8 8 0 1 0-16 0"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
