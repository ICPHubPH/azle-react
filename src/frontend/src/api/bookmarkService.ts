import { AxiosError } from "axios";
import axiosInstance from "./axiosConfig";

type APIResponse<T> = {
    success: number;
    message: string | null;
} & T;

export async function createBookmark(postId: string) {
    try {
        const response = await axiosInstance.post<APIResponse<any>>('/bookmarks', {
            postId
        });

        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.message);
        }
    }
}

export async function isBookmarked(postId: string) {
    try {
        const response = await axiosInstance.post<APIResponse<{
            bookmarked: boolean;
        }>>(`/bookmarks/check`, {
            postId
        });
        
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.message);
        }
    }
}

export async function deleteBookmark(postId: string) {
    try {
        const response = await axiosInstance.post(`/bookmarks/${postId}/remove`);

        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.message);
        }
    }
}