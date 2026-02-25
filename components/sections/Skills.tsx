"use client";

import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiLaravel, SiPhp, SiMysql, SiGit, SiDocker,
    SiJavascript, SiNodedotjs, SiFigma, SiVite,
    SiRedux, SiPostgresql, SiLinux,
} from "react-icons/si";
import AnimatedSection from "@/components/ui/AnimatedSection";

const headingFont = { fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)" };

type Skill = { name: string; icon: React.ComponentType<{ size?: number; className?: string }> };

const row1: Skill[] = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Vite", icon: SiVite },
    { name: "Redux", icon: SiRedux },
    { name: "Figma", icon: SiFigma },
];

const row2: Skill[] = [
    { name: "Laravel", icon: SiLaravel },
    { name: "PHP", icon: SiPhp },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Linux", icon: SiLinux },
];

// Duplicate items for seamless infinite scroll
const doubled1 = [...row1, ...row1];
const doubled2 = [...row2, ...row2];

function SkillChip({ skill }: { skill: Skill }) {
    const Icon = skill.icon;
    return (
        <div className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 bg-white border border-blue-100 rounded-full shadow-sm mx-2 select-none">
            <Icon size={18} className="text-blue-600" />
            <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{skill.name}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" style={{ backgroundColor: "#F8FBFF" }} className="py-28">
            <div className="max-w-6xl mx-auto px-6">

                <AnimatedSection className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-8 bg-blue-600" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Keahlian</span>
                        <div className="h-px w-8 bg-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={headingFont}>
                        Tech Stack yang Saya Kuasai
                    </h2>
                    <p className="text-slate-500 max-w-md mx-auto">
                        Teknologi yang saya gunakan setiap hari untuk membangun produk digital — dari
                        antarmuka hingga infrastruktur.
                    </p>
                </AnimatedSection>

                {/* Marquee rows */}
                <div className="space-y-4 overflow-hidden">

                    {/* Row 1 — scrolls left */}
                    <div className="relative">
                        {/* Edge fade left */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to right, #F8FBFF, transparent)" }} />
                        {/* Edge fade right */}
                        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to left, #F8FBFF, transparent)" }} />
                        <div className="flex animate-marquee-left">
                            {doubled1.map((skill, i) => (
                                <SkillChip key={`r1-${i}`} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2 — scrolls right */}
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to right, #F8FBFF, transparent)" }} />
                        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to left, #F8FBFF, transparent)" }} />
                        <div className="flex animate-marquee-right">
                            {doubled2.map((skill, i) => (
                                <SkillChip key={`r2-${i}`} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Category legend below */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Frontend", desc: "React · Next.js · TypeScript · Tailwind · Vite", dot: "#2563EB" },
                        { title: "Backend", desc: "Laravel · Node.js · PHP · REST API · MySQL", dot: "#0EA5E9" },
                        { title: "DevOps & Tools", desc: "Git · Docker · Linux · Figma · PostgreSQL", dot: "#38BDF8" },
                    ].map(cat => (
                        <div
                            key={cat.title}
                            className="bg-white border border-blue-100 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md hover:shadow-blue-50 transition-all duration-200"
                        >
                            <div className="flex items-center gap-2.5 mb-2">
                                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: cat.dot }} />
                                <h3 className="font-bold text-slate-900 text-sm" style={headingFont}>{cat.title}</h3>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
