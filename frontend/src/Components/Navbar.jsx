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
    return (
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-7 flex items-center justify-between">
          <Link to="#home" className="text-lg md:text-xl  tracking-tight text-indigo-600 font-medium">
            Chandan Chaudhary
          </Link>
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
        </div>
      </header>
    );
  };

  export default Navbar;
