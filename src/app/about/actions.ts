// "use server";

// import { JSONResponse, Page, requestWeb } from "@/lib/request";
// import { Milestone } from "../admin/milestones/actions";

// // 获取发展历程列表
// export const getWebMilestoneListAction = async (formData: FormData) => {
//     try {
//         const page = formData.get("page");
//         const limit = formData.get("limit");
//         const response = await requestWeb(
//             `/milestones?page=${page}&limit=${limit}`
//         );
//         return (await response.json()) as JSONResponse<Page<Milestone>>;
//     } catch (e) {
//         return {
//             code: 500,
//             msg: (e as Error).message,
//             data: {},
//         } as JSONResponse<Page<Milestone>>;
//     }
// };

// export interface WebSetting {
//     title: string;
//     subtitle: string;
//     cover: string;
//     content: string;
// }

// // 获取关于我们信息
// export const getWebSettingAction = async () => {
//     try {
//         const response = await requestWeb(`/setting`);
//         return (await response.json()) as JSONResponse<WebSetting>;
//     } catch (e) {
//         return {
//             code: 500,
//             msg: (e as Error).message,
//             data: {},
//         } as JSONResponse<WebSetting>;
//     }
// };
