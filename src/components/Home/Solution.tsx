import { getArticleListByAlias } from "@/apis/article";
import { Category } from "@/apis/category/types";
import {
    Text,
    Center,
    Group,
    Stack,
    UnstyledButton,
    Image as Img,
    Button,
    Box,
} from "@mantine/core";
import { IconArrowBigRightLines, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import solutionBg from "@/assets/images/solution_bg.png";

export interface SolutionProps {
    categoryAlias: Category["alias"];
}

const Solution: React.FC<SolutionProps> = async ({ categoryAlias }) => {
    const articleList = await getArticleListByAlias(categoryAlias, {
        page: 1,
        pageSize: 4,
    });
    return (
        <Center
            w={"100%"}
            h={"auto"}
            style={{
                background: `url(${solutionBg.src}) no-repeat top center #f7f7f7`,
            }}
        >
            <Stack w={1200} h={"100%"} gap={50} py={100}>
                <Group w={"100%"} h={54} justify="space-between">
                    <Text component="h2" fz={36} fw={"bold"} c={"#fff"}>
                        解决方案
                    </Text>
                    <Text component="h3" fz={36} c={"#fff"}>
                        Solution
                    </Text>
                </Group>
                <Group gap={50} h={"auto"}>
                    <Stack w={"100%"} h={"100%"} p={0} m={0} gap={0}>
                        {articleList.code === 200 && articleList.data.total
                            ? articleList.data.rows.map((article, index) => {
                                  return (
                                      <Group
                                          key={article.id}
                                          component="li"
                                          w={"100%"}
                                          h={169}
                                          className={
                                              index === 0 || index === 1
                                                  ? "bg-[#00A6AC]/90 hover:bg-[#008B8F] active:bg-[#006F73]"
                                                  : "hover:bg-gray-200 active:bg-gray-300"
                                          }
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
                                                  <Box w={300} h={169}>
                                                      <Img
                                                          component={Image}
                                                          width={300}
                                                          height={169}
                                                          src={`/api/common/image/download/${article.images[0].id}`}
                                                          alt={"Solution Image"}
                                                          fit="cover"
                                                      />
                                                  </Box>
                                              ) : null}
                                              <Stack
                                                  w={
                                                      article.images.length
                                                          ? "calc(100% - 300px - 24px)"
                                                          : "100%"
                                                  }
                                                  h={"100%"}
                                                  justify="start"
                                                  gap={20}
                                                  py={20}
                                                  px={20}
                                              >
                                                  <Text
                                                      component="h3"
                                                      size="lg"
                                                      fw={"bold"}
                                                      c={
                                                          index === 0 ||
                                                          index === 1
                                                              ? "#fff"
                                                              : "#000"
                                                      }
                                                  >
                                                      {article.title}
                                                  </Text>
                                                  <Text
                                                      w={"100%"}
                                                      size="sm"
                                                      c={
                                                          index === 0 ||
                                                          index === 1
                                                              ? "#fff"
                                                              : "#000"
                                                      }
                                                      opacity={0.8}
                                                      lineClamp={2}
                                                  >
                                                      {article.description}
                                                  </Text>
                                                  <Group
                                                      justify="flex-end"
                                                      gap={6}
                                                  >
                                                      <Text
                                                          size="sm"
                                                          c={
                                                              index === 0 ||
                                                              index === 1
                                                                  ? "#fff"
                                                                  : "#000"
                                                          }
                                                          opacity={0.8}
                                                      >
                                                          了解更多
                                                      </Text>
                                                      <IconArrowBigRightLines
                                                          opacity={0.8}
                                                          color={
                                                              index === 0 ||
                                                              index === 1
                                                                  ? "#fff"
                                                                  : "#000"
                                                          }
                                                      />
                                                  </Group>

                                                  {/* {index === 0 || index === 1 ? (
                                        <Image
                                            className="ml-[33px] mt-[40px]"
                                            src={Fangan}
                                            alt="Fangan"
                                        />
                                    ) : (
                                        <Image
                                            className="ml-[33px] mt-[40px]"
                                            src={FanganBlack}
                                            alt="FanganBlack"
                                        />
                                    )} */}
                                              </Stack>
                                          </UnstyledButton>
                                      </Group>
                                  );
                              })
                            : null}
                    </Stack>
                    {articleList.code === 200 && articleList.data.total > 4 ? (
                        <Center w={"100%"}>
                            <Button
                                variant="light"
                                component={Link}
                                rightSection={<IconArrowRight size={14} />}
                                href={`/category/${categoryAlias}`}
                                target="_blank"
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

export default Solution;
