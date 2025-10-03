import React from "react";
import { type User, type UserFormData } from "../types/user";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import UserForm from "../components/forms/userForm";
import { updateUser } from "../store/user/userSlice";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) =>
    state.users.items.find((u: User) => u.id === Number(id))
  );

  const onSubmit = (data: UserFormData) => {
    try {
      dispatch(updateUser({ id: Number(id), ...data }));
      toast.success("User updated successfully");
      navigate(-1);
    } catch (error) {
      toast.error("Failed to update user", {
        description: (error as Error).message,
      });
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-black hover:text-gray-600 transition-colors duration-200 flex items-center cursor-pointer group transition-all duration-300"
        >
          <ArrowLeft className="inline-block mr-1 group-hover:-translate-x-1" />{" "}
          Back
        </button>
        {user ? (
          <UserForm
            onSubmit={onSubmit}
            defaultValues={{ ...user }}
            title="Edit User"
            description="Update the details below"
          />
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-gray-600">User not found!</p>
          </div>
        )}
      </div>
    </div>
  );
}
