import axiosInstance from "./axiosConfig";

//GET single user
export const getUserById = async (id: string) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

//GET all user
export const getAllUsers = async (id: string) => {
  const response = await axiosInstance.get(`/users`);
};

//Change Password
export const changePassword = async (
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
) => {
  const response = await axiosInstance.post("/@self/change-password", {
    oldPassword,
    newPassword,
    confirmPassword,
  });
  return response.data;
};

//Change Avatar
export const changeAvatar = async (avatarUrl: string) => {
  const response = await axiosInstance.post("/@self/upload/avatar", {
    avatarUrl,
  });
  return response.data;
};

//Update Self [name. bio]
export const updateSelf = async (name: string, bio: string) => {
  const response = await axiosInstance.post("/@self/update", {
    name,
    bio,
  });
  return response.data;
};

//Delete Account
export const deleteAccount = async (id:string): Promise<void> => {
    const response = await axiosInstance.post(`/users/${id}/remove`)
    return response.data
}