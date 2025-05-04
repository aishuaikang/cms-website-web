export interface CommonResponse<T> {
    code: number;
    data: T;
    message: string;
    error: string;
}

export interface CommonPage<T> {
    rows: T[];
    total: number;
    pages: number;
}

// export interface LoginResponse {
//   id: string;
//   nickname: string;
//   phone: string;
//   username: string;
//   is_super: boolean;
//   image_id: string | null;
//   articles: null;
//   created_at: string;
//   updated_at: string;
//   token: string;
// }
