export interface LoginFormData {
  email: string;
  password: string;
}

export interface User {
  email: string;
  role: string;
}
export interface AuthContextType {
  user: User | null;
  login: ({ email, password }: LoginFormData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading:boolean;
}

export interface DecodedToken extends User {
  exp: number;
}
