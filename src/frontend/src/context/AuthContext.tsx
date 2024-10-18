// AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: any; // Replace 'any' with your user type
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Set the user state

  const login = async (email: string, password: string) => {
    const url = `${import.meta.env.VITE_CANISTER_URL}/app/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_email: email, user_password: password }),
    });
    const data = await response.json();

    if (data.status === 200) {
      setUser(data.user); // Assuming the user data comes back in the response
      console.log("Login successful!");
    } else {
      throw new Error(data.message || "Login failed");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
