"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "down";
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const el = ref.current;
        if (!el) return;

        // Initial hidden state (based on direction)
        const initX = direction === "left" ? -52 : direction === "right" ? 52 : 0;
        const initY = direction === "up" ? 52 : direction === "down" ? -52 : 0;

        gsap.set(el, { opacity: 0, y: initY, x: initX });

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: el,
                start: "top 88%",   // trigger when top of el enters 88% of viewport
                end: "top 10%",     // trigger when top of el reaches 10% (near top)

                // → Scroll DOWN into view: slide in from direction
                onEnter: () =>
                    gsap.to(el, {
                        opacity: 1, y: 0, x: 0,
                        duration: 0.8, delay,
                        ease: "power3.out",
                        overwrite: true,
                    }),

                // → Scroll DOWN past (el exits top of screen): slide up + fade out
                onLeave: () =>
                    gsap.to(el, {
                        opacity: 0, y: -32, x: 0,
                        duration: 0.45,
                        ease: "power2.in",
                        overwrite: true,
                    }),

                // → Scroll UP back into view: slide back in from above
                onEnterBack: () =>
                    gsap.to(el, {
                        opacity: 1, y: 0, x: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        overwrite: true,
                    }),

                // → Scroll UP past (el exits bottom of screen): slide back out downward
                onLeaveBack: () =>
                    gsap.to(el, {
                        opacity: 0, y: initY === 0 ? 32 : initY, x: initX,
                        duration: 0.45,
                        ease: "power2.in",
                        overwrite: true,
                    }),
            });
        }, ref);

        return () => ctx.revert();
    }, [direction, delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
