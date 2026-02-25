"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin, FiMessageSquare, FiInstagram } from "react-icons/fi";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";


const headingFont = { fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)" };

const socials = [
    { icon: FiGithub, label: "GitHub", value: "github.com/Fhmi-srj", href: "https://github.com/Fhmi-srj" },
    { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/fhmi-srj", href: "https://www.linkedin.com/in/fhmi-srj" },
    { icon: FiInstagram, label: "Instagram", value: "@srjlll_", href: "https://www.instagram.com/srjlll_" },
    { icon: FaTiktok, label: "TikTok", value: "@nothingcareabtyouu", href: "https://www.tiktok.com/@nothingcareabtyouu" },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="py-28 bg-white relative overflow-hidden">
            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #2563EB 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.03,
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-8 bg-blue-600" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Kontak</span>
                        <div className="h-px w-8 bg-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={headingFont}>
                        Mari Berkolaborasi
                    </h2>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        Punya proyek atau ide menarik? Jangan ragu menghubungi saya. Saya selalu terbuka
                        untuk peluang kerja sama baru.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">

                    {/* Info */}
                    <div>
                        <div className="space-y-5">
                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-white border border-blue-100 flex items-center justify-center">
                                        <FiMapPin className="text-blue-600" size={16} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">Lokasi</p>
                                        <p className="text-slate-500 text-sm">Indonesia</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-white border border-blue-100 flex items-center justify-center">
                                        <FiMessageSquare className="text-blue-600" size={16} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">Respons</p>
                                        <p className="text-slate-500 text-sm">1–2 hari kerja</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Temukan Saya Di</p>
                                <div className="space-y-2.5">
                                    {socials.map(({ icon: Icon, label, value, href }) => (
                                        <motion.a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 4 }}
                                            className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-md hover:shadow-blue-50 transition-all duration-200"
                                            aria-label={label}
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                                                <Icon size={16} className="text-blue-600" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs font-semibold text-slate-400">{label}</p>
                                                <p className="text-sm font-medium text-slate-800 truncate">{value}</p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white border border-blue-100 rounded-2xl p-8 space-y-5 shadow-lg shadow-blue-50"
                        >
                            {[
                                { id: "name", label: "Nama Lengkap", type: "text", placeholder: "John Doe" },
                                { id: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                            ].map(f => (
                                <div key={f.id}>
                                    <label htmlFor={f.id} className="block text-sm font-semibold text-slate-800 mb-2">{f.label}</label>
                                    <input
                                        id={f.id}
                                        type={f.type}
                                        required
                                        value={form[f.id as keyof typeof form]}
                                        onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                                        placeholder={f.placeholder}
                                        className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-blue-50/40 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200"
                                    />
                                </div>
                            ))}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">Pesan</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                                    placeholder="Halo Fahmi, saya ingin mendiskusikan proyek..."
                                    className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-blue-50/40 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 resize-none"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all duration-200"
                            >
                                {submitted ? "Pesan Terkirim!" : <><FiSend size={15} />Kirim Pesan</>}
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-blue-100">
                <p className="text-center text-sm text-slate-400">
                    Dibuat oleh{" "}
                    <span className="font-semibold text-blue-600">Fahmi Muh Sirojul Munir</span>
                    {" "}&copy; {new Date().getFullYear()}
                </p>
            </div>
        </section>
    );
}
