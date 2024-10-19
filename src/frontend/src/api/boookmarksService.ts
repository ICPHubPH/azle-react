import axiosInstance from "./axiosConfig";

//GET all bookmarks by user id
export const getAllBookmarksByUserId = async (id: string) => {
  const response = await axiosInstance.post(`/users/${id}/bookmarks`, {
    params: {
      id,
    },
  });
  return response.data;
};
