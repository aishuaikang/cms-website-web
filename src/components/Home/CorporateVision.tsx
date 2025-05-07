// import Image from "next/image";
// import VisionIcon from "@/assets/images/vision_icon.svg";
// import AU from "@/assets/images/au.png";

import { DICT_CODE, getDictByCode } from "@/apis/dict";
import {
    Text,
    Center,
    Group,
    Stack,
    Image as Img,
    AspectRatio,
} from "@mantine/core";
import Image from "next/image";
import ErrorComponent from "../ErrorComponent";

const CompanyProfile = async () => {
    const companyProfile = await getDictByCode(DICT_CODE.COMPANY_PROFILE);

    return (
        // className="w-full h-[827px]"
        <Center w={"100%"} h={"auto"}>
            <Stack w={1200} h={"100%"} gap={50} py={100}>
                <Group w={"100%"} h={54} justify="space-between">
                    <Text component="h2" fz={36} fw={"bold"}>
                        企业简介
                    </Text>
                    <Text component="h3" fz={36}>
                        Company Vision
                    </Text>
                </Group>
                <Group gap={50} h={450}>
                    {/*  */}
                    <Text
                        w={"calc(100% - 600px - 50px)"}
                        lineClamp={18}
                        // size="sm"
                        // className="right-0 top-[341px] w-[510px] h-[222px] text-justify text-lg tracking-[1px] leading-10 font-bold font-sans"
                        // lineClamp={3}
                    >
                        {companyProfile.code === 200 &&
                        companyProfile.data.extra ? (
                            companyProfile.data.extra
                        ) : (
                            <ErrorComponent
                                title="获取企业简介失败"
                                error={companyProfile.message}
                            />
                        )}
                    </Text>

                    {companyProfile.code === 200 &&
                    companyProfile.data.imageId ? (
                        <AspectRatio ratio={4 / 3} maw={600} h={450}>
                            <Img
                                radius="md"
                                component={Image}
                                src={`/api/common/image/download/${companyProfile.data.imageId}`}
                                alt="Company Profile"
                                width={600}
                                height={450}
                            />
                        </AspectRatio>
                    ) : null}
                </Group>
            </Stack>
        </Center>
    );
};

export default CompanyProfile;
