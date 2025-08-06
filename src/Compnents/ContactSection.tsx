
"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#0B0014]">
      <div className="container mx-auto px-4">
        <SectionHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Get In Touch
      </h2>
      <p className="mt-4 text-gray-300 text-lg">
        Have a project in mind or want to discuss opportunities? Feel free to reach out!
      </p>
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-600" />
      </div>
    </motion.div>
  );
}

function ContactInfo() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const items = [
    { icon: <EmailIcon />, title: "Email", value: "hasssannann234@gmail.com", link: "mailto:hasssannann234@gmail.com" },
    { icon: <PhoneIcon />, title: "Phone", value: "03132335991", link: "tel:923132335991" },
    { icon: <WhatsAppIcon />, title: "WhatsApp", value: "03452524816", link: "https://wa.me/923452524816" },
    { icon: <GitHubIcon />, title: "GitHub", value: "@hassan", link: "https://github.com/hassannadeemansari" },
    { icon: <TwitterIcon />, title: "Twitter", value: "@hassan", link: "https://x.com/HassanA5069" }
  ];

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="sm:pl-32 pl-6 pt-10 rounded-2xl  backdrop-blur-lg "
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Contact Information
      </h3>
      <p className="mt-2 text-gray-400">
        Reach out through any of these channels
      </p>
      <div className="mt-8 space-y-6">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex items-start gap-4 group"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 group-hover:border-cyan-400/50 transition-all">
              {item.icon}
            </div>
            <div>
              <h4 className="font-medium text-gray-300 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 group-hover:text-white transition-colors">
                {item.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", contact: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResponseMsg(data.success ? "✅ Message sent successfully!" : "❌ Failed to send.");
      if (data.success) setForm({ name: "", email: "", contact: "", subject: "", message: "" });
    } catch {
      setResponseMsg("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 shadow-[0_0_30px_rgba(79,70,229,0.1)]"
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Send a Message
      </h3>
      <p className="mt-2 text-gray-400">
        I&apos;ll get back to you as soon as possible
      </p>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          <InputField name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
        </div>

        <InputField name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" required />
        <InputField name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={6}
          className="w-full border border-gray-700 rounded-xl p-4 focus:ring-1 focus:ring-pink-500 focus:border-transparent outline-none bg-gray-800/50 text-white placeholder-gray-500 transition-all"
          required
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px #db2977" }}
          type="submit"
          disabled={loading}
          className="w-full  text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-60 border border-pink-500"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner />
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {responseMsg && (
          <p className={`text-center font-medium ${responseMsg.includes("✅") ? "text-green-400" : responseMsg.includes("❌") ? "text-red-400" : "text-yellow-400"}`}>
            {responseMsg}
          </p>
        )}
      </div>
    </motion.form>
  );
}

interface InputFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}

function InputField({ name, value, onChange, placeholder, type = "text", required = false }: InputFieldProps) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      required={required}
      className="w-full border border-gray-700 rounded-xl p-4 focus:ring-1 focus:ring-pink-500 focus:border-transparent outline-none bg-gray-800/50 text-white placeholder-gray-500 transition-all"
    />
  );
}

function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

// Icon Components
function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );
}
