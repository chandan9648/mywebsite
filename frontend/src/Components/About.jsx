const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">About Me</h2>
        <p className="mt-2 text-center text-slate-600">Passionate developer based in India</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Professional Journey</h3>
            <p>
              I'm a full‑stack developer who enjoys turning ideas into robust,
              scalable digital products. I focus on clean architecture,
              performance, and delightful UX.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-slate-700"><span className="text-2xl font-bold text-indigo-600 mr-2">20+</span> Projects Completed</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-slate-700"><span className="text-2xl font-bold text-indigo-600 mr-2">10+</span> Happy Clients</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-slate-700"><span className="text-2xl font-bold text-indigo-600 mr-2">24/7</span> Support Available</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">My Approach</h3>
            <p>
              Every project is an opportunity to craft something exceptional.
              I prioritize readability, performance, and maintainability, while
              shipping features users love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
