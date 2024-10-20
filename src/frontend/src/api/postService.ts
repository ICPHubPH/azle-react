import axiosInstance from "./axiosConfig";

//GET all post
export const getAllPosts = async (skip: number, take: number) => {
  const response = await axiosInstance.get(`/posts`, {
    params: {
      page: skip / take,
      take,
    },
  });
  return response.data;
};

//GET one post
export const getPostById = async (id: string) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

//GET post by type scholarship | internship
export const getPostsByCategoryType = async (
  type: string,
  skip: number,
  take: number
) => {
  const response = await axiosInstance.get(`/api/posts/category/${type}`, {
    params: {
      skip,
      limit: take,
    },
  });
  return response.data;
};

// Create Post
export const createPost = async (
  title: string,
  thumbnail: string,
  type: string,
  content: string
) => {
  const response = await axiosInstance.post("/posts/create", {
    title,
    thumbnail,
    type,
    content,
  });
  return response.data;
};

//Delete Post
export const deletePost = async (id: string): Promise<void> => {
  const response = await axiosInstance.post(`/posts/${id}/remove`);
  return response.data;
};

//Archive Post
export const archivePostById = async (id: string) => {
  const response = await axiosInstance.post(`/protected/posts/${id}/archive`);
  return response.data;
};

//Archive Post
export const unArchivePostById = async (id: string) => {
  const response = await axiosInstance.post(`/protected/posts/${id}/unarchive`);
  return response.data;
};

// Get all archived posts
export const getArchivedPosts = async (page: number, take: number, sortOrder: string = "ASC") => {
  const response = await axiosInstance.get("/posts", {
    params: {
      page,
      take,
      sortOrder,
      archived: "true", 
    },
  });
  return response.data;
};

