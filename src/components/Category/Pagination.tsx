"use client";
import { Article } from "@/apis/article/types";
import { CommonPage, CommonResponse } from "@/apis/types";
import { Group, Pagination as MantinePagination } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface PaginationProps {
    articleList: CommonResponse<CommonPage<Article>>;
    page: number;
}

export const Pagination: React.FC<PaginationProps> = ({
    articleList,
    page,
}) => {
    const pathname = usePathname();
    const path = useMemo(() => {
        return (
            "/" +
            pathname
                .split("/")
                .filter((item) => item)
                .slice(0, 2)
                .join("/")
        );
    }, [pathname]);

    if (articleList.data.pages <= 0) {
        return null;
    }

    return (
        <MantinePagination.Root
            total={articleList.data.pages}
            defaultValue={page}
            getItemProps={(page) => ({
                component: Link,
                href: `${path}/${page}`,
            })}
        >
            <Group gap={7} justify="center" align="center">
                <MantinePagination.First component={Link} href={`${path}/1`} />
                <MantinePagination.Previous
                    component={Link}
                    href={page > 1 ? `${path}/${page - 1}` : `${path}/1`}
                />
                <MantinePagination.Items />
                <MantinePagination.Next
                    component={Link}
                    href={
                        page < articleList.data.pages
                            ? `${path}/${page + 1}`
                            : `${path}/${articleList.data.pages}`
                    }
                />
                <MantinePagination.Last
                    component={Link}
                    href={`${path}/${articleList.data.pages}`}
                />
            </Group>
        </MantinePagination.Root>
    );
};

export default Pagination;
