import { getCurrentUser } from "@/api/authService";
import { User } from "@/types/model";
import React, { createContext, useEffect, useState } from "react";

export interface AuthContextType {
  token: string | null;
  data: User | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean; // Add loading state to handle async calls
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Initial loading state

  // Effect to load token from localStorage and fetch user data
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      loadCurrentUser();
    } else {
      setLoading(false); // If no token, stop loading
    }
  }, []);

  const loadCurrentUser = async () => {
    setLoading(true); // Set loading to true before fetching user data
    try {
      const result = await getCurrentUser();
      setData(result.user as User); // Assuming result.user contains the user data
    } catch (error) {
      console.error("Failed to fetch user data", error);
      logout(); // Log out in case of any error (e.g., invalid/expired token)
    } finally {
      setLoading(false); // Always stop loading after data is fetched or failed
    }
  };

  const login = async (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
    await loadCurrentUser(); // Load user data after login
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setData(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, data, login, logout, isAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
