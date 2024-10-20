import { APIResponse } from "@/types/api-response";
import { AxiosError } from "axios";
import axiosInstance from "./axiosConfig";

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
        const response = await axiosInstance.post(`/bookmarks/remove`, {
            postId
        });

        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.message);
        }
    }
}