"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                 style={{ backgroundImage: 'radial-gradient(#00ffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-electric/30 bg-brand-electric/5 text-brand-electric text-xs font-bold uppercase tracking-widest"
                    >
                        ✨ Ouverte à l'échange et aux collaborations
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tight text-white">
                        Soa Mariaka <br />
                        <span className="text-brand-electric">RAKOTOMALALA</span>
                    </h1>

                    <p className="text-lg text-brand-muted mb-10 max-w-lg leading-relaxed">
                        Développeuse Front-end passionnée par l'UX. Je transforme les concepts et les besoins métiers en interfaces fluides et intuitives.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <a
                            href="mailto:soamariakarakotomalala@gmail.com"
                            className="px-8 py-4 bg-brand-electric text-brand-bg font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(0,255,255,0.3)]"
                        >
                            Me contacter
                        </a>

                        <a
                            href="/CV - Soa Mariaka RAKOTOMALALA.pdf"
                            target="_blank"
                            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
                        >
                            <FiDownload /> CV
                        </a>

                        <div className="flex gap-3 ml-2">
                            <a
                                href="https://github.com/SoaMariaka19"
                                target="_blank"
                                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:text-brand-electric hover:border-brand-electric/50 transition-all text-white"
                                title="GitHub"
                            >
                                <FiGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/soa-mariaka-rakotomalala-42a30a278"
                                target="_blank"
                                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:text-brand-electric hover:border-brand-electric/50 transition-all text-white"
                                title="LinkedIn"
                            >
                                <FiLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-brand-electric rounded-full blur-[80px] opacity-10 animate-pulse"></div>
                        <div className="absolute -inset-4 border border-brand-electric/20 rounded-full animate-[spin_10s_linear_infinite]"></div>

                        <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-brand-electric/20 bg-brand-bg shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <Image
                                src="/profile.png"
                                alt="Soa Mariaka RAKOTOMALALA"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}