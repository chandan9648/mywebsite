const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">About Me</h2>
        <div className="mt-2 flex justify-center">
          <span className="block h-1 w-14 rounded bg-indigo-500"></span>
        </div>
        <p className="mt-3 text-center text-slate-600">Passionate Developer from Maharajganj, Uttar Pradesh, India</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Left column: Two stacked cards */}
          <div className="grid gap-6">
            <div className="rounded-2xl border-l-4 border-indigo-600 bg-white p-6 shadow-sm hover:translate-y-2 transition-transform duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900">🚀 Professional Journey</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                As a dedicated full-stack developer and data scientist, I bring a unique blend of
                technical expertise and creative problem-solving to every project. Based in Maharajganj,
                Uttar Pradesh, I've been helping businesses and individuals transform their ideas into
                robust digital solutions.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-indigo-600 bg-white p-6 shadow-sm hover:translate-y-2 transition-transform duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900">💡 What Drives Me</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                I'm passionate about leveraging cutting-edge technologies to solve real-world problems.
                From developing responsive web applications to building intelligent AI agents, I thrive on
                challenges that push the boundaries of what's possible with code.
              </p>
            </div>
              {/* Full-width: My Approach */}
          <div className="rounded-2xl border-l-4 border-indigo-600 bg-white p-6 shadow-sm md:col-span-1 hover:translate-y-2 transition-transform duration-300 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">🎯 My Approach</h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              Every project is an opportunity to create something exceptional. I focus on clean,
              scalable code, user-centric design, and performance optimization. My goal is not just
              to meet requirements, but to exceed expectations.
            </p>
          </div>


          </div>

          {/* Right column: Stats */}
          <div className="grid gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-slate-700 hover:translate-x-2 transition-transform duration-300 hover:shadow-lg">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path d="M8.25 4.5 3 12l5.25 7.5m7.5-15L21 12l-5.25 7.5" />
                </svg>
              </span>
              <div>
                <div className="text-3xl font-bold text-indigo-600">20+</div>
                <div className="text-md">Projects Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-slate-700 hover:translate-x-2 transition-transform duration-300 hover:shadow-lg">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                {/* Briefcase Icon (Experience) */}
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-8 w-8">
                  <path d="M10 2a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v3h18V7a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2h-4Zm0 3V4h4v1h-4ZM3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8H3Z" />
                </svg>
              </span>
              <div>
                <div className="text-3xl font-bold text-indigo-600">1+</div>
                <div className="text-md">Experience</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-slate-700 hover:translate-x-2 transition-transform duration-300 hover:shadow-lg">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                {/* Graduation Cap Icon (Internship) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                  <path d="M12 3L1 9l11 6 9-4.91V17a1 1 0 0 0 2 0V9L12 3Zm0 11.09L4.26 9 12 4.91 19.74 9 12 14.09ZM6 15v2a6 6 0 0 0 12 0v-2h-2v2a4 4 0 0 1-8 0v-2H6Z" />
                </svg>
              </span>
              <div>
                <div className="text-3xl font-bold text-indigo-600">2+</div>
                <div className="text-md">Internship</div>
              </div>
            </div>



            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-slate-700 hover:translate-x-2 transition-transform duration-300 hover:shadow-lg">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.762 9.762 0 0 0 12 2.25Zm.75 5.25a.75.75 0 0 0-1.5 0v5.19l3.53 3.53a.75.75 0 1 0 1.06-1.06l-3.09-3.09V7.5Z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <div className="text-3xl font-bold text-indigo-600">24/7</div>
                <div className="text-md">Support Available</div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default About;
