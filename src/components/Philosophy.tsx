"use client";
import { motion } from "framer-motion";
import { FiUsers, FiRepeat, FiFeather } from "react-icons/fi";

const values = [
    {
        title: "Empathie Utilisateur",
        text: "Inspirée par les principes de l'UI/UX, je conçois des interfaces où l'esthétique sert l'ergonomie pour garantir une expérience fluide.",
        icon: <FiFeather />,
        color: "from-blue-500/20"
    },
    {
        title: "Collaboration & Agilité",
        text: "J'accorde une importance majeure à l'esprit d'équipe et à la communication pour mener à bien des projets collectifs.",
        icon: <FiUsers />,
        color: "from-brand-electric/20"
    },
    {
        title: "Adaptabilité Technique",
        text: "Curieuse et autonome, je m'adapte avec agilité aux défis technologiques pour livrer des produits performants.",
        icon: <FiRepeat />,
        color: "from-purple-500/20"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Philosophy() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
            >
                {values.map((value, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -12 }}
                        className="relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group transition-all duration-500 hover:border-brand-electric/30"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />

                        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="text-3xl mb-6 p-4 bg-white/5 rounded-2xl text-brand-electric group-hover:scale-110 group-hover:bg-brand-electric group-hover:text-brand-bg transition-all duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{value.title}</h3>
                            <p className="text-brand-muted leading-relaxed text-sm">
                                {value.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}