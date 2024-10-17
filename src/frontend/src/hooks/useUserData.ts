import {
  getUserById,
  getAllUsers,
  deleteAccount,
  changeAvatar,
  updateSelf,
  getAllStudents,
  getAllProviders,
} from "@/api/userService";
import { useMutation, useQuery } from "@tanstack/react-query";

// get ONE user
export const useUserById = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    staleTime: 5000,
  });
};

// get ALL users
export const useAllUser = (skip: number, take: number) => {
  return useQuery({
    queryKey: ["users", skip, take],
    queryFn: () => getAllUsers(skip, take),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    enabled: skip >= 0 && take > 0,
  });
};

// get ALL STUDENTS
export const useUserByStudents = (skip: number, take: number) => {
  return useQuery({
    queryKey: ["students", skip, take],
    queryFn: () => getAllStudents(skip, take),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    enabled: skip >= 0 && take > 0,
    select: (data) => ({ data: data.students, count: data.count }) // Return both data and count

  });
};
//Providers
export const useUserByProviders = (skip: number, take: number) => {
  return useQuery({
    queryKey: ["providers", skip, take],
    queryFn: () => getAllProviders(skip, take),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    enabled: skip >= 0 && take > 0,
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
