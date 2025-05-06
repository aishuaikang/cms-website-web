import { DICT_CODE, getDictExtraByCode } from "@/apis/dict";
import { CommonResponse } from "@/apis/types";
import {
    ActionIcon,
    Center,
    Flex,
    Group,
    Stack,
    Text,
    Tooltip,
    UnstyledButton,
    AspectRatio,
} from "@mantine/core";
import { IconBrandWechat, IconMail, IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { Dict } from "@/apis/dict/types";
// import Wechat from "@/assets/icons/wechat.svg";
// import Email from "@/assets/icons/e-mail.svg";
// import { getWebProductListAction } from "@/app/products/[page]/actions";
// import Link from "next/link";
// import { getWebSolutionListAction } from "@/app/solutions/[page]/actions";

export interface FooterProps {
    contactPhoneNumber: CommonResponse<string>;
    logo: CommonResponse<Dict>;
}

const Footer: React.FC<FooterProps> = async ({ contactPhoneNumber, logo }) => {
    const contactWeChat = await getDictExtraByCode(DICT_CODE.CONTACT_WECHAT);
    const contactEmail = await getDictExtraByCode(DICT_CODE.CONTACT_EMAIL);
    const contactNotice = await getDictExtraByCode(DICT_CODE.CONTACT_NOTICE);
    const recordNumber = await getDictExtraByCode(DICT_CODE.RECORD_NUMBER);
    const copyrightStatement = await getDictExtraByCode(
        DICT_CODE.COPYRIGHT_STATEMENT
    );

    const formData = new FormData();
    formData.append("page", "1");
    formData.append("limit", "4");

    // const res = await getWebProductListAction(formData);

    const formData2 = new FormData();
    formData2.append("page", "1");
    formData2.append("limit", "4");
    // const res2 = await getWebSolutionListAction(formData2);

    return (
        <Flex
            component="footer"
            w={"100%"}
            h={200}
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
                <Group w={862} h={"100%"}>
                    {/* LOGO */}
                    <AspectRatio
                        ratio={3 / 1}
                        maw={265}
                        flex="0 0 265px"
                        className="flex justify-center items-center"
                    >
                        <Image
                            src={
                                logo.code === 200 && logo.data.imageId
                                    ? `/api/common/image/download/${logo.data.imageId}`
                                    : `https://dummyimage.com/265x88/000000/ffffff&text=logo`
                            }
                            className="!object-contain"
                            alt="Logo"
                            priority
                            width={265}
                            height={88}
                        />
                    </AspectRatio>

                    {/* 版权和备案号 */}
                    <Stack>
                        <Text size="sm" c={"#fff"}>
                            {copyrightStatement.code === 200 &&
                            copyrightStatement.data
                                ? copyrightStatement.data
                                : null}
                        </Text>
                        <UnstyledButton
                            component={Link}
                            href="https://beian.miit.gov.cn/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            size={"sm"}
                        >
                            <Text size="sm" c={"#fff"}>
                                {recordNumber.code === 200 && recordNumber.data
                                    ? recordNumber.data
                                    : null}
                            </Text>
                        </UnstyledButton>
                    </Stack>
                </Group>
                <i className="w-[1px] h-[140px] bg-white/15"></i>
                <Flex
                    w={"calc(100% - 862px)"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                    direction={"column"}
                    gap={"lg"}
                >
                    {contactPhoneNumber.code === 200 &&
                    contactPhoneNumber.data ? (
                        <Group gap={4}>
                            <IconPhoneCall stroke={2} color={"#fff"} />
                            <Text c={"#fff"} fz={16} fw={"bold"}>
                                {contactPhoneNumber.data}
                            </Text>
                        </Group>
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
                                    <ActionIcon
                                        variant="light"
                                        aria-label="Wechat"
                                        radius="xl"
                                    >
                                        <IconBrandWechat stroke={2} />
                                    </ActionIcon>
                                </Tooltip>
                            </Center>
                        ) : null}

                        {contactEmail.code === 200 && contactEmail.data ? (
                            <Center w={30} h={30}>
                                <Tooltip label={contactEmail.data}>
                                    <ActionIcon
                                        variant="light"
                                        aria-label="Wechat"
                                        radius="xl"
                                    >
                                        <IconMail stroke={2} />
                                    </ActionIcon>
                                </Tooltip>
                            </Center>
                        ) : null}
                    </Group>
                </Flex>
            </Flex>
            {/* <Center
                w={"100%"}
                h={44}
                c={"white"}
                fz={14}
                className="border-t border-white/15"
            >
                <Group>
                    <Text size="sm">
                        {copyrightStatement.code === 200 &&
                        copyrightStatement.data
                            ? copyrightStatement.data
                            : null}
                    </Text>
                    <UnstyledButton
                        component={Link}
                        href="https://beian.miit.gov.cn/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        size={"sm"}
                    >
                        <Text size="sm">
                            {recordNumber.code === 200 && recordNumber.data
                                ? recordNumber.data
                                : null}
                        </Text>
                    </UnstyledButton>
                </Group>
            </Center> */}
        </Flex>
    );
};

export default Footer;
