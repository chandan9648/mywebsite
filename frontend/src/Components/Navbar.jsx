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
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-indigo-600">
          Chandan Chaudhary
        </a>
        <nav className="hidden md:flex gap-6 text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-indigo-600 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
