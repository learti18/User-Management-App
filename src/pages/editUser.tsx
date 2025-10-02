import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FieldInput from "../components/fieldInput";
import { UserSchema, type UserFormData } from "../types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { addUser, fetchUserById } from "../services/userService";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ArrowLeft } from "lucide-react";

export default function EditUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: user,
    loading,
    error,
  } = useFetch<UserFormData>(() => fetchUserById(id!));

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    }
  }, [user]);

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
        <h1 className="text-2xl font-bold mb-4">Edit User</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error.message}</p>}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FieldInput
            label="Name"
            type="text"
            name="name"
            register={register}
            required
            error={errors.name}
          />
          <FieldInput
            label="Email"
            type="email"
            name="email"
            register={register}
            required
            error={errors.email}
          />
          <FieldInput
            label="Phone"
            type="tel"
            name="phone"
            register={register}
            required
            error={errors.phone}
          />
          <FieldInput
            label="Website"
            type="url"
            name="website"
            register={register}
            required
            error={errors.website}
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-900 transition-colors duration-200 cursor-pointer text-white py-2 px-4 rounded"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}
