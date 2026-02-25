"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Proyek", href: "#projects" },
    { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const ids = navLinks.map(l => l.href.replace("#", "")).reverse();
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.button
                    onClick={() => scrollTo("#hero")}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-bold text-xl text-blue-600 tracking-tight"
                >
                    Fahmi.
                </motion.button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <motion.button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className={`text-sm font-medium transition-colors duration-200 relative group ${isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-800"
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded-full transition-all duration-200 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </motion.button>
                        );
                    })}
                    <motion.button
                        onClick={() => scrollTo("#contact")}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md shadow-blue-200"
                    >
                        Hire Me
                    </motion.button>
                </nav>

                {/* Mobile Hamburger */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setMenuOpen(v => !v)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-slate-800 rounded-full origin-center" />
                    <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-slate-800 rounded-full" />
                    <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-slate-800 rounded-full origin-center" />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-white border-t border-blue-100"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-1">
                            {navLinks.map(link => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className={`text-left text-sm font-medium py-3 border-b border-slate-100 last:border-0 transition-colors ${activeSection === link.href.replace("#", "") ? "text-blue-600" : "text-slate-500"
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="mt-3 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full text-center hover:bg-blue-700 transition-colors"
                            >
                                Hire Me
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
