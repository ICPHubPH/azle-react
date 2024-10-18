import { jwtDecode, JwtPayload } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";

// Define the shape of the AuthContext
export interface AuthContextType {
  token: string | null;
  decodedToken: any | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type CustomJwtPayload = JwtPayload & {
  id: string;
};

// AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [decodedToken, setDecodedToken] = useState<CustomJwtPayload | null>(
    null
  );

  // Effect to load token from localStorage and decode it
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      try {
        const decoded = jwtDecode<CustomJwtPayload>(storedToken);
        setDecodedToken(decoded);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  // Login function to save token
  const login = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
    try {
      const decoded = jwtDecode<CustomJwtPayload>(token);
      setDecodedToken(decoded);
    } catch (error) {
      console.error("Failed to decode token", error);
    }
  };

  // Logout function to clear token
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setDecodedToken(null);
  };

  // Check if the user is authenticated based on token presence
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, decodedToken, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
