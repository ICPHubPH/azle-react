import {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  getPostsByCategoryType,
} from "@/api/postService";
import { useMutation, useQuery } from "@tanstack/react-query";

// get ALL post
export const useAllPost = (skip: number, take: number) => {
  return useQuery({
    queryKey: ["posts", skip, take],
    queryFn: () => getAllPost(skip, take),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    enabled: skip >= 0 && take > 0,
  });
};

// get ONE post
export const useOnePost = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
    staleTime: 5000,
  });
};

//get post by TYPE
export const useAllPostByCategoryType = (
  type: string,
  skip: number,
  take: number
) => {
  return useQuery({
    queryKey: ["posts", type, skip, take],
    queryFn: () => getPostsByCategoryType(type, skip, take),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    enabled: skip >= 0 && take > 0,
  });
};

// CREATE post
export const useCreatePost = () => {
  return useMutation({
    mutationFn: async ({
      title,
      thumbnail,
      type,
      content,
    }: {
      title: string;
      thumbnail: string;
      type: string;
      content: String;
    }) => {
      return createPost(title, thumbnail, type, content);
    },
  });
};


//DELETE post
export const useDeletePost = () => {
    return useMutation({
        mutationFn: async (id:string) => deletePost(id)
    })
}