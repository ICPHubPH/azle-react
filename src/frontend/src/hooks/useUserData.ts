import {
  getUserById,
  getAllUsers,
  deleteAccount,
  changeAvatar,
  updateSelf,
} from "@/api/userService";
import { useMutation, useQuery } from "@tanstack/react-query";

// get ONE user
export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    staleTime: 5000,
  });
};

// get ALL users
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    staleTime: 10000,
  });
};

// DELETE user
export const useDeleteAccount = () => {
  return useMutation({
    mutationFn: (id: string) => deleteAccount(id),
  });
};

// change Avatar
export const useChangeAvatar = () => {
  return useMutation({
    mutationFn: (id: string) => changeAvatar(id),
  });
};

// Update Bio
export const useUpdateBio = () => {
  return useMutation({
    mutationFn: ({ name, bio }: { name: string; bio: string }) =>
      updateSelf(name, bio),
  });
};
