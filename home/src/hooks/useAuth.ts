import { AuthContext } from "../context/AuthContext";
import type { AuthContextType } from "../types/AuthState"
import { useContext } from "react";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Should be Inside the AuthProvider");
  }
  return context;
};
