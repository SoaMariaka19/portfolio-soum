"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen, FiCalendar, FiArrowRight } from "react-icons/fi";

const experiences = [
    {
        company: "ICHTUS IT",
        role: "Développeuse Front-end",
        period: "Mai 2025 - Présent",
        description: [
            "Architecture intégrale du back-office 'Pick & Cheers' (Next.js) : conception UI et intégration API sans maquette préalable.",
            "Maintenance critique et migration d'applications (AMF'naka, Eatzee, Teny zaraina) vers les SDK 50 à 54 d'Expo.",
            "Optimisation de l'expérience utilisateur et refonte visuelle pour Holy App.",
            "Prototypage fonctionnel sous Flutter pour valider les flux métiers avant intégration backend."
        ],
        tags: ["Next.js", "React Native", "Flutter", "Agile"]
    },
    {
        company: "Épique.mg",
        role: "Développeuse Front-end (Stage)",
        period: "Août - Octobre 2024",
        description: [
            "Conception sur Figma et développement de l'interface d'une plateforme de modération.",
            "Création de nouvelles fonctionnalités UI centrées sur l'efficacité des utilisateurs finaux."
        ],
        tags: ["Figma", "React", "UI/UX", "Teamwork"]
    }
];

const education = [
    {
        school: "Haute École d'Informatique (HEI)",
        degree: "Licence en Mathématiques Appliquées et Informatique",
        period: "2021 - 2024",
        focus: "Algorithmique, Génie Logiciel et Développement Web."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="max-w-7xl mx-auto px-6 py-32 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                    MON <span className="text-brand-electric text-stroke">PARCOURS</span>
                </h2>
                <div className="h-1 w-20 bg-brand-electric mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                <div className="lg:col-span-2 space-y-12 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand-electric via-white/10 to-transparent ml-[11px] hidden md:block"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-0 md:pl-12 group"
                        >
                            <div className="absolute left-0 top-2 w-6 h-6 bg-brand-bg border-2 border-brand-electric rounded-full z-10 hidden md:flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                                <div className="w-2 h-2 bg-brand-electric rounded-full animate-pulse"></div>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.07] hover:border-brand-electric/30 transition-all duration-500 shadow-xl group-hover:shadow-brand-electric/5">
                                <div className="flex flex-col md:flex-row md:justify-between mb-6 gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 text-brand-electric mb-2">
                                            <FiBriefcase size={16} />
                                            <span className="text-xs font-bold uppercase tracking-widest">{exp.company}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                                    </div>
                                    <div className="flex flex-col md:items-end text-brand-muted text-sm font-mono">
                                        <span className="flex items-center gap-2"><FiCalendar /> {exp.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-brand-muted text-sm leading-relaxed flex gap-3">
                                            <FiArrowRight className="text-brand-electric mt-1 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-brand-electric/10 border border-brand-electric/20 rounded-full text-[10px] font-bold text-brand-electric uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-electric text-brand-bg p-8 rounded-[2.5rem] shadow-2xl shadow-brand-electric/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FiBookOpen size={24} className="opacity-80" />
                            <h3 className="text-xl font-black uppercase tracking-tight">Formation</h3>
                        </div>
                        {education.map((edu, i) => (
                            <div key={i}>
                                <p className="text-xs font-bold opacity-70 mb-1">{edu.period}</p>
                                <h4 className="font-bold text-lg leading-tight mb-2">{edu.degree}</h4>
                                <p className="text-sm font-medium mb-4">{edu.school}</p>
                                <p className="text-xs leading-relaxed opacity-80 border-t border-brand-bg/20 pt-4">
                                    Spécialisation en {edu.focus}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    <div className="p-8 border border-white/10 rounded-[2.5rem] bg-white/5">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            Engagement & Vision
                        </h4>
                        <p className="text-sm text-brand-muted leading-relaxed">
                            Agile et orientée solution, je m'adapte aux défis technologiques pour livrer des produits alliant esthétique et performance utilisateur.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}