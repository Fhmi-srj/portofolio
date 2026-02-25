"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import gsap from "gsap";

const roles = ["Fullstack Developer", "Web Enthusiast", "Problem Solver", "UI/UX Tinkerer"];

const stats = [
    { value: "20+", label: "Proyek" },
    { value: "2+", label: "Tahun" },
    { value: "10+", label: "Klien" },
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Refs for GSAP
    const badgeRef = useRef<HTMLDivElement>(null);
    const headRef = useRef<HTMLHeadingElement>(null);
    const roleRef = useRef<HTMLDivElement>(null);
    const tagRef = useRef<HTMLParagraphElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const decoRef = useRef<HTMLDivElement>(null);

    // GSAP entrance animations
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(badgeRef.current, { y: 30, opacity: 0, duration: 0.6 })
            .from(headRef.current, { y: 40, opacity: 0, duration: 0.7 }, "-=0.3")
            .from(roleRef.current, { y: 25, opacity: 0, duration: 0.5 }, "-=0.3")
            .from(tagRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.25")
            .from(statsRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
            .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
            .from(socialRef.current, { y: 15, opacity: 0, duration: 0.4 }, "-=0.2")
            .from(imgRef.current, { x: 60, opacity: 0, duration: 0.9, ease: "power2.out" }, "-=1.4")
            .from(decoRef.current, { opacity: 0, scale: 0.8, duration: 0.6 }, "-=0.5");

        // Continuous floating on image
        gsap.to(imgRef.current, {
            y: -16,
            duration: 3.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });
    }, []);

    // Typing effect
    useEffect(() => {
        const current = roles[roleIndex];
        let t: ReturnType<typeof setTimeout>;
        if (!isDeleting) {
            if (displayed.length < current.length) {
                t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
            } else {
                t = setTimeout(() => setIsDeleting(true), 2200);
            }
        } else {
            if (displayed.length > 0) {
                t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
            } else {
                setIsDeleting(false);
                setRoleIndex(i => (i + 1) % roles.length);
            }
        }
        return () => clearTimeout(t);
    }, [displayed, isDeleting, roleIndex]);

    const scrollTo = (href: string) =>
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ backgroundColor: "#F8FBFF" }}
        >
            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #2563EB 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                    opacity: 0.04,
                }}
            />
            {/* Glow blobs */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-30" style={{ background: "#DBEAFE" }} />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20" style={{ background: "#BFDBFE" }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* ── LEFT: Text Content ─────────────────── */}
                    <div>
                        {/* Badge */}
                        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm mb-7">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-sm font-medium text-blue-700">Available for work</span>
                        </div>

                        {/* Name */}
                        <h1
                            ref={headRef}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4"
                            style={{ fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)" }}
                        >
                            Hei, Saya{" "}
                            <span className="text-blue-600 block mt-1">Fahmi Munir</span>
                        </h1>

                        {/* Typing role */}
                        <div
                            ref={roleRef}
                            className="flex items-center gap-1 mb-5"
                        >
                            <span className="text-xl font-medium text-slate-400" style={{ fontFamily: "var(--font-heading)" }}>
                                {displayed}
                            </span>
                            <span className="inline-block w-0.5 h-6 bg-blue-600 animate-pulse" />
                        </div>

                        {/* Tagline */}
                        <p
                            ref={tagRef}
                            className="text-base text-slate-500 leading-relaxed mb-7 max-w-md"
                        >
                            Membangun pengalaman digital yang indah dan fungsional —
                            dari ide menjadi produk nyata yang berdampak.
                        </p>

                        {/* Stats row */}
                        <div ref={statsRef} className="flex gap-6 mb-8">
                            {stats.map((s, i) => (
                                <div key={s.label} className={`text-center ${i < stats.length - 1 ? "pr-6 border-r border-blue-100" : ""}`}>
                                    <p className="text-2xl font-bold text-blue-600" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</p>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div ref={ctaRef} className="flex flex-wrap gap-3 mb-8">
                            <button
                                onClick={() => scrollTo("#projects")}
                                className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 text-sm"
                            >
                                Lihat Proyek
                                <FiArrowRight size={15} />
                            </button>
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5 text-sm"
                            >
                                Hubungi Saya
                            </button>
                            <a
                                href="#"
                                aria-label="Download CV"
                                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-blue-200 text-slate-600 font-semibold rounded-full hover:border-blue-400 hover:text-blue-600 transition-all duration-200 text-sm shadow-sm"
                            >
                                <FiDownload size={15} />
                                CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div ref={socialRef} className="flex items-center gap-4">
                            <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Temukan saya</span>
                            <div className="h-px flex-1 bg-blue-100 max-w-[60px]" />
                            {[
                                { icon: FiGithub, href: "https://github.com/Fhmi-srj", label: "GitHub" },
                                { icon: FiLinkedin, href: "https://www.linkedin.com/in/fhmi-srj", label: "LinkedIn" },
                                { icon: FiInstagram, href: "https://www.instagram.com/srjlll_", label: "Instagram" },
                                { icon: FaTiktok, href: "https://www.tiktok.com/@nothingcareabtyouu", label: "TikTok" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border border-blue-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-400 hover:shadow-md hover:shadow-blue-100 transition-all duration-200"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Code Editor Mockup ──────────── */}
                    <div className="relative hidden lg:flex justify-center items-center">
                        {/* Floating decorative badges */}
                        <div ref={decoRef} className="absolute inset-0 pointer-events-none z-10">
                            {/* Top-right deploy badge */}
                            <div className="absolute -top-2 -right-4 bg-white border border-green-200 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs font-bold text-green-600">6 Apps Live</span>
                            </div>
                            {/* Bottom-left stack badge */}
                            <div className="absolute -bottom-2 -left-4 bg-white border border-blue-100 rounded-2xl px-3 py-2 shadow-lg">
                                <p className="text-[10px] text-slate-400 font-medium">Tech Stack</p>
                                <div className="flex gap-1.5 mt-1">
                                    {["Laravel", "React", "TS"].map(t => (
                                        <span key={t} className="text-[9px] px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded font-bold border border-blue-100">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Editor window */}
                        <div
                            ref={imgRef}
                            className="w-full max-w-[460px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-100/80 border border-slate-200"
                        >
                            {/* Title bar */}
                            <div className="flex items-center justify-between px-4 py-2.5 bg-[#1E1E2E] border-b border-white/5">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-400" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <span className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex gap-0 text-[11px]">
                                    <div className="px-4 py-1 bg-[#2A2A3D] text-blue-300 rounded-t font-mono border-t-2 border-blue-500 -mb-px">
                                        fahmi.ts
                                    </div>
                                    <div className="px-4 py-1 text-slate-500 font-mono">
                                        about.tsx
                                    </div>
                                </div>
                                <div className="w-16" />
                            </div>

                            {/* Editor body */}
                            <div className="bg-[#1A1A2E] px-0 py-4 font-mono text-[13px] leading-7">
                                {/* Line numbers + code */}
                                {[
                                    { ln: 1, code: <></> },
                                    { ln: 2, code: <><span className="text-blue-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{"{"}</span></> },
                                    { ln: 3, code: <><span className="text-green-400 pl-4">name</span><span className="text-white">:</span> <span className="text-orange-300">&apos;Fahmi Muh Sirojul Munir&apos;</span><span className="text-white">,</span></> },
                                    { ln: 4, code: <><span className="text-green-400 pl-4">role</span><span className="text-white">:</span> <span className="text-orange-300">&apos;Fullstack Developer&apos;</span><span className="text-white">,</span></> },
                                    { ln: 5, code: <><span className="text-green-400 pl-4">university</span><span className="text-white">:</span> <span className="text-orange-300">&apos;ITSNU Pekalongan&apos;</span><span className="text-white">,</span></> },
                                    { ln: 6, code: <><span className="text-green-400 pl-4">stack</span><span className="text-white">: [</span></> },
                                    { ln: 7, code: <><span className="text-orange-300 pl-8">&apos;Laravel&apos;</span><span className="text-white">,</span> <span className="text-orange-300">&apos;React&apos;</span><span className="text-white">,</span></> },
                                    { ln: 8, code: <><span className="text-orange-300 pl-8">&apos;Next.js&apos;</span><span className="text-white">,</span> <span className="text-orange-300">&apos;Astro&apos;</span><span className="text-white">,</span></> },
                                    { ln: 9, code: <><span className="text-white pl-4">],</span></> },
                                    { ln: 10, code: <><span className="text-green-400 pl-4">projects</span><span className="text-white">:</span> <span className="text-purple-400">6</span><span className="text-slate-500">, <span className="text-slate-400 italic">// all in production</span></span></> },
                                    { ln: 11, code: <><span className="text-green-400 pl-4">status</span><span className="text-white">:</span> <span className="text-orange-300">&apos;Available ✓&apos;</span><span className="text-white">,</span></> },
                                    { ln: 12, code: <><span className="text-yellow-300">{"}"}</span><span className="text-white">;</span></> },
                                    { ln: 13, code: <></> },
                                    { ln: 14, code: <><span className="text-blue-400">export default</span> <span className="text-cyan-300">developer</span><span className="text-white">;</span></> },
                                    { ln: 15, code: <></> },
                                ].map(({ ln, code }) => (
                                    <div key={ln} className="flex hover:bg-white/[0.03] transition-colors group">
                                        <span className="w-10 text-right pr-4 text-slate-600 select-none flex-shrink-0 group-hover:text-slate-500 transition-colors">{ln}</span>
                                        <span className="flex-1 pr-6">{code}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Status bar */}
                            <div className="flex items-center justify-between px-4 py-1.5 bg-blue-600 text-white text-[10px] font-mono">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                        TypeScript
                                    </span>
                                    <span className="text-blue-200">Ln 14, Col 28</span>
                                </div>
                                <div className="flex items-center gap-3 text-blue-200">
                                    <span>UTF-8</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-12 flex justify-start pl-0">
                    <button
                        onClick={() => scrollTo("#about")}
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors group text-sm"
                    >
                        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
                        <span className="w-8 h-px bg-slate-300 group-hover:bg-blue-400 transition-colors" />
                        <span className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-blue-400 flex items-center justify-center transition-colors">
                            <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-500 animate-bounce" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
