// "use client";

// import Description from "@/components/Description";
// import About from "@/assets/images/about.jpg";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import Image from "next/image";
// import Culture from "@/assets/images/culture.png";
// import { useRequest } from "ahooks";
// import { getWebMilestoneListAction, getWebSettingAction } from "./actions";
// import { useState } from "react";
// import { format } from "date-fns";
// import { rgbDataURL } from "@/lib/utils";
// import dynamic from "next/dynamic";

// const CoreMembers = dynamic(() => import("@/components/about/CoreMembers"));
// const Spinner = dynamic(() => import("@/components/Spinner"));
// const AboutSwiper = dynamic(() => import("@/components/about/AboutSwiper"));
// const BigTitle = dynamic(() => import("@/components/BigTitle"));

export default function About() {
    // const [page] = useState(1);
    // const [limit] = useState(9999);
    // const {
    //     data: milestoneList,
    //     loading: milestoneListLoading,
    //     error: milestoneListError,
    // } = useRequest(
    //     async () => {
    //         const formData = new FormData();
    //         formData.append("page", page.toString());
    //         formData.append("limit", limit.toString());

    //         const res = await getWebMilestoneListAction(formData);
    //         return res.code !== 200
    //             ? Promise.reject(new Error(res.msg))
    //             : Promise.resolve(res.data);
    //     },
    //     {
    //         refreshDeps: [page, limit],
    //     }
    // );

    // const { data: webSetting, loading: webSettingLoading } =
    //     useRequest(getWebSettingAction);

    // const [expanded, setExpanded] = useState<Milestone["id"][]>([]);

    return (
        <>
            关于我们
            {/* <Description
                title="关于我们"
                description={"未来技术产业化、现代产业未来化"}
                image={About.src}
            />
            <Breadcrumbs options={[{ name: "关于我们", href: "/about" }]} />
            <BigTitle title="关于我们" />
            <div className="w-full h-[470px] flex flex-col justify-center items-center mb-[100px] bg-white">
                {webSettingLoading ? (
                    <Spinner />
                ) : (
                    <div className="w-[1200px] h-[320px] flex justify-between items-center">
                        <div className="w-[48%] h-full flex flex-col justify-evenly items-start">
                            <h2 className="text-[26px] font-sans font-bold text-[#00B4BA] tracking-[3px]">
                                {webSetting?.data.title}
                            </h2>
                            <p className="text-sm font-sans font-[500] text-[#6C6C6C] leading-[32px]">
                                {webSetting?.data.content
                                    .split("\n")
                                    .map((item, index) => {
                                        return (
                                            <span key={index}>
                                                {item}
                                                <br />
                                            </span>
                                        );
                                    })}
                            </p>
                        </div>
                        <div className="w-[48%] h-full overflow-hidden relative">
                            <Image
                                className="object-fill"
                                src={`/api/image?path=${webSetting?.data.cover}`}
                                alt={webSetting?.data.title || "AboutUs"}
                                width={591}
                                height={320}
                                placeholder="blur"
                                blurDataURL={rgbDataURL(255, 255, 255)}
                            />
                        </div>
                    </div>
                )}
            </div> */}
            {/* <BigTitle title="发展历程" />
            <div className="w-full h-[calc(100vh-60px-125px-125px-125px)] min-h-[600px] flex flex-col justify-start items-center mb-[100px] overflow-y-scroll">
                <div className="w-[1200px] h-auto flex flex-col justify-evenly items-start relative">
                    <div className="zhuangshitiao absolute left-0 top-0 w-[1px] h-full bg-[#E5E5E5]"></div>

                    {milestoneListLoading ? (
                        <div className="w-full h-96 flex justify-center items-center">
                            <Spinner />
                        </div>
                    ) : null}

                    {milestoneListError ? (
                        <div className="w-full h-auto flex flex-col justify-center items-center mb-[100px]">
                            <div className="w-[1200px] h-[308px] bg-white shadow-custom3 rounded-lg p-8">
                                <h3 className="text-xl font-sans font-bold text-[#6C6C6C] mb-6">
                                    {milestoneListError.message}
                                </h3>
                            </div>
                        </div>
                    ) : null}

                    {milestoneList?.records.length === 0 &&
                    !milestoneListLoading &&
                    !milestoneListError ? (
                        <div className="w-full h-96 flex justify-center items-center">
                            <p className="text-lg font-sans font-[500] text-[#6C6C6C]">
                                暂无发展历程
                            </p>
                        </div>
                    ) : null}

                    {milestoneList?.records.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="w-full h-auto flex flex-row justify-between items-start border-b border-[#E5E5E5] py-[20px] relative pl-[30px] hover:border-[#00B4BA] hover:pl-[25px] transition-all duration-300 cursor-pointer hover:shadow-lg hover:z-10 group"
                            >
                                {item.cover ? (
                                    <div className="w-[267px] h-[200px] mr-4">
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <AboutSwiper
                                                value={item.cover.split(",")}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                                <div className="w-[calc(100%-267px)] flex flex-col justify-evenly items-start">
                                    <div className="absolute left-[-5px] top-[50%] -translate-y-1/2 w-[10px] h-[10px] border border-[#00B4BA] bg-white rounded-full group-hover:bg-[#00B4BA]"></div>
                                    <p className="text-sm font-sans font-bold text-[#00B4BA] leading-[32px] mb-2 absolute left-[-80px] top-[50%] -translate-y-1/2">
                                        {format(new Date(item.time), "yyyy-MM")}
                                    </p>
                                    <p className="text-sm font-sans font-[500] text-[#6C6C6C] leading-[32px]">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <BigTitle title="公司文化" />
            <div className="w-full h-[635px] flex flex-col justify-center items-center mb-[100px] bg-white">
                <div
                    className="w-[1200px] h-[485px] flex justify-end items-center p-12"
                    style={{ backgroundImage: `url(${Culture.src})` }}
                >
                    <div className="w-[515px] h-full flex flex-col justify-center items-start">
                        <h3 className="text-2xl font-sans font-bold text-[#00B4BA] mb-8">
                            企业使命：
                        </h3>
                        <p className="text-lg font-sans font-[500] text-[#6C6C6C] leading-[32px] mb-8">
                            构建“云-边-端”协同网络计算体系，让现实世界的每一个角落拥有触手可及的智能！
                        </p>
                        <div className="w-full h-[32px] flex justify-between items-center">
                            <div className="flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18.371"
                                    height="16.037"
                                    viewBox="0 0 18.371 16.037"
                                >
                                    <path
                                        className="fill-[#00b4ba] stroke-[#0bbec4] stroke-0.3"
                                        d="M5.753,144.919l3.125,10.1L12,144.919Zm.658-5.283h-3.6L0,143.863H4.581l1.83-4.227Zm5.53,4.226-1.83-4.226H7.645l-1.831,4.227h6.128Zm-8.58,4.691c.008,0,5.2,6.379,5.2,6.379L4.551,144.92H.261l3.1,3.634Zm7.982-8.917,1.832,4.226h4.633l-2.865-4.226Zm4.47,7.3c-.01,0,1.727-2.021,1.727-2.021H13.2L9.145,154.962l6.668-8.022Z"
                                        transform="translate(0.28 -139.486)"
                                    />
                                </svg>
                                <span className="ml-2 text-lg font-sans font-[500] text-[#4E4E4E]">
                                    持续创新
                                </span>
                            </div>
                            <div className="flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18.371"
                                    height="16.037"
                                    viewBox="0 0 18.371 16.037"
                                >
                                    <path
                                        className="fill-[#00b4ba] stroke-[#0bbec4] stroke-0.3"
                                        d="M5.753,144.919l3.125,10.1L12,144.919Zm.658-5.283h-3.6L0,143.863H4.581l1.83-4.227Zm5.53,4.226-1.83-4.226H7.645l-1.831,4.227h6.128Zm-8.58,4.691c.008,0,5.2,6.379,5.2,6.379L4.551,144.92H.261l3.1,3.634Zm7.982-8.917,1.832,4.226h4.633l-2.865-4.226Zm4.47,7.3c-.01,0,1.727-2.021,1.727-2.021H13.2L9.145,154.962l6.668-8.022Z"
                                        transform="translate(0.28 -139.486)"
                                    />
                                </svg>
                                <span className="ml-2 text-lg font-sans font-[500] text-[#4E4E4E]">
                                    拥抱变化
                                </span>
                            </div>
                            <div className="flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18.371"
                                    height="16.037"
                                    viewBox="0 0 18.371 16.037"
                                >
                                    <path
                                        className="fill-[#00b4ba] stroke-[#0bbec4] stroke-0.3"
                                        d="M5.753,144.919l3.125,10.1L12,144.919Zm.658-5.283h-3.6L0,143.863H4.581l1.83-4.227Zm5.53,4.226-1.83-4.226H7.645l-1.831,4.227h6.128Zm-8.58,4.691c.008,0,5.2,6.379,5.2,6.379L4.551,144.92H.261l3.1,3.634Zm7.982-8.917,1.832,4.226h4.633l-2.865-4.226Zm4.47,7.3c-.01,0,1.727-2.021,1.727-2.021H13.2L9.145,154.962l6.668-8.022Z"
                                        transform="translate(0.28 -139.486)"
                                    />
                                </svg>
                                <span className="ml-2 text-lg font-sans font-[500] text-[#4E4E4E]">
                                    追求卓越
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BigTitle title="核心成员" />
            <div className="w-full h-[736px] flex flex-col justify-center items-center bg-white">
                <CoreMembers />
            </div> */}
        </>
    );
}
