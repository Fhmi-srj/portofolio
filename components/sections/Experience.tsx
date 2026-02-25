"use client";

import { FiBook, FiCode, FiUsers, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const headingFont = { fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)" };

const highlights = [
    {
        icon: FiCode,
        value: "6+",
        label: "Proyek Aktif",
        desc: "Aplikasi yang saat ini digunakan secara nyata",
    },
    {
        icon: FiUsers,
        value: "300+",
        label: "Pengguna Aktif",
        desc: "Total pengguna di berbagai proyek yang dibangun",
    },
    {
        icon: FiZap,
        value: "2+",
        label: "Tahun Coding",
        desc: "Konsisten belajar dan membangun sejak semester awal",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-28 bg-white">
            <div className="max-w-5xl mx-auto px-6">

                <AnimatedSection className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-8 bg-blue-600" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Perjalanan</span>
                        <div className="h-px w-8 bg-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={headingFont}>
                        Latar Belakang & Pencapaian
                    </h2>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        Mahasiswa aktif yang tidak hanya belajar di kelas — tapi juga membangun
                        produk nyata yang digunakan oleh orang-orang sesungguhnya.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 items-start">

                    {/* ── Education Card ── */}
                    <AnimatedSection direction="left" delay={0.05}>
                        <div className="space-y-5">

                            {/* Main education */}
                            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 relative overflow-hidden">
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-12 -translate-y-12 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                            <FiBook size={22} className="text-white" />
                                        </div>
                                        <span className="text-xs px-3 py-1 bg-green-50 text-green-600 border border-green-200 rounded-full font-bold">
                                            Aktif Sekarang
                                        </span>
                                    </div>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                                        S1 Informatika
                                    </p>
                                    <h3 className="font-bold text-slate-900 text-lg leading-snug mb-1" style={headingFont}>
                                        Institut Teknologi dan Sains Nahdlatul Ulama Pekalongan
                                    </h3>
                                    <p className="text-sm text-slate-400 font-medium mb-4">
                                        2023 — Sekarang &nbsp;·&nbsp; Pekalongan, Jawa Tengah
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Algoritma", "Web Development", "Database", "OOP", "Mobile Dev"].map(s => (
                                            <span key={s} className="text-[11px] px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full font-semibold">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Self-taught note */}
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Self-Taught</p>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Sebagian besar skill praktis dipelajari secara mandiri —
                                    dari dokumentasi resmi, kursus online, dan yang paling banyak:
                                    <span className="font-semibold text-slate-800"> membangun proyek nyata</span>.
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {["Next.js", "Laravel", "GSAP", "React Native", "Docker"].map(t => (
                                        <span key={t} className="text-[11px] px-2 py-0.5 bg-white border border-slate-200 text-slate-500 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── Real-world impact ── */}
                    <AnimatedSection direction="right" delay={0.1}>
                        <div className="space-y-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Yang membuat berbeda</p>
                                <h3 className="text-2xl font-bold text-slate-900" style={headingFont}>
                                    Proyek yang <span className="text-blue-600">benar-benar dipakai</span>
                                </h3>
                                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                    Bukan cuma portofolio fiktif — beberapa aplikasi yang saya bangun
                                    sudah berjalan di production dan digunakan setiap hari.
                                </p>
                            </div>

                            {/* Highlight stats */}
                            <div className="grid grid-cols-1 gap-3">
                                {highlights.map(({ icon: Icon, value, label, desc }, i) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-white border border-blue-100 rounded-2xl hover:border-blue-300 hover:shadow-md hover:shadow-blue-50 transition-all duration-200"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Icon size={20} className="text-blue-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-baseline gap-1.5">
                                                <span className="text-2xl font-bold text-blue-600" style={headingFont}>{value}</span>
                                                <span className="font-bold text-slate-900 text-sm">{label}</span>
                                            </div>
                                            <p className="text-xs text-slate-400 truncate">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quote / mindset */}
                            <div className="relative p-5 rounded-2xl bg-blue-600 text-white overflow-hidden">
                                <div className="absolute top-2 left-4 text-blue-400 text-6xl font-serif leading-none opacity-30">&ldquo;</div>
                                <p className="relative z-10 text-sm leading-relaxed font-medium">
                                    Saya percaya cara terbaik belajar adalah dengan membangun.
                                    Setiap proyek mengajarkan lebih banyak dari yang bisa dipelajari di kelas.
                                </p>
                                <p className="relative z-10 mt-3 text-xs text-blue-200 font-semibold">— Fahmi Muh Sirojul Munir</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

            </div>
        </section>
    );
}
