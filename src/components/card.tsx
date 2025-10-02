import React from "react";
import type { User } from "../types/user";
import { Link } from "react-router-dom";
import ActionMenu from "./actionMenu";
import Avatar from "./avatar";

export default function Card({ id, name, email, company }: User) {
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

        <ActionMenu id={id} className="ml-auto self-start" />
      </div>

      {/* Card Footer */}
      <div className="mt-auto flex justify-between items-center">
        <p className="flex flex-col text-gray-400">
          Company{" "}
          <span className="text-gray-900 font-medium">{company.name}</span>
        </p>
      </div>
    </Link>
  );
}
