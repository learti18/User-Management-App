import React from "react";
import Card from "../components/card";
import { ChevronDown, Loader } from "lucide-react";
import type { User } from "../types/user";
import { fetchUsers } from "../services/userService";
import { useFetch } from "../hooks/useFetch";
import { useFiltering } from "../hooks/useFiltering";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const { data: users, error, loading } = useFetch<User[]>(fetchUsers);
  const [searchParams, setSearchParams] = useSearchParams("");
  const query = searchParams.get("query") || "";
  const sortOrder = searchParams.get("sort") || "";

  const filteredUsers = useFiltering(users || [], query, sortOrder);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (e.target instanceof HTMLInputElement) {
        params.set("query", e.target.value);
      } else {
        params.set("sort", e.target.value);
      }
      return params;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-600 text-lg">
          <Loader className="animate-spin mx-auto mb-2" />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600 text-lg">
          Error fetching users: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 my-5">
          <div className="relative">
            <select
              className="bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-gray-400 appearance-none cursor-pointer"
              value={sortOrder}
              onChange={handleChange}
              name="sort"
            >
              <option value="" disabled>
                Sort
              </option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <input
            type="text"
            placeholder="Search users..."
            className="flex-1 bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-gray-400"
            value={query}
            onChange={handleChange}
            name="search"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.length === 0 ? (
            <p className="text-gray-600">No users found.</p>
          ) : (
            filteredUsers.map((user) => <Card key={user.id} {...user} />)
          )}
        </div>
      </div>
    </div>
  );
}
