import React, { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";
import { Menu } from "lucide-react";

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 my-5">
          <button className="bg-white p-2 rounded-md border border-gray-300 text-gray-600 hover:border-gray-400 transition-colors duration-200 cursor-pointer">
            <Menu />
          </button>
          <input
            type="text"
            placeholder="Search users..."
            className="flex-1 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-gray-400"
          />
          <button className="tracking-tight bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-colors duration-200">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
}
