import { xFetch } from "./x-fetch";

export const verifyToken = async (token: string) => {
  try {
    const response = await xFetch("/connectED/verify-jwt", {}, {
      Authorization: `Bearer ${token}`,
    });
    console.log(response, "ln6jwt");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error verifying token", error);
    throw error;
  }
};

export const signToken = async (id: string, expiresIn: string = "7d") => {
  try {
    const response = await xFetch("/connectED/sign-jwt", {
      id,
      expiresIn,
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error signing token", error);
    return null;
  }
};
