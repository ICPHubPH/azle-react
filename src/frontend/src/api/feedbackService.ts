import axiosInstance from "./axiosConfig";

export async function createFeedback(rate: number, content: string | null, postId: string) {
    try {
        const response = await axiosInstance.post('/feedbacks', {
            rate,
            content,
            postId
        });
    
        return response.data;
    } catch (error) {
        console.log(error);
    }
}