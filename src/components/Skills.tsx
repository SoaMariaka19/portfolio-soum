"use client";
import { motion } from "framer-motion";
import { SiNextdotjs, SiFigma, SiFlutter } from "react-icons/si";
import { FiDatabase, FiSend } from "react-icons/fi";

const skills = [
    {
        title: "Next.js & Architecture",
        description: "Conception intégrale de back-offices complexes sans maquette préalable, avec une optimisation poussée de l'UX.",
        icon: <SiNextdotjs className="text-white text-3xl" />,
        className: "md:col-span-2 md:row-span-2 bg-white/5 border-white/10",
        tag: "CORE TECH"
    },
    {
        title: "Écosystème Mobile",
        description: "Migrations critiques React Native (SDK 50 à 54) et prototypage fonctionnel avec Flutter.",
        icon: <SiFlutter className="text-white text-3xl" />,
        className: "md:col-span-2 bg-white/5 border-white/10",
        tag: "EXPERTISE"
    },
    {
        title: "Design UI/UX",
        description: "Utilisation de Figma pour transformer des concepts métiers en interfaces visuellement cohérentes.",
        icon: <SiFigma className="text-[#F24E1E] text-3xl" />,
        className: "md:col-span-1 bg-white/5 border-white/10",
        tag: "DESIGN"
    },
    {
        title: "Backend & Data",
        description: "Intégration d'API REST via Swagger et gestion de bases de données PostgreSQL/MySQL.",
        icon: <FiDatabase className="text-blue-400 text-3xl" />,
        className: "md:col-span-1 bg-white/5 border-white/10",
        tag: "WORKFLOW"
    },
    {
        title: "Agilité & Méthodes",
        description: "Utilisation du versioning Git/GitHub et des workflows Agile pour une collaboration d'équipe fluide.",
        icon: <FiSend className="text-orange-500 text-3xl" />,
        className: "md:col-span-2 bg-white/5 border-white/10",
        tag: "SOFT SKILLS"
    },
];

export default function Skills() {
    return (
        <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                    MON <span className="text-brand-electric">SAVOIR-FAIRE</span>
                </h2>
                <p className="text-brand-muted mt-4 max-w-xl text-lg leading-relaxed">
                    Une approche centrée sur l'utilisateur et l'efficacité technique pour bâtir des solutions performantes.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, borderColor: "rgba(0, 255, 255, 0.2)" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-6 md:p-8 rounded-[2rem] border backdrop-blur-sm flex flex-col justify-between min-h-[200px] relative overflow-hidden group ${skill.className}`}
                    >
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1 rounded-full">
                                    {skill.tag}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
                            <p className="text-sm text-brand-muted leading-relaxed">
                                {skill.description}
                            </p>
                        </div>

                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-electric/5 blur-[50px] rounded-full group-hover:bg-brand-electric/10 transition-colors"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}