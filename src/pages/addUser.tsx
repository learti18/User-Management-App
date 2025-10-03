import React from "react";
import { type UserFormData } from "../types/user";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import UserForm from "../components/forms/userForm";
import { addUser } from "../store/user/userSlice";

export default function AddUser() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit = (data: UserFormData) => {
    console.log(data);
    data.id = Math.floor(Math.random() * 10000) + 100;
    dispatch(addUser(data));
    toast.success("User added successfully");
    navigate(-1);
  };

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-black hover:text-neutral-600 flex items-center cursor-pointer group transition-all duration-300"
        >
          <ArrowLeft className="inline-block mr-1 group-hover:-translate-x-1" />{" "}
          Back
        </button>
        <UserForm
          onSubmit={onSubmit}
          title="Add User"
          description="Fill in the details below to add a new user"
        />
      </div>
    </div>
  );
}
