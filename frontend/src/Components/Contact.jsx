import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Get In Touch</h2>
        <p className="mt-2 text-center text-slate-600">Let's work together on your next project</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Location</h3>
              <p>India</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Email</h3>
              <Link to="mailto:chandankkumar156@gmail.com">chandankkumar156@gmail.com</Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">LinkedIn</h3>
              <Link to="https://www.linkedin.com/in/chandan-310156273/">linkedin.com/in/chandan-310156273</Link>
            </div>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <input placeholder="Full Name" className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white" />
            <input placeholder="Email Address" className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white" />
            <input placeholder="Subject" className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white" />
            <select className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white">
              <option>Select a service</option>
              <option>Web Development</option>
              <option>API Development</option>
              <option>Data & Dashboard</option>
            </select>
            <textarea placeholder="Message" rows={5} className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white resize-none" />
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 font-medium text-white shadow hover:bg-indigo-500">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
