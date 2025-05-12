import { getArticleListByAlias } from "@/apis/article";
import { Category } from "@/apis/category/types";
import {
    Text,
    Center,
    Group,
    Stack,
    Flex,
    UnstyledButton,
    Button,
    Alert,
    Pill,
    Tooltip,
} from "@mantine/core";
import {
    IconArrowRight,
    IconBrandProducthunt,
    IconClockHour3Filled,
    IconDatabaseOff,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../Category/Carousel";

export interface NewsCenterProps {
    categoryAlias: Category["alias"];
}

const NewsCenter: React.FC<NewsCenterProps> = async ({ categoryAlias }) => {
    const articleList = await getArticleListByAlias(categoryAlias, {
        page: 1,
        pageSize: 4,
    });
    return (
        <Center w={"100%"} h={"auto"} bg={"#fff"}>
            <Stack w={1200} h={"100%"} gap={50} py={100}>
                <Group w={"100%"} h={54} justify="space-between">
                    <Text component="h2" fz={36} fw={"bold"}>
                        新闻中心
                    </Text>
                    <Text component="h3" fz={36}>
                        News Center
                    </Text>
                </Group>
                <Group gap={50} h={"auto"} align="start">
                    {articleList.code === 200 && articleList.data.total ? (
                        <>
                            {articleList.data.rows[0].images.length ? (
                                <Stack w={373} h={"100%"}>
                                    {articleList.data.rows[0].images.length ? (
                                        articleList.data.rows[0].images.length >
                                        1 ? (
                                            <Carousel
                                                width={373}
                                                height={279}
                                                images={
                                                    articleList.data.rows[0]
                                                        .images
                                                }
                                            />
                                        ) : (
                                            <Image
                                                src={`/api/common/image/download/${articleList.data.rows[0].images[0].id}`}
                                                alt="Logo"
                                                priority
                                                width={373}
                                                height={279}
                                                className="w-[373px] h-[279px] rounded-md object-cover"
                                            />
                                        )
                                    ) : null}

                                    <UnstyledButton
                                        component={Link}
                                        href={`/article/${articleList.data.rows[0].id}`}
                                        target="_blank"
                                        w={"100%"}
                                        h={"100%"}
                                        className="flex items-center gap-6"
                                    >
                                        <Stack w={"100%"} h={"100%"} gap={10}>
                                            <Tooltip
                                                withArrow
                                                label={
                                                    articleList.data.rows[0]
                                                        .title
                                                }
                                                position="top-start"
                                            >
                                                <Text
                                                    component="h3"
                                                    fz={20}
                                                    fw={"bold"}
                                                    c={"#383838"}
                                                    lineClamp={2}
                                                >
                                                    {
                                                        articleList.data.rows[0]
                                                            .title
                                                    }
                                                </Text>
                                            </Tooltip>
                                            <Group
                                                justify="space-between"
                                                align="center"
                                            >
                                                <Group gap={5}>
                                                    <IconClockHour3Filled
                                                        color={"#9b9b9b"}
                                                        size={16}
                                                    />
                                                    <Text
                                                        component="time"
                                                        fz={14}
                                                        c={"#9b9b9b"}
                                                        fw={"bold"}
                                                    >
                                                        {
                                                            articleList.data
                                                                .rows[0]
                                                                .createdAt
                                                        }
                                                    </Text>
                                                </Group>
                                                {articleList.data.rows[0].tags
                                                    .length ? (
                                                    <Group gap={8}>
                                                        {articleList.data.rows[0].tags.map(
                                                            (tag) => {
                                                                return (
                                                                    <Pill
                                                                        key={
                                                                            tag.id
                                                                        }
                                                                    >
                                                                        {
                                                                            tag.name
                                                                        }
                                                                    </Pill>
                                                                );
                                                            }
                                                        )}
                                                    </Group>
                                                ) : null}
                                            </Group>
                                            <Text
                                                fz={"sm"}
                                                c={"#A2A2A2"}
                                                lineClamp={3}
                                            >
                                                {
                                                    articleList.data.rows[0]
                                                        .description
                                                }
                                            </Text>
                                        </Stack>
                                    </UnstyledButton>
                                </Stack>
                            ) : null}

                            <Stack
                                component="ul"
                                w={
                                    articleList.data.rows[0].images.length
                                        ? "calc(100% - 373px - 50px)"
                                        : "100%"
                                }
                                h={"100%"}
                                p={0}
                                m={0}
                                justify={"space-between"}
                                gap={24}
                            >
                                {(articleList.data.rows[0].images.length
                                    ? articleList.data.rows.splice(
                                          1,
                                          articleList.data.rows.length
                                      )
                                    : articleList.data.rows
                                ).map((article) => {
                                    return (
                                        <Stack
                                            key={article.id}
                                            component="li"
                                            w={"100%"}
                                            h={"auto"}
                                        >
                                            <UnstyledButton
                                                component={Link}
                                                href={`/article/${article.id}`}
                                                target="_blank"
                                                w={"100%"}
                                                h={"100%"}
                                                className="flex items-center gap-6"
                                            >
                                                {article.images.length ? (
                                                    <Flex
                                                        w={188}
                                                        h={141}
                                                        justify={"center"}
                                                        align={"center"}
                                                    >
                                                        <Image
                                                            src={`/api/common/image/download/${article.images[0].id}`}
                                                            alt="Logo"
                                                            priority
                                                            width={188}
                                                            height={141}
                                                            className="w-[188px] h-[141px] rounded-md object-cover"
                                                        />
                                                    </Flex>
                                                ) : null}

                                                <Stack
                                                    w={
                                                        article.images.length
                                                            ? "calc(100% - 188px - 24px)"
                                                            : "100%"
                                                    }
                                                    h={"100%"}
                                                    justify="start"
                                                    gap={10}
                                                >
                                                    {/* <Text
                                                        component="h3"
                                                        size="lg"
                                                        fw={"bold"}
                                                        c={"#4E4E4E"}
                                                    >
                                                        {article.title}
                                                    </Text> */}
                                                    <Tooltip
                                                        withArrow
                                                        label={article.title}
                                                        position="top-start"
                                                    >
                                                        <Text
                                                            component="h3"
                                                            fz={20}
                                                            fw={"bold"}
                                                            c={"#383838"}
                                                            lineClamp={1}
                                                        >
                                                            {article.title}
                                                        </Text>
                                                    </Tooltip>
                                                    <Group
                                                        justify="space-between"
                                                        align="center"
                                                    >
                                                        <Group gap={5}>
                                                            <IconClockHour3Filled
                                                                color={
                                                                    "#9b9b9b"
                                                                }
                                                                size={16}
                                                            />
                                                            <Text
                                                                component="time"
                                                                fz={14}
                                                                c={"#9b9b9b"}
                                                                fw={"bold"}
                                                            >
                                                                {
                                                                    articleList
                                                                        .data
                                                                        .rows[0]
                                                                        .createdAt
                                                                }
                                                            </Text>
                                                        </Group>
                                                        {article.tags.length ? (
                                                            <Group gap={8}>
                                                                {article.tags.map(
                                                                    (tag) => {
                                                                        return (
                                                                            <Pill
                                                                                key={
                                                                                    tag.id
                                                                                }
                                                                            >
                                                                                {
                                                                                    tag.name
                                                                                }
                                                                            </Pill>
                                                                        );
                                                                    }
                                                                )}
                                                            </Group>
                                                        ) : null}
                                                    </Group>
                                                    <Text
                                                        w={"100%"}
                                                        size="sm"
                                                        c={"#A2A2A2"}
                                                        lineClamp={3}
                                                    >
                                                        {article.description}
                                                    </Text>
                                                </Stack>
                                            </UnstyledButton>
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </>
                    ) : (
                        <Alert
                            variant="light"
                            color="gray"
                            title="没有数据"
                            icon={<IconDatabaseOff />}
                            w={"100%"}
                        >
                            暂无内容
                        </Alert>
                    )}
                    {articleList.code === 200 && articleList.data.total > 4 ? (
                        <Center w={"100%"}>
                            <Button
                                variant="light"
                                component={Link}
                                leftSection={<IconBrandProducthunt size={14} />}
                                rightSection={<IconArrowRight size={14} />}
                                href={`/category/${categoryAlias}`}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                查看更多
                            </Button>
                        </Center>
                    ) : null}
                </Group>
            </Stack>
        </Center>
    );
};

export default NewsCenter;
