import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Chandan Chaudhary</h3>
          <p className="mt-2 text-slate-400">Full Stack Developer & Data Enthusiast</p>
        </div>
        <div>
          <h4 className="font-medium">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-slate-400">
            <li><Link to="#home" className="hover:text-white">Home</Link></li>
            <li><Link to="#about" className="hover:text-white">About</Link></li>
            <li><Link to="#skills" className="hover:text-white">Skills</Link></li>
            <li><Link to="#services" className="hover:text-white">Services</Link></li>
            <li><Link to="#projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Connect</h4>
          <div className="mt-2 flex gap-3 text-slate-400">
            <a href="#" className="hover:text-white">Email</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center text-slate-500 text-sm py-4 border-t border-slate-800">
        © {new Date().getFullYear()} Chandan Chaudhary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
