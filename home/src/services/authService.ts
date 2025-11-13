import axios from "axios";
import { LoginFormData } from "../types/AuthState";
import { getErrorMessage } from "../utils/errorHandler";

export const loginUser = async ({ email, password }: LoginFormData) => {
  try {
    const response = await axios.post("http://localhost:8000/puser/login", {
      email,
      password,
    });
    const data = response.data;

    if (!data.result) {
      throw new Error(data.error || "Invalid email or password");
    }
    return data;
  } catch (err: unknown) {
    console.error("Login failed:", getErrorMessage(err));
    throw new Error(getErrorMessage(err));
  }
};
