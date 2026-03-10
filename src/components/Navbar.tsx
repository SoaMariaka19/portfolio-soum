"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 p-5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 group cursor-pointer"
                >
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-electric/20 group-hover:border-brand-electric transition-all duration-300">
                        <Image
                            src="/icon.png"
                            alt="Logo"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <span className="text-lg font-black tracking-tighter text-white group-hover:text-brand-electric transition-colors uppercase">
                        Soa <span className="text-brand-electric">Mariaka</span>
                    </span>
                </motion.a>

                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-brand-muted">
                        <a href="#skills" className="hover:text-brand-electric transition-colors">Skills</a>
                        <a href="#experience" className="hover:text-brand-electric transition-colors">Parcours</a>
                    </div>

                    <div className="flex items-center gap-5 border-l border-white/10 pl-8">
                        <a href="https://github.com/SoaMariaka19" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-electric transition-colors">
                            <FiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/soa-mariaka-rakotomalala-42a30a278" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-electric transition-colors">
                            <FiLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}