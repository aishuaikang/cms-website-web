import { DICT_CODE, getDictExtraByCode } from "@/apis/dict";
import { Anchor, Breadcrumbs, Center, Stack, Text } from "@mantine/core";
import type { Metadata } from "next";
import Link from "next/link";
import aboutBg from "@/assets/images/about_bg.png";
export const metadata: Metadata = {
    title: "关于我们",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const title = await getDictExtraByCode(DICT_CODE.TITLE);

    const t =
        title.code === 200 && title.data
            ? title.data
            : process.env.TITLE || "cms";

    const items = [
        { title: t, href: "/" },
        {
            title: "关于我们",
            href: "/about",
        },
    ].map((item, index) => (
        <Anchor component={Link} href={item.href} key={index} size="sm">
            {item.title}
        </Anchor>
    ));
    return (
        <Stack w={"100%"} h={"100%"} gap={"md"} pb={25} bg={"#eee"}>
            <Center
                w={"100%"}
                h={450}
                style={{ backgroundImage: `url(${aboutBg.src})` }}
            >
                <Stack w={1200} h={"100%"} gap={50} justify="center">
                    <Text component="h2" fz={40} fw={"bold"} c={"#383838"}>
                        关于我们
                    </Text>
                    {/* <Text c={"#636363"}> */}
                    {/* {category.data.description || "暂无描述"} */}
                    {/* </Text> */}
                </Stack>
            </Center>
            <Center w={"100%"}>
                <Stack w={1200} h={"100%"} gap={50} justify="center">
                    <Breadcrumbs>{items}</Breadcrumbs>
                </Stack>
            </Center>
            <Center w={"100%"}>
                <Stack w={1200} h={"100%"} gap={50} justify="center">
                    {children}
                </Stack>
            </Center>
        </Stack>
    );
}
