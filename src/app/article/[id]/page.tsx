import { Props } from "./layout";

import { getArticleById, getRelatedArticlesById } from "@/apis/article";

import ErrorComponent from "@/components/ErrorComponent";
import { CodeHighlight } from "@mantine/code-highlight";
import {
    Group,
    Stack,
    TypographyStylesProvider,
    Text,
    Divider,
    Pill,
    UnstyledButton,
    Center,
} from "@mantine/core";
import parse, { Text as T } from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

// import ErrorComponent from "@/components/ErrorComponent";

export default async function Category({ params }: Props) {
    const { id } = await params;

    const article = await getArticleById(id);
    if (article.code !== 200) {
        return (
            <ErrorComponent title="获取文章列表失败" error={article.message} />
        );
    }

    const relatedArticleList = await getRelatedArticlesById(id, {
        page: 1,
        pageSize: process.env.BASE_PAGE_SIZE
            ? parseInt(process.env.BASE_PAGE_SIZE, 10)
            : 10,
    });
    if (relatedArticleList.code !== 200) {
        return (
            <ErrorComponent
                title="获取相关内容列表失败"
                error={relatedArticleList.message}
            />
        );
    }

    const parsedHtml = parse(article.data.content, {
        replace: (domNode) => {
            if (
                domNode.type === "tag" &&
                domNode.name === "pre" &&
                domNode.children &&
                domNode.children[0]?.type === "tag" &&
                domNode.children[0]?.name === "code"
            ) {
                const codeContent =
                    (domNode.children[0].children[0] as T)?.data || "";
                return (
                    <CodeHighlight
                        code={codeContent}
                        language="tsx"
                        className="my-4"
                    />
                );
            }
        },
    });

    return (
        <Group justify="space-between" align="flex-start">
            {/* <div className="w-full h-auto flex flex-col justify-center items-center mb-[100px] mt-9"> */}
            <Stack
                w={"calc(100% - 260px - 16px)"}
                h={"100%"}
                bg={"#fff"}
                p={38}
                gap={16}
            >
                <Stack
                    w={"100%"}
                    h={"auto"}
                    // className="w-full h-auto flex flex-col justify-start items-start border-b border-[#E5E5E5] pb-6 mb-6"
                >
                    <Text component="h1" fz={32} fw={"bold"} c={"#383838"}>
                        {article.data.title}
                    </Text>
                    <Text component="time" fz={16} c={"#9b9b9b"}>
                        {article.data.createdAt}
                    </Text>
                    {/* 标签 */}
                    <Group w={"100%"} gap={8}>
                        {article.data.tags.map((tag) => {
                            return (
                                <Pill key={tag.id} className="cursor-pointer">
                                    {tag.name}
                                </Pill>
                            );
                        })}
                    </Group>
                </Stack>
                <Divider my="xs" />
                <TypographyStylesProvider>
                    {parsedHtml}
                </TypographyStylesProvider>
            </Stack>
            <Stack w={260} bg={"#fff"} p={16}>
                <Stack gap={0}>
                    <Text
                        component="h3"
                        w={"100%"}
                        // h={48}
                        fz={18}
                        fw={"bold"}
                        c={"#383838"}
                    >
                        相关内容
                    </Text>
                    <Divider my="sm" />
                </Stack>

                <Stack w={"100%"} h={"auto"} component="ul" p={0} m={0}>
                    {relatedArticleList.data.rows.map((article) => {
                        return (
                            <Center
                                key={article.id}
                                component="li"
                                w={"100%"}
                                h={"auto"}
                            >
                                <UnstyledButton
                                    w={"100%"}
                                    h={"auto"}
                                    component={Link}
                                    href={`/article/${article.id}`}
                                    target="_blank"
                                    fz={14}
                                    className="w-full h-full flex justify-between items-center"
                                >
                                    {article.images.length > 0 ? (
                                        <Image
                                            src={`/api/common/image/download/${article.images[0].id}`}
                                            alt="Logo"
                                            priority
                                            width={81}
                                            height={68}
                                            className="w-[81px] h-[68px] rounded-md object-cover"
                                        />
                                    ) : null}
                                    <Stack
                                        w={
                                            article.images.length <= 0
                                                ? "100%"
                                                : "calc(100% - 81px - 10px)"
                                        }
                                        h={68}
                                        justify="space-between"
                                    >
                                        <Text
                                            component="h4"
                                            fz={14}
                                            fw={"bold"}
                                            c={"#383838"}
                                            lineClamp={2}
                                        >
                                            {article.title}
                                        </Text>
                                        <Text
                                            component="time"
                                            fz={14}
                                            c={"#636363"}
                                        >
                                            {article.createdAt}
                                        </Text>
                                    </Stack>
                                </UnstyledButton>
                            </Center>
                        );
                    })}
                </Stack>
            </Stack>
            {/* </div> */}
        </Group>
    );
}
