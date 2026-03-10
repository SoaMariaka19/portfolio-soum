import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="bg-brand-bg text-brand-text">
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Philosophy />
            <Contact />
            <footer className="py-10 text-center text-xs text-brand-muted uppercase tracking-widest opacity-50">
                © 2026 Soa Mariaka RAKOTOMALALA • Conçu avec passion ❤️
            </footer>
        </main>
    );
}