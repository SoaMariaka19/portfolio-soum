"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-32 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-b from-brand-electric/10 to-transparent border border-brand-electric/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
            >
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-electric/10 blur-[80px] rounded-full"></div>

                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter relative z-10">
                    ÉCHANGEONS <span className="text-brand-electric">ENSEMBLE</span>
                </h2>
                <p className="text-lg text-brand-muted mb-10 max-w-xl mx-auto leading-relaxed relative z-10">
                    Je suis toujours ravie de discuter de l'écosystème tech, de partager des retours d'expérience ou d'échanger sur des collaborations passionnantes.
                </p>
                <a
                    href="mailto:soamariakarakotomalala@gmail.com"
                    className="inline-block px-10 py-5 bg-brand-electric text-brand-bg font-black rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,255,255,0.3)] relative z-10"
                >
                    ME CONTACTER
                </a>
            </motion.div>
        </section>
    );
}