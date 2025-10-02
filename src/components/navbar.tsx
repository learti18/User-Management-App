import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-50 p-3 border-b border-gray-300 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <h1 className="text-gray-800 text-2xl font-bold">Profiles</h1>
        <Link
          to="/add-user"
          className="tracking-tight bg-black hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors duration-200 cursor-pointer"
        >
          Add User
        </Link>
      </div>
    </div>
  );
}
