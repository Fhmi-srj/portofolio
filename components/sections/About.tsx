"use client";

import { FiAward, FiCode, FiCoffee } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
    { icon: FiCode, value: "20+", label: "Proyek Selesai" },
    { icon: FiAward, value: "2+", label: "Tahun Pengalaman" },
    { icon: FiCoffee, value: "500+", label: "Cangkir Kopi" },
];

const headingFont = { fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)" };

export default function About() {
    return (
        <section id="about" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Avatar */}
                    <AnimatedSection direction="left">
                        <div className="flex justify-center md:justify-start">
                            <div className="relative">
                                <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-blue-100" />
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-2 border-blue-200 shadow-lg shadow-blue-100">
                                    <img
                                        src="/img/profil.jpeg"
                                        alt="Fahmi Muh Sirojul Munir"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-md border border-blue-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-xs font-bold text-slate-800">Open to Work</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Content */}
                    <AnimatedSection direction="right" delay={0.15}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-blue-600" />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Tentang Saya</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight" style={headingFont}>
                            Passionate developer{" "}
                            <span className="text-blue-600">berbasis di Indonesia</span>
                        </h2>
                        <p className="text-slate-500 mb-4 leading-relaxed">
                            Halo! Saya Fahmi Muh Sirojul Munir, seorang fullstack developer yang gemar
                            membangun aplikasi web yang tidak hanya berfungsi dengan baik, tetapi juga
                            tampil memukau secara visual.
                        </p>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            Saya percaya teknologi terbaik adalah yang terasa mudah dan menyenangkan
                            digunakan. Setiap proyek adalah kesempatan untuk belajar hal baru.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map(({ icon: Icon, value, label }) => (
                                <div
                                    key={label}
                                    className="rounded-2xl p-4 flex flex-col items-center gap-2 text-center border border-blue-100 bg-blue-50 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                                >
                                    <Icon className="text-blue-600" size={20} />
                                    <span className="font-bold text-xl text-slate-900" style={headingFont}>{value}</span>
                                    <span className="text-xs text-slate-500 leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
