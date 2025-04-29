import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import "@mantine/code-highlight/styles.css";
import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from "@mantine/core";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: `%s｜${process.env.TITLE}`,
        default: process.env.TITLE || "cms",
    },
    description: process.env.DESCRIPTION,
};

export const viewport: Viewport = {
    viewportFit: "cover",
    width: "device-width",
    initialScale: 0.3,
    maximumScale: 0.3,
    minimumScale: 0.3,
    userScalable: false,
};

export const revalidate = 60;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <MantineProvider
                // theme={{
                //     primaryColor: "violet",
                // }}
                >
                    <Nav />
                    {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    );
}
