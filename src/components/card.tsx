import React, { useState } from "react";
import type { User } from "../types/user";
import { Link } from "react-router-dom";
import { EllipsisVertical, MoveUpRight } from "lucide-react";

export default function Card({ id, name, email, company }: User) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <div
      className="bg-white border border-gray-200 rounded-sm p-4 h-52 shadow-xs hover:border-gray-400
                     transition-colors duration-300 flex flex-col"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-black text-white rounded-sm flex items-center justify-center font-bold text-lg">
          {name.charAt(0) + name.charAt(1)}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 line-clamp-1 leading-none">
            {name}
          </h1>
          <p className="text-gray-400">{email}</p>
        </div>
        <Link
          to={`/user/${id}`}
          className="ml-auto text-gray-400 hover:text-gray-600 cursor-pointer p-4 -m-4"
        >
          <MoveUpRight />
        </Link>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <p className="flex flex-col text-gray-400">
          Company{" "}
          <span className="text-gray-900 font-medium">{company.name}</span>
        </p>
        <div className="relative self-end">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <EllipsisVertical size={20} />
          </button>
          {menu && (
            <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-2 right-4 w-48 z-50">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setMenu(false);
                }}
              >
                Edit
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setMenu(false);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
