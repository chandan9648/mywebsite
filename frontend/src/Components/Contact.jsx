import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiMapPin, FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";

const IconBox = ({ children }) => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
    {children}
  </span>
);

const ContactCard = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:translate-x-2 transition-transform duration-300 hover:shadow-lg">
    <div className="flex items-start gap-4 ">
      <IconBox>
        <Icon size={20} />
      </IconBox>
      <div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <div className="mt-1 text-slate-600">{children}</div>
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">Get In Touch</h2>
        <div className="mt-2 flex justify-center">
          <span className="block h-1 w-14 rounded bg-indigo-500"></span>
        </div>
        <p className="mt-3 text-center text-slate-600">Let's work together on your next project</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Contact details */}
          <div className="space-y-4 ">
            <ContactCard icon={FiMapPin} title="Location" className="">
              Maharajganj, Uttar Pradesh<br />India
            </ContactCard>
            <ContactCard icon={FiMail} title="Email">
              <Link to="mailto:chandankkumar156@gmail.com" className="text-indigo-600 hover:underline">
                chandankkumar156@gmail.com
              </Link>
            </ContactCard>
            <ContactCard icon={FiLinkedin} title="LinkedIn">
              <Link
                to="https://www.linkedin.com/in/amitranjanmaurya"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                linkedin.com/in/chandan-310156273
              </Link>
            </ContactCard>
            <ContactCard icon={FiInstagram} title="Instagram">
              <Link
                to="https://instagram.com/mr.chandan.156"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                @mr.chandan.156
              </Link>
            </ContactCard>
          </div>

          {/* Right: Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

// ----- Form component -----
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, ok: null, error: "" });

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://mywebsite-4ljn.on.com";

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: "" });
    try {
      const { data } = await axios.post(`${API_BASE}/api/contact`, {
        name: form.name,
        email: form.email,
        subject: form.subject,
        service: form.service || "Others",
        message: form.message,
      });
      if (!data?.ok) throw new Error(data?.error || "Submission failed");
      setStatus({ loading: false, ok: true, error: "" });
      setForm({ name: "", email: "", subject: "", service: "", message: "" });
    } catch (err) {
      const msg = err?.response?.data?.error || err.message || "Submission failed";
      setStatus({ loading: false, ok: false, error: msg });
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm space-y-3">
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Full Name"
        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="Email Address"
        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      />
      <input
        name="subject"
        value={form.subject}
        onChange={onChange}
        placeholder="Subject"
        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      />
      <select
        name="service"
        value={form.service}
        onChange={onChange}
        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white "
      >
        <option value="">Select a service</option>
        <option>Web Development</option>
        <option>CMS Solutions</option>
        <option>Data Science</option>
        <option>Application Development</option>
        <option>AI Agent Development</option>
        <option>API Development</option>
        <option>Others</option>
      </select>
      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder="Message"
        rows={6}
        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white resize-none"
      />
      <button
        type="submit"
        disabled={status.loading}
        className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 font-medium text-white shadow hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {status.loading ? 'Sending…' : 'Send Message'}
      </button>
      {status.ok && (
        <p className="text-emerald-600 text-sm">Thanks! Your message has been sent.</p>
      )}
      {status.ok === false && (
        <p className="text-red-600 text-sm">{status.error}</p>
      )}
    </form>
  );
};
