import { getArticleListByAlias } from "@/apis/article";
import { Category } from "@/apis/category/types";
import {
    Text,
    Center,
    Group,
    Stack,
    Flex,
    UnstyledButton,
    Card,
    Image as Img,
    Button,
    Alert,
} from "@mantine/core";
import {
    IconArrowRight,
    IconBrandProducthunt,
    IconDatabaseOff,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export interface ProductCenterProps {
    categoryAlias: Category["alias"];
}

const ProductCenter: React.FC<ProductCenterProps> = async ({
    categoryAlias,
}) => {
    const articleList = await getArticleListByAlias(categoryAlias, {
        page: 1,
        pageSize: 4,
    });
    return (
        <Center w={"100%"} h={"auto"} bg={"#eee"}>
            <Stack w={1200} h={"100%"} gap={50} py={100}>
                <Group w={"100%"} h={54} justify="space-between">
                    <Text component="h2" fz={36} fw={"bold"}>
                        产品中心
                    </Text>
                    <Text component="h3" fz={36}>
                        Product Center
                    </Text>
                </Group>
                <Group gap={50} h={"auto"}>
                    {articleList.code === 200 && articleList.data.total ? (
                        <Flex
                            component="ul"
                            w={"100%"}
                            h={"100%"}
                            p={0}
                            m={0}
                            justify={"space-between"}
                            wrap={"wrap"}
                            gap={24}
                        >
                            {articleList.data.rows.map((article) => {
                                return (
                                    <Card
                                        key={article.id}
                                        component="li"
                                        w={"calc(50% - 12px)"}
                                        h={205}
                                        shadow="sm"
                                        radius="md"
                                        padding="xl"
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
                                                    <Img
                                                        radius={"md"}
                                                        component={Image}
                                                        width={188}
                                                        height={141}
                                                        src={`/api/common/image/download/${article.images[0].id}`}
                                                        alt={"Product Image"}
                                                        fit="cover"
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
                                                gap={20}
                                            >
                                                <Text
                                                    component="h3"
                                                    size="lg"
                                                    fw={"bold"}
                                                    c={"#4E4E4E"}
                                                >
                                                    {article.title}
                                                </Text>
                                                <Text
                                                    w={"100%"}
                                                    size="sm"
                                                    c={"#A2A2A2"}
                                                    lineClamp={4}
                                                >
                                                    {article.description}
                                                </Text>
                                            </Stack>
                                        </UnstyledButton>
                                    </Card>
                                );
                            })}
                        </Flex>
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

export default ProductCenter;
