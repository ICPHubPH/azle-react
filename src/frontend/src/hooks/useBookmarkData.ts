import { getAllBookmarksByUserId } from "@/api/boookmarksService";
import { useQuery } from "@tanstack/react-query";

export const useAllBookmarksByUserId = (id: string) => {
  return useQuery({
    queryKey: ["bookmarks", id],
    queryFn: () => getAllBookmarksByUserId(id),
    staleTime: 5000,
    select: (data) => data.bookmarks, // Return only the bookmarks array from the response
  });
};
