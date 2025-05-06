import { getArticleById } from "@/apis/article";
import { getCategoryById } from "@/apis/category";
import { DICT_CODE, getDictExtraByCode } from "@/apis/dict";
import ErrorComponent from "@/components/ErrorComponent";
import { Anchor, Breadcrumbs, Center, Stack, Text } from "@mantine/core";
import type { Metadata } from "next";
import Link from "next/link";

export type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const article = await getArticleById(id);
    if (article.code !== 200) {
        return {
            title: article.message,
        };
    }

    const category = await getCategoryById(article.data.categoryId);
    if (category.code !== 200) {
        return {
            title: category.message,
        };
    }

    return {
        title: article.data.title + "｜" + category.data.name,
    };
}

export default async function RootLayout({
    children,
    params,
}: Readonly<
    Props & {
        children: React.ReactNode;
    }
>) {
    const { id } = await params;
    const article = await getArticleById(id);
    if (article.code !== 200) {
        return (
            <Stack w={"100%"} h={"100%"} gap={"md"} pb={25} bg={"#eee"}>
                <Center w={"100%"} h={450} bg={"#F5F5F5"}>
                    <Stack w={1200} h={"100%"} gap={50} justify="center">
                        <ErrorComponent
                            title="获取文章失败"
                            error={article.message}
                        />
                    </Stack>
                </Center>
            </Stack>
        );
    }

    const category = await getCategoryById(article.data.categoryId);
    if (category.code !== 200) {
        return (
            <Stack w={"100%"} h={"100%"} gap={"md"} pb={25} bg={"#eee"}>
                <Center w={"100%"} h={450} bg={"#F5F5F5"}>
                    <Stack w={1200} h={"100%"} gap={50} justify="center">
                        <ErrorComponent
                            title="获取分类失败"
                            error={category.message}
                        />
                    </Stack>
                </Center>
            </Stack>
        );
    }

    const title = await getDictExtraByCode(DICT_CODE.TITLE);

    const t =
        title.code === 200 && title.data
            ? title.data
            : process.env.TITLE || "cms";

    const items = [
        { title: t, href: "/" },
        { title: category.data.name, href: "/category/" + category.data.alias },
        {
            title: article.data.title,
            href: "/article/" + article.data.id,
        },
    ].map((item, index) => (
        <Anchor component={Link} href={item.href} key={index} size="sm">
            {item.title}
        </Anchor>
    ));

    return (
        <Stack w={"100%"} h={"100%"} gap={"md"} pb={25} bg={"#eee"}>
            <Center w={"100%"} h={450} bg={"#F5F5F5"}>
                <Stack w={1200} h={"100%"} gap={50} justify="center">
                    <Text component="h2" fz={40} fw={"bold"} c={"#383838"}>
                        {category.data.name}
                    </Text>
                    {category.data.description ? (
                        <Text c={"#636363"}>
                            {category.data.description || "暂无描述"}
                        </Text>
                    ) : null}
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
    return children;
}
