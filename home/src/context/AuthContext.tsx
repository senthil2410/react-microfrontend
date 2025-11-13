import { loginUser } from "../services/authService";
import {
  AuthContextType,
  DecodedToken,
  LoginFormData,
  User,
} from "../types/AuthState";
import { getErrorMessage } from "../utils/errorHandler";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        setUser({ email: decoded.email, role: decoded.role });
      } else {
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }: LoginFormData) => {
    try {
      const response = await loginUser({ email, password });

      if (!response.result.token) {
        throw new Error("User Data not received from Server");
      }

      const { token, email: userEmail, role: userRole } = response.result;

      localStorage.setItem("token", token);

      localStorage.setItem(
        "user",
        JSON.stringify({ email: userEmail, role: userRole })
      );

      setUser({ email: userEmail, role: userRole });
    } catch (err: unknown) {
      console.error("There is an Error", getErrorMessage(err));
      throw new Error(getErrorMessage(err));
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
