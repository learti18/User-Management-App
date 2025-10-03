import React from "react";

type ConfirmationModalProps = {
  confirmationTitle?: string;
  confirmationText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  isOpen?: boolean;
};

export default function ConfirmationModal({
  confirmationTitle,
  confirmationText,
  onConfirm,
  onCancel,
  isOpen,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <div className="bg-neutral-950 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-white">
          {confirmationTitle}
        </h2>
        <p className="mb-4 text-gray-200">{confirmationText}</p>
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-white cursor-pointer text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-200"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 cursor-pointer text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
