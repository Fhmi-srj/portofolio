"use client";

import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const headingFont = { fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)" };

/* ── Browser mockup wrapper ─────────────── */
function BrowserPreview({ preview }: { preview: React.ReactNode }) {
    return (
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200 flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-2 flex-1 h-3.5 rounded bg-white border border-slate-200 flex items-center px-2 gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="h-1.5 rounded-full bg-slate-200 w-20" />
                </div>
            </div>
            <div className="overflow-hidden">{preview}</div>
        </div>
    );
}

/*  Previews per project  */
const previews: Record<string, React.ReactNode> = {
    aktivitas: <img src="/img/Aktivitas santri.png" alt="Aktivitas Santri" className="w-full h-auto block" />,
    aliyah: <img src="/img/absensi MA.png" alt="Website Aliyah" className="w-full h-auto block" />,
    spmb: <img src="/img/SPMB.png" alt="SPMB Online" className="w-full h-auto block" />,
    payment: <img src="/img/kasir.png" alt="Kasir Santri" className="w-full h-auto block" />,
    undangan: <img src="/img/Vowly (Undangan Pernikahan).png" alt="Vowly" className="w-full h-auto block" />,
    mpwa: <img src="/img/MPWA.png" alt="MPWA Gateway" className="w-full h-auto block" />,
};

const projects = [
    {
        key: "aktivitas",
        title: "Sistem Manajemen Aktivitas Santri",
        desc: "Aplikasi manajemen pesantren lengkap — data santri, presensi via QR Code, jadwal, notifikasi WhatsApp, hingga login biometrik dengan WebAuthn (fingerprint). Digunakan aktif oleh pesantren.",
        tags: ["Laravel", "React", "Inertia.js", "QR Code", "WebAuthn", "PWA"],
        github: "https://github.com/Fhmi-srj/absen.mambaulhuda.ponpes.id",
        live: "https://absen.mambaulhuda.ponpes.id",
    },
    {
        key: "aliyah",
        title: "Sistem Informasi Sekolah",
        desc: "Platform manajemen sekolah terlengkap yang saya bangun — mencakup data siswa & guru, absensi, jadwal pelajaran, keuangan (bisyaroh & tagihan), surat masuk/keluar, supervisi, kegiatan, laporan, dan ekspor Excel.",
        tags: ["Laravel", "React", "Tailwind", "Chart.js", "XLSX"],
        github: "https://github.com/Fhmi-srj/Website-Aliyah",
        live: "https://app.mahakam.sch.id",
    },
    {
        key: "spmb",
        title: "SPMB Online",
        desc: "Sistem Penerimaan Murid Baru berbasis web — proses pendaftaran, upload berkas, seleksi admin, pengumuman hasil, beasiswa, hingga monitoring statistik pendaftar secara real-time.",
        tags: ["Laravel", "React", "Chart.js", "MySQL", "XLSX"],
        github: "https://github.com/Fhmi-srj/SPMB",
        live: "https://daftar.mambaulhuda.ponpes.id",
    },
    {
        key: "payment",
        title: "Aplikasi Kasir & Tagihan Santri",
        desc: "Sistem kasir dengan manajemen transaksi, tagihan SPP, scan QR untuk pembayaran, laporan keuangan bulanan, dan ekspor Excel. Digunakan nyata untuk pengelolaan keuangan pesantren.",
        tags: ["Laravel", "React", "QR Code", "XLSX", "MySQL"],
        github: null,
        live: null,
    },
    {
        key: "undangan",
        title: "Vowly — Platform Undangan Pernikahan Digital",
        desc: "Website undangan pernikahan interaktif — countdown timer, konfirmasi kehadiran tamu, amplop digital (kirim hadiah via Midtrans), manajemen tamu, dan generate PDF undangan. Dibangun dengan Astro + Neon PostgreSQL.",
        tags: ["Astro", "React", "Midtrans", "PostgreSQL", "Framer Motion"],
        github: "https://github.com/Fhmi-srj/vowly-inv",
        live: "https://vowly-inv-production.up.railway.app/",
    },
    {
        key: "mpwa",
        title: "MPWA — WhatsApp Gateway (SaaS)",
        desc: "WhatsApp Gateway komersial multi-device — pengiriman pesan massal, webhook, dan API terintegrasi. Backbone notifikasi untuk beberapa proyek pesantren dan dijual sebagai tools.",
        tags: ["Node.js", "WhatsApp API", "Webhook", "Multi-device", "SaaS"],
        github: null,
        live: "https://serverwa.hello-inv.com/login",
    },
];

const looped = [...projects, ...projects];

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="flex-shrink-0 w-[370px] bg-white border border-blue-100 rounded-2xl overflow-hidden flex flex-col hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 mx-3"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* 16:9 preview */}
            <div className="relative overflow-hidden">
                <motion.div
                    animate={{ scale: hovered ? 1.04 : 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <BrowserPreview preview={previews[project.key]} />
                </motion.div>
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm flex items-center justify-center gap-3 z-10"
                        >
                            {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors"><FiGithub size={13} /> Kode</a>)}
                            {project.live && (
                                <a
                                    href={project.live} target="_blank" rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-colors"
                                >
                                    <FiExternalLink size={13} /> Live Demo
                                </a>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-slate-900 text-[15px] leading-snug" style={headingFont}>
                    {project.title}
                </h3>
                <p className="text-[12.5px] text-slate-500 leading-relaxed line-clamp-3 flex-1">
                    {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map(t => (
                        <span key={t} className="text-[11px] px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full font-semibold border border-blue-100">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" style={{ backgroundColor: "#F8FBFF" }} className="py-28">
            <div className="max-w-6xl mx-auto px-6 mb-12">
                <AnimatedSection className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-8 bg-blue-600" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Proyek</span>
                        <div className="h-px w-8 bg-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={headingFont}>
                        Proyek Nyata yang Sudah Dibuat
                    </h2>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        Bukan sekadar latihan — semua proyek ini dibangun untuk kebutuhan nyata
                        dan sudah atau sedang digunakan oleh penggunanya.
                    </p>
                </AnimatedSection>
            </div>

            {/* Infinite Carousel */}
            <div className="relative w-full overflow-hidden py-4">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #F8FBFF 10%, transparent 100%)" }} />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #F8FBFF 10%, transparent 100%)" }} />

                <div className="flex animate-marquee-left" style={{ width: "max-content" }}>
                    {looped.map((project, i) => (
                        <ProjectCard key={`${project.key}-${i}`} project={project} />
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
                <a
                    href="https://github.com/Fhmi-srj"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm"
                >
                    <FiGithub size={16} />
                    Lihat Semua di GitHub
                </a>
            </div>
        </section>
    );
}
