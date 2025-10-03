import React, { useEffect } from "react";
import Card from "../components/card";
import { Loader } from "lucide-react";
import { useFiltering } from "../hooks/useFiltering";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchUsersThunk } from "../store/user/userSlice";
import DropDown from "../components/ui/dropDown";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const query = searchParams.get("query") || "";
  const sortOrder = searchParams.get("sort") || "";
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: users,
    loading,
    error,
  } = useSelector((state: RootState) => state.users);

  const { sortedData: filteredUsers, updateURLParams } = useFiltering(
    users || [],
    query,
    sortOrder,
    setSearchParams
  );

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsersThunk());
    }
  }, [dispatch, users.length]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateURLParams(e.target.value, sortOrder);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateURLParams(query, e.target.value);
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Filtering section */}
        <div className="flex items-center gap-2 my-5">
          <DropDown
            options={[
              { label: "Sort by Relevance", value: "" },
              { label: "Sort by Name (A-Z)", value: "ascending" },
              { label: "Sort by Name (Z-A)", value: "descending" },
            ]}
            name="sort"
            defaultValue={sortOrder}
            onChange={handleSortChange}
          />
          <input
            type="text"
            placeholder="Search users..."
            className="flex-1 bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-gray-400"
            value={query}
            onChange={handleSearchChange}
            name="search"
          />
        </div>

        {/* Users section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <div className="col-span-full flex justify-center items-center">
              <Loader className="animate-spin text-gray-500" />
            </div>
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error: {error}
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No users found.
            </div>
          ) : (
            filteredUsers.map((user) => <Card key={user.id} {...user} />)
          )}
        </div>
      </div>
    </div>
  );
}
