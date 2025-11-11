import React, { useState } from "react";
import { LoginFormData } from "../types/AuthState";

const Login = () => {
  const [users, setUsers] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  return <div></div>;
};

export default Login;
