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
import { DICT_CODE, getDictByCode, getDictExtraByCode } from "@/apis/dict";
import { getCategoryList } from "@/apis/category";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
    const title = await getDictExtraByCode(DICT_CODE.TITLE);
    const subtitle = await getDictExtraByCode(DICT_CODE.SUBTITLE);
    const titleConnector = await getDictExtraByCode(DICT_CODE.TITLE_CONNECTOR);

    const t =
        title.code === 200 && title.data
            ? title.data
            : process.env.TITLE || "标题";

    const st =
        subtitle.code === 200 && subtitle.data
            ? subtitle.data
            : process.env.SUBTITLE || "副标题";

    const tc =
        titleConnector.code === 200 && titleConnector.data
            ? titleConnector.data
            : process.env.TITLE_CONNECTOR || " - ";

    return {
        title: {
            template: `%s｜${t + tc + st}`,
            default: t + tc + st,
        },
        description: process.env.DESCRIPTION,
    };
}

export const viewport: Viewport = {
    viewportFit: "cover",
    width: "device-width",
    initialScale: 0.3,
    maximumScale: 0.3,
    minimumScale: 0.3,
    userScalable: false,
};

export const revalidate = 60;

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const categoryList = await getCategoryList();

    const contactPhoneNumber = await getDictExtraByCode(
        DICT_CODE.CONTACT_PHONE_NUMBER
    );

    const logo = await getDictByCode(DICT_CODE.LOGO);

    const title = await getDictExtraByCode(DICT_CODE.TITLE);

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
                    <Nav
                        title={title}
                        logo={logo}
                        categoryList={categoryList}
                        contactPhoneNumber={contactPhoneNumber}
                    />
                    {children}
                    <Footer
                        logo={logo}
                        contactPhoneNumber={contactPhoneNumber}
                    />
                </MantineProvider>
            </body>
        </html>
    );
}
