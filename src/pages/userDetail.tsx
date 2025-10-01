import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../types/user";
import { Loader } from "lucide-react";
import axios from "axios";

export default function UserDetail() {
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get<User>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
    };
    fetchUser();
  }, [id]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 hover:underline mb-4 inline-block"
        >
          &larr; Back to Home
        </button>
        <h1 className="text-gray-900 text-3xl font-medium mb-10">
          User Profile
        </h1>
        {user ? (
          <div className="bg-white text-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
            <p className="mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-2">
              <strong>Company:</strong> {user.company.name}
            </p>
            <p className="mb-2">
              <strong>Catch Phrase:</strong> {user.company.catchPhrase}
            </p>
            <p className="mb-2">
              <strong>BS:</strong> {user.company.bs}
            </p>
          </div>
        ) : (
          <Loader className="inline-block mr-2 animate-spin flex justify-center items-center" />
        )}
      </div>
    </div>
  );
}
