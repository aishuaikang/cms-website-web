import qs from "qs";

import { Category } from "../category/types";
import { CommonPage, CommonResponse } from "../types";
import { Article } from "./types";

export const getArticleListByAlias = async (
    alias: Category["alias"],
    params: {
        page: number;
        pageSize: number;
    }
) => {
    const query = qs.stringify(params, { addQueryPrefix: true });

    const data = await fetch(
        process.env.BASE_API +
            "/common/article/getArticlesByCategoryAlias/" +
            alias +
            query
    );
    return (await data.json()) as CommonResponse<CommonPage<Article>>;
};

export const getArticleById = async (id: Article["id"]) => {
    const data = await fetch(
        process.env.BASE_API + "/common/article/getArticleByID/" + id
    );
    return (await data.json()) as CommonResponse<Article>;
};

export const getRelatedArticlesById = async (
    id: Article["id"],
    params: {
        page: number;
        pageSize: number;
    }
) => {
    const query = qs.stringify(params, { addQueryPrefix: true });
    const data = await fetch(
        process.env.BASE_API +
            "/common/article/getRelatedArticlesByID/" +
            id +
            query
    );
    return (await data.json()) as CommonResponse<CommonPage<Article>>;
};
