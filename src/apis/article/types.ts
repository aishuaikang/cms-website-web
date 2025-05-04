export enum ArticleStatus {
    草稿,
    公开,
}

export interface Article {
    id: string;
    title: string;
    description: string;
    content: string;
    status: ArticleStatus;
    categoryId: string;
    images: Image[];
    tags: Tag[];
    userId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Image {
    id: string;
    title: string;
    hash: string;
    articles: Article[];
    // users: User[];
    createdAt: string;
    updatedAt: string;
}

export interface Tag {
    id: string;
    name: string;
    description: string;
    articles: Article[];
    createdAt: string;
    updatedAt: string;
}
