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
  if (companyProfile.code !== 200) {
    return (
      <ErrorComponent title="获取企业简介失败" error={companyProfile.message} />
    );
  }
  return (
    // className="w-full h-[827px]"
    <Center w={"100%"} h={"auto"}>
      <Stack
        w={1200}
        h={"100%"}
        gap={50}
        // justify="center"
        // align="center"
        // className="relative overflow-hidden w-[1200px] h-full mx-auto"
        py={100}
      >
        <Group
          w={"100%"}
          h={54}
          // className="mt-[163px] w-[1200px] h-[54px]"
          justify="space-between"
        >
          <Text component="h2" fz={36} fw={"bold"}>
            企业简介
          </Text>
          <Text component="h3" fz={36}>
            Company Profile
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
            {companyProfile.data.extra}
          </Text>
          <AspectRatio ratio={4 / 3} maw={600} h={450}>
            <Img
              radius="md"
              component={Image}
              src={`/api/common/image/download/${companyProfile.data.imageId}`}
              alt="Banner3"
              width={600}
              height={450}
            />
          </AspectRatio>
          {/* 这里是图片 */}
        </Group>
        {/* <div className="absolute top-[343px] left-[255px] w-[416px] h-[47px] text-[32px] font-bold leading-[48px]font-sans">
                    “下一代计算，下一代网络”
                </div> */}
        {/* <Image
                    className="absolute block top-[480px]"
                    src={VisionIcon}
                    alt="VisionIcon"
                /> */}

        {/* <Image
                    className="absolute top-[580px] right-0 opacity-30"
                    src={AU}
                    alt="AU"
                /> */}
      </Stack>
    </Center>
  );
};

export default CompanyProfile;
