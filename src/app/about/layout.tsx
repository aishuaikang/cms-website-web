import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "关于我们",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
