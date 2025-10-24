  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";

    const links = [
      { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Close on escape key
    useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Close menu on hash change (navigating via Link to="#...")
    useEffect(() => {
      const onHash = () => setOpen(false);
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, []);

    return (
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-5 md:py-7 flex items-center justify-between">
          <Link to="#home" className="text-lg md:text-xl tracking-tight text-indigo-600 font-medium">
            Chandan Chaudhary
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-10 text-slate-800 text-lg font-medium">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="relative px-1 hover:text-indigo-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-indigo-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* Icon: hamburger / close */}
            <svg
              className={open ? "hidden h-6 w-6" : "block h-6 w-6"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={open ? "block h-6 w-6" : "hidden h-6 w-6"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={`md:hidden transition-all duration-200 ease-out ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="mx-auto max-w-6xl px-6 pb-4">
            <ul className="mt-1 rounded-xl border border-slate-200 bg-white/95 backdrop-blur shadow-md overflow-hidden">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-slate-800 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  };

  export default Navbar;
