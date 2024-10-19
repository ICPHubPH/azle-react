import axiosInstance from "./axiosConfig";

export async function createBookmark(postId: string) {
    try {
        const response = await axiosInstance.post('/bookmarks', {
            postId
        });

        return response.data;
    } catch (error) {
        throw "Something went wrong!"
    }
}