import React from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import type { UserFormData } from "../types/user";

type FieldInputProps = {
  label: string;
  type: string;
  name:
    | keyof UserFormData
    | `company.${keyof UserFormData["company"]}`
    | `address.${keyof UserFormData["address"]}`;
  placeholder?: string;
  register: UseFormRegister<UserFormData>;
  required?: boolean;
  error?: FieldError;
  className?: string;
};

export default function FieldInput({
  label,
  type,
  name,
  register,
  required,
  error,
  placeholder,
  className = "",
}: FieldInputProps) {
  return (
    <div className="">
      <label className="block text-neutral-700">{label}</label>
      <input
        type={type}
        className={`border border-neutral-400 rounded w-full p-2 outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : ""
        } ${className}`}
        {...register(name, { required })}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
}
