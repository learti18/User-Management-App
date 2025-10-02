import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type ActionMenuProps = {
  id: number;
  className?: string;
};

export default function ActionMenu({ id, className }: ActionMenuProps) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMenu(!menu);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setMenu(false);

    const action = (e.target as HTMLElement).innerText;
    if (action.includes("Edit")) {
      navigate(`/edit-user/${id}`);
    } else if (action.includes("Delete")) {
      alert(`User with ID ${id} deleted! (not really, just a demo)`);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".action-menu")) {
      setMenu(false);
    }
  };

  React.useEffect(() => {
    if (menu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menu]);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleMenu}
        className="p-3 -m-3 relative text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        <EllipsisVertical size={20} />
      </button>
      {menu && (
        <div className="absolute bg-white border border-gray-200 rounded shadow-lg mt-2 right-4 w-48 z-50">
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleMenuClick}
          >
            <Pencil size={16} className="inline mr-2" />
            Edit
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleMenuClick}
          >
            <Trash2 size={16} className="inline mr-2" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
