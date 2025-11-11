import React from "react";
import { InputProps } from "../types/CommonInput";

const CommonInput = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  error,
}: InputProps) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default CommonInput;
