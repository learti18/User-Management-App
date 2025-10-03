import React, { useState } from "react";
import type { User } from "../types/user";
import { Link, useNavigate } from "react-router-dom";
import ActionMenu from "./ui/actionMenu";
import Avatar from "./avatar";
import ConfirmationModal from "./ui/confirmationModal";
import { deleteUser } from "../store/user/userSlice";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

const Card = ({ id, name, email, company }: User) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = (id: number) => {
    navigate(`/edit-user/${id}`);
  };

  const confirmDelete = () => {
    dispatch(deleteUser(id));
    setShowDeleteModal(false);
    toast.success("User deleted successfully");
  };

  const handleModalClick = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <Link
      to={`/user/${id}`}
      className="bg-white border border-gray-200 rounded p-4 h-52 shadow-xs hover:border-gray-600 group
                     transition-colors duration-300 flex flex-col"
    >
      {/* Card Header */}
      <div className="flex items-center gap-4">
        <Avatar name={name} className="size-12 text-lg" />
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-1 leading-none">
            {name}
          </h1>
          <p className="text-gray-400 text-sm md:text-base">{email}</p>
        </div>

        <ActionMenu
          id={id}
          onEdit={handleEdit}
          onDelete={handleModalClick}
          className="ml-auto self-start"
        />
      </div>

      {/* Card Footer */}
      <div className="mt-auto flex justify-between items-center">
        <p className="flex flex-col text-gray-400">
          Company{" "}
          <span className="text-gray-900 font-medium">{company.name}</span>
        </p>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={showDeleteModal}
        confirmationTitle="Delete User"
        confirmationText="Are you sure you want to delete this user? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={handleModalClick}
      />
    </Link>
  );
};

export default Card;
