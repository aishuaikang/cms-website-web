// import { requestJson } from '@/utils';
// import { queryOptions } from '@tanstack/react-query';
// import { AddCategoryParams, Category, UpdateCategoryParams } from './types';

import { CommonResponse } from "../types";
import { Category } from "./types";

export const getCategoryList = async () => {
    const data = await fetch(process.env.BASE_API + "/common/category");
    return (await data.json()) as CommonResponse<Category[]>;
};

export const getCategoryByAlias = async (alias: Category["alias"]) => {
    // /category/getCategoryByAlias/{alias}

    const data = await fetch(
        process.env.BASE_API + "/common/category/getCategoryByAlias/" + alias
    );

    return (await data.json()) as CommonResponse<Category>;
};

// /category/getCategoryByID/{id}
export const getCategoryById = async (id: Category["id"]) => {
    const data = await fetch(
        process.env.BASE_API + "/common/category/getCategoryByID/" + id
    );
    return (await data.json()) as CommonResponse<Category>;
};

// export const CATEGORY_LIST_QUERY_KEY = 'getCategoryList';

// // 获取分类列表
// export const getCategoryListQueryOptions = () =>
//   queryOptions({
//     queryKey: [CATEGORY_LIST_QUERY_KEY],
//     queryFn: async () => {
//       return await requestJson<Category[]>(`/admin/category`);
//     },
//   });

// // 添加分类
// export const addCategoryMutationFn = async (data: AddCategoryParams) => {
//   return await requestJson<null>(`/admin/category`, {
//     method: 'POST',
//     body: JSON.stringify(data),
//   });
// };

// // 修改分类
// export const updateCategoryMutationFn = async ({
//   id,
//   ...data
// }: UpdateCategoryParams): Promise<null> => {
//   return await requestJson<null>(`/admin/category/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(data),
//   });
// };

// // 删除分类
// export const deleteCategoryMutationFn = async (id: Category['id']) => {
//   return await requestJson<null>(`/admin/category/${id}`, {
//     method: 'DELETE',
//   });
// };
