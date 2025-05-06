import { DICT_CODE, getDictExtraByCode } from "@/apis/dict";
import {
  ActionIcon,
  Box,
  Center,
  Flex,
  Group,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { IconBrandWechat, IconMail } from "@tabler/icons-react";
import Link from "next/link";
// import Wechat from "@/assets/icons/wechat.svg";
// import Email from "@/assets/icons/e-mail.svg";
// import { getWebProductListAction } from "@/app/products/[page]/actions";
// import Link from "next/link";
// import { getWebSolutionListAction } from "@/app/solutions/[page]/actions";
export default async function Footer() {
  const contactPhoneNumber = await getDictExtraByCode(
    DICT_CODE.CONTACT_PHONE_NUMBER,
  );

  const contactWeChat = await getDictExtraByCode(DICT_CODE.CONTACT_WECHAT);
  const contactEmail = await getDictExtraByCode(DICT_CODE.CONTACT_EMAIL);
  const contactNotice = await getDictExtraByCode(DICT_CODE.CONTACT_NOTICE);

  const formData = new FormData();
  formData.append("page", "1");
  formData.append("limit", "4");

  // const res = await getWebProductListAction(formData);

  const formData2 = new FormData();
  formData2.append("page", "1");
  formData2.append("limit", "4");
  // const res2 = await getWebSolutionListAction(formData2);

  const getProducts = () => {
    // if (res.code !== 200) {
    //     return (
    //         <div className="w-full h-[100px] flex justify-center items-center">
    //             <span className="text-[#666666]">{res.msg}</span>
    //         </div>
    //     );
    // }

    // if (!res.data.records.length) {
    //     return (
    //         <div className="w-full h-[100px] flex justify-center items-center">
    //             <span className="text-[#666666]">暂无数据</span>
    //         </div>
    //     );
    // }

    return (
      <Stack
        component="ul"
        w={"100%"}
        h={100}
        align="center"
        justify="space-between"
        p={0}
        m={0}
        className="list-none"
      >
        <Box component="li" c={"#666666"}>
          <UnstyledButton
            component={Link}
            href={`/products/article/`}
            target="_blank"
            fz={14}
          >
            产品1
          </UnstyledButton>
        </Box>

        {/* {res.data.records.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="text-sm text-[#666666] cursor-pointer hover:text-[#00B4BA]"
                        >
                            <Link
                                href={`/products/article/${item.id}`}
                                target="_blank"
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })} */}
      </Stack>
    );
  };

  const getSolutions = () => {
    // if (res2.code !== 200) {
    //     return (
    //         <div className="w-full h-[100px] flex justify-center items-center">
    //             <span className="text-[#666666]">{res2.msg}</span>
    //         </div>
    //     );
    // }

    // if (!res2.data.records.length) {
    //     return (
    //         <div className="w-full h-[100px] flex justify-center items-center">
    //             <span className="text-[#666666]">暂无数据</span>
    //         </div>
    //     );
    // }

    return (
      <Stack
        component="ul"
        w={"100%"}
        h={100}
        align="center"
        justify="space-between"
        p={0}
        m={0}
        className="list-none"
      >
        <Box component="li" c={"#666666"}>
          <UnstyledButton
            component={Link}
            href={`/products/article/`}
            target="_blank"
            fz={14}
          >
            产品1
          </UnstyledButton>
        </Box>

        {/* {res2.data.records.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="text-sm text-[#666666] cursor-pointer hover:text-[#00B4BA]"
                        >
                            <Link
                                href={`/solutions/article/${item.id}`}
                                target="_blank"
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })} */}
      </Stack>
    );
  };

  return (
    <Flex
      component="footer"
      w={"100%"}
      h={350}
      bg={"#18181D"}
      justify={"center"}
      align={"center"}
      direction="column"
    >
      <Flex
        w={1200}
        h={"calc(100% - 44px)"}
        justify={"space-between"}
        align={"center"}
      >
        <Box w={862} h={"100%"}>
          <Flex
            w={"100%"}
            h={"100%"}
            justify={"space-between"}
            align={"center"}
            component="ul"
            p={0}
            m={0}
            className="list-none"
          >
            <Flex
              component="li"
              w={200}
              h={"100%"}
              justify={"center"}
              align={"center"}
              direction={"column"}
            >
              <Text c={"white"} fw={"bold"} fz={16} mb={16}>
                产品
              </Text>
              {getProducts()}
            </Flex>
            <Flex
              component="li"
              w={200}
              h={"100%"}
              justify={"center"}
              align={"center"}
              direction={"column"}
            >
              <Text c={"white"} fw={"bold"} fz={16} mb={16}>
                解决方案
              </Text>
              {getSolutions()}
            </Flex>
            <Flex
              component="li"
              w={200}
              h={"100%"}
              justify={"center"}
              align={"center"}
              direction={"column"}
            >
              <Text c={"white"} fw={"bold"} fz={16} mb={16}>
                新闻
              </Text>

              <Stack
                component="ul"
                w={"100%"}
                h={100}
                align="center"
                justify="space-between"
                p={0}
                m={0}
                className="list-none"
              >
                <Box component="li" c={"#666666"}>
                  <UnstyledButton
                    component={Link}
                    href={`/products/article/`}
                    target="_blank"
                    fz={14}
                  >
                    产品1
                  </UnstyledButton>
                </Box>
              </Stack>
            </Flex>
            <Flex
              component="li"
              w={200}
              h={"100%"}
              justify={"center"}
              align={"center"}
              direction={"column"}
            >
              <Text c={"white"} fw={"bold"} fz={16} mb={16}>
                关于我们
              </Text>

              <Stack
                component="ul"
                w={"100%"}
                h={100}
                align="center"
                justify="space-between"
                p={0}
                m={0}
                className="list-none"
              >
                <Box component="li" c={"#666666"}>
                  <UnstyledButton
                    component={Link}
                    href={`/products/article/`}
                    target="_blank"
                    fz={14}
                  >
                    产品1
                  </UnstyledButton>
                </Box>
              </Stack>
            </Flex>
            {/* <Flex
                            component="li"
                            w={200}
                            h={"100%"}
                            justify={"center"}
                            align={"center"}
                            direction={"column"}
                        >
                            <Text c={"white"} fw={"bold"} fz={16} mb={16}>
                                加入我们
                            </Text>

                            <Stack
                                component="ul"
                                w={"100%"}
                                h={100}
                                align="center"
                                justify="space-between"
                                p={0}
                                m={0}
                                className="list-none"
                            >
                                <Box component="li" c={"#666666"}>
                                    <UnstyledButton
                                        component={Link}
                                        href={`/products/article/`}
                                        target="_blank"
                                        fz={14}
                                    >
                                        产品1
                                    </UnstyledButton>
                                </Box>
                            </Stack>
                        </Flex> */}
          </Flex>
        </Box>
        <i className="w-[1px] h-[140px] bg-white/15"></i>
        <Flex
          w={"calc(100% - 862px)"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          direction={"column"}
          gap={"lg"}
        >
          {contactPhoneNumber.code === 200 && contactPhoneNumber.data ? (
            <Center fz={16} c={"#fff"} fw={"bold"}>
              {contactPhoneNumber.data}
            </Center>
          ) : null}

          {contactNotice.code === 200 && contactNotice.data ? (
            <Center fz={14} c={"#666"}>
              {contactNotice.data}
            </Center>
          ) : null}

          <Group w={90} h={"auto"}>
            {contactWeChat.code === 200 && contactWeChat.data ? (
              <Center w={30} h={30}>
                <Tooltip label={contactWeChat.data}>
                  <ActionIcon variant="light" aria-label="Wechat" radius="xl">
                    <IconBrandWechat stroke={2} />
                  </ActionIcon>
                </Tooltip>
              </Center>
            ) : null}

            {contactEmail.code === 200 && contactEmail.data ? (
              <Center w={30} h={30}>
                <Tooltip label={contactEmail.data}>
                  <ActionIcon variant="light" aria-label="Wechat" radius="xl">
                    <IconMail stroke={2} />
                  </ActionIcon>
                </Tooltip>
              </Center>
            ) : null}
          </Group>
        </Flex>
      </Flex>
      {/* className="w-full h-[44px] flex justify-center items-center border-t border-white/15 text-white/30 font-sans text-sm" */}
      <Center
        w={"100%"}
        h={44}
        c={"white"}
        fz={14}
        className="border-t border-white/15"
      >
        xxx有限公司@2019 京ICP备xxxx
      </Center>
    </Flex>
  );
}
