import React, { useState } from "react";
import { LoginFormData } from "../types/AuthState";
import CommonInput from "../components/CommonInput";
import { useAuth } from "../hooks/useAuth";
import { getErrorMessage } from "../utils/errorHandler";

const Login = () => {
  const [users, setUsers] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const inputFields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      value: users.email,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
      value: users.password,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login({ email: users.email, password: users.password });
      window.dispatchEvent(
        new CustomEvent<string>("notification", {
          detail: `${users.email} is logged in `,
        })
      );
    } catch (err: unknown) {
      console.error(getErrorMessage(err));
      throw new Error(`There is an Error,${getErrorMessage(err)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((field) => (
        <CommonInput
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={field.value}
          onChange={handleChange}
        />
      ))}

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
