import type { Metadata } from "next";
import {Urbanist, Space_Grotesk} from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
    subsets: ["latin"],
    variable: "--font-urbanist",
    weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "Soa Mariaka | Développeuse Front-end",
    description: "Développeuse Front-end passionnée par l'UX, spécialisée dans la création d'interfaces fluides et performantes.",
    keywords: ["Soa Mariaka", "Développeur Front-end", "React", "Next.js", "React Native", "Madagascar", "UX Design"],

    icons: {
        icon: "/icon.png",
        apple: "/icon.png",
    },

    openGraph: {
        title: "Soa Mariaka | Développeuse Front-end",
        description: "Conception d'interfaces intuitives et développement d'applications web et mobiles performantes.",
        url: "https://portfolio.com",
        siteName: "Portfolio Soa Mariaka",
        images: [
            {
                url: "/icon.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body
            className={`${urbanist.variable} ${spaceGrotesk.variable} antialiased bg-brand-bg text-brand-text`}
        >
            {children}
        </body>
        </html>
    );
}