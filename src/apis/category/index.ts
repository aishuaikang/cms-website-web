import { CommonResponse } from "../types";
import { Category } from "./types";

export const getCategoryList = async () => {
    const data = await fetch(process.env.BASE_API + "/common/category");
    return (await data.json()) as CommonResponse<Category[]>;
};

export const getCategoryByAlias = async (alias: Category["alias"]) => {
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
