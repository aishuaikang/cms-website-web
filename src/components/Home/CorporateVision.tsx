// import Image from "next/image";
// import VisionIcon from "@/assets/images/vision_icon.svg";
// import AU from "@/assets/images/au.png";

import {
    Text,
    Center,
    Group,
    Stack,
    Image as Img,
    AspectRatio,
} from "@mantine/core";
import Image from "next/image";

const CompanyProfile = () => {
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
                        lineClamp={12}
                        size="lg"
                        // className="right-0 top-[341px] w-[510px] h-[222px] text-justify text-lg tracking-[1px] leading-10 font-bold font-sans"
                        // lineClamp={3}
                    >
                        北京鸿兴睿远科技有限公司（2025年成立）是全球智能音频技术的创新引领者，以“用声波重构未来”为使命，专注突破声学技术的物理边界与交互可能。公司深耕自主核心算法研发，打造覆盖智能硬件、AI音频引擎、云端声学大模型的全栈技术体系，在降噪（120dB强噪环境语音保真率达98%）、空间计算、低功耗交互等领域实现行业颠覆性突破。
                        围绕“声景融合、人机共智”，已推出智慧文旅“听见敦煌”、银发守护智能胸针等标杆解决方案，服务故宫、200+养老社区及全球工业领军企业，年均避免损失超2亿元。布局元宇宙声场与健康声学前沿领域，联合清华大学等顶尖机构推动技术落地，入选国家级专精特新企业。以工程极客精神与向善初心，我们正让声音技术成为连接物理与数字、商业与人文的温暖纽带。北京鸿兴睿远科技有限公司（2025年成立）是全球智能音频技术的创新引领者，以“用声波重构未来”为使命，专注突破声学技术的物理边界与交互可能。公司深耕自主核心算法研发，打造覆盖智能硬件、AI音频引擎、云端声学大模型的全栈技术体系，在降噪（120dB强噪环境语音保真率达98%）、空间计算、低功耗交互等领域实现行业颠覆性突破。
                        围绕“声景融合、人机共智”，已推出智慧文旅“听见敦煌”、银发守护智能胸针等标杆解决方案，服务故宫、200+养老社区及全球工业领军企业，年均避免损失超2亿元。布局元宇宙声场与健康声学前沿领域，联合清华大学等顶尖机构推动技术落地，入选国家级专精特新企业。以工程极客精神与向善初心，我们正让声音技术成为连接物理与数字、商业与人文的温暖纽带。北京鸿兴睿远科技有限公司（2025年成立）是全球智能音频技术的创新引领者，以“用声波重构未来”为使命，专注突破声学技术的物理边界与交互可能。公司深耕自主核心算法研发，打造覆盖智能硬件、AI音频引擎、云端声学大模型的全栈技术体系，在降噪（120dB强噪环境语音保真率达98%）、空间计算、低功耗交互等领域实现行业颠覆性突破。
                        围绕“声景融合、人机共智”，已推出智慧文旅“听见敦煌”、银发守护智能胸针等标杆解决方案，服务故宫、200+养老社区及全球工业领军企业，年均避免损失超2亿元。布局元宇宙声场与健康声学前沿领域，联合清华大学等顶尖机构推动技术落地，入选国家级专精特新企业。以工程极客精神与向善初心，我们正让声音技术成为连接物理与数字、商业与人文的温暖纽带。北京鸿兴睿远科技有限公司（2025年成立）是全球智能音频技术的创新引领者，以“用声波重构未来”为使命，专注突破声学技术的物理边界与交互可能。公司深耕自主核心算法研发，打造覆盖智能硬件、AI音频引擎、云端声学大模型的全栈技术体系，在降噪（120dB强噪环境语音保真率达98%）、空间计算、低功耗交互等领域实现行业颠覆性突破。
                        围绕“声景融合、人机共智”，已推出智慧文旅“听见敦煌”、银发守护智能胸针等标杆解决方案，服务故宫、200+养老社区及全球工业领军企业，年均避免损失超2亿元。布局元宇宙声场与健康声学前沿领域，联合清华大学等顶尖机构推动技术落地，入选国家级专精特新企业。以工程极客精神与向善初心，我们正让声音技术成为连接物理与数字、商业与人文的温暖纽带。
                    </Text>
                    <AspectRatio ratio={4 / 3} maw={600} h={450}>
                        <Img
                            radius="md"
                            component={Image}
                            src={
                                "https://dummyimage.com/600x460/000000/ffffff&text=CompanyProfile"
                            }
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
