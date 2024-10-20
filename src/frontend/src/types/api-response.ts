export type APIResponse<T> = {
    success: number;
    message: string | null;
} & T;