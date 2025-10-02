import React from "react";
import { useForm } from "react-hook-form";
import FieldInput from "../components/fieldInput";
import { UserSchema, type UserFormData } from "../types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { addUser } from "../services/userService";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: UserFormData) => {
    try {
      addUser(data);
      toast.success("User added successfully");
      navigate(-1);
    } catch (error) {
      toast.error("Failed to add user", {
        description: (error as Error).message,
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-black hover:text-gray-600 transition-colors duration-200 flex items-center cursor-pointer group transition-all duration-300"
        >
          <ArrowLeft className="inline-block mr-1 group-hover:-translate-x-1" />{" "}
          Back
        </button>
        <h1 className="text-2xl font-bold">Add User</h1>
        <p className="text-gray-500 mb-6">
          Fill in the details below to add a new user
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FieldInput
            label="Name"
            type="text"
            name="name"
            placeholder="John Doe"
            register={register}
            required
            error={errors.name}
          />
          <FieldInput
            label="Email"
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            register={register}
            required
            error={errors.email}
          />
          <FieldInput
            label="Phone"
            type="tel"
            name="phone"
            placeholder="+1 234 567 890"
            register={register}
            required
            error={errors.phone}
          />
          <FieldInput
            label="Website"
            type="url"
            name="website"
            placeholder="https://example.com"
            register={register}
            required
            error={errors.website}
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-900 transition-colors duration-200 cursor-pointer text-white py-2.5 px-4 rounded"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}
