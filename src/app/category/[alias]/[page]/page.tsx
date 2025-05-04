import { getCategoryByAlias } from "@/apis/category";
import {
    Stack,
    UnstyledButton,
    Group,
    Box,
    Text,
    Tooltip,
    Alert,
} from "@mantine/core";
import { Props } from "./layout";
import Link from "next/link";
import Image from "next/image";
import { getArticleListByAlias } from "@/apis/article";
import { notFound } from "next/navigation";
import Pagination from "@/components/Category/Pagination";
import ErrorComponent from "@/components/ErrorComponent";
import { IconInfoCircle } from "@tabler/icons-react";
import Carousel from "@/components/Category/Carousel";

// import ErrorComponent from "@/components/ErrorComponent";

export default async function Category({ params }: Props) {
    const { alias, page } = await params;
    const category = await getCategoryByAlias(alias);
    if (category.code !== 200) {
        return <ErrorComponent title="获取分类失败" error={category.message} />;
    }

    const p = parseInt(page, 10);

    // 检查页码是否有效
    if (isNaN(p)) notFound();

    const articleList = await getArticleListByAlias(category.data.alias, {
        page: p,
        pageSize: process.env.BASE_PAGE_SIZE
            ? parseInt(process.env.BASE_PAGE_SIZE, 10)
            : 10,
    });

    if (articleList.code !== 200) {
        return (
            <ErrorComponent
                title="获取文章列表失败"
                error={articleList.message}
            />
        );
    }

    return (
        <Stack>
            <Stack
                component="ul"
                w={"100%"}
                justify="space-between"
                p={0}
                m={0}
                className="list-none"
            >
                {articleList.data.total === 0 ? (
                    <Alert
                        variant="light"
                        color="blue"
                        title="暂无内容"
                        icon={<IconInfoCircle />}
                    ></Alert>
                ) : null}
                {articleList.data.rows.map((item) => {
                    return (
                        <Box
                            key={item.id}
                            component="li"
                            w={"100%"}
                            h={308}
                            bg={"#fff"}
                        >
                            <Group
                                justify="space-between"
                                align="center"
                                h={"100%"}
                                gap={25}
                                px={50}
                            >
                                {item.images.length > 0 ? (
                                    item.images.length > 1 ? (
                                        <Carousel
                                            width={293}
                                            height={220}
                                            images={item.images}
                                        />
                                    ) : (
                                        <Image
                                            // radius="md"
                                            // component={Image}
                                            // src={`https://dummyimage.com/293x220/000000/ffffff&text=logo`}
                                            src={`/api/common/image/download/${item.images[0].id}`}
                                            alt="Logo"
                                            priority
                                            width={293}
                                            height={220}
                                            // w={293}
                                            // h={220}
                                            className="w-[293px] h-[220px] rounded-md object-cover"
                                        />
                                    )
                                ) : null}
                                <UnstyledButton
                                    w={
                                        item.images.length > 0
                                            ? "calc(100% - 308px - 25px)"
                                            : "100%"
                                    }
                                    h={220}
                                    component={Link}
                                    href={`/article/${item.id}`}
                                    target="_blank"
                                    fz={14}
                                >
                                    <Stack
                                        w={"100%"}
                                        h={"100%"}
                                        justify="space-between"
                                    >
                                        <Stack w={"100%"} h={"100%"}>
                                            <Tooltip
                                                withArrow
                                                label={item.title}
                                                position="top-start"
                                            >
                                                <Text
                                                    component="h3"
                                                    fz={24}
                                                    fw={"bold"}
                                                    c={"#383838"}
                                                    lineClamp={2}
                                                >
                                                    {item.title}
                                                </Text>
                                            </Tooltip>
                                            <Text
                                                fz={16}
                                                c={"#636363"}
                                                lineClamp={3}
                                            >
                                                {item.description}
                                            </Text>
                                        </Stack>
                                        <Group
                                            justify="space-between"
                                            align="center"
                                        >
                                            <Text
                                                component="time"
                                                fz={16}
                                                c={"#9b9b9b"}
                                                fw={"bold"}
                                            >
                                                {item.createdAt}
                                            </Text>
                                        </Group>
                                    </Stack>
                                </UnstyledButton>
                            </Group>
                        </Box>
                    );
                })}

                {/* <Card component="li" w={"100%"} h={308} radius="md" shadow="md">
                <UnstyledButton
                    component={Link}
                    href={`/products/article/`}
                    target="_blank"
                    fz={14}
                >
                    产品1
                </UnstyledButton>
            </Card> */}
            </Stack>
            <Pagination articleList={articleList} page={p} />
        </Stack>
    );
}
