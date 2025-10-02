import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../types/user";
import { ArrowLeft, Globe, Loader, Mail, MapPin, Phone } from "lucide-react";
import { fetchUserById } from "../services/userService";
import { useFetch } from "../hooks/useFetch";
import Avatar from "../components/avatar";

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const {
    data: user,
    error,
    loading,
  } = useFetch<User>(() => fetchUserById(id!));
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-600 text-lg">Loading user details...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600 text-lg">
          Error fetching user details: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-black hover:text-gray-600 transition-colors duration-200 flex items-center cursor-pointer group transition-all duration-300"
        >
          <ArrowLeft className="inline-block mr-1 group-hover:-translate-x-1" />{" "}
          Back
        </button>
        <h1 className="text-gray-900 text-3xl font-semibold mb-4">
          User Profile
        </h1>

        {user ? (
          <div className="flex flex-col gap-4 bg-white text-gray-900 p-6 rounded border border-gray-300">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Avatar
                name={user.name}
                className="size-14 md:size-16 text-2xl"
              />
              <div>
                <h2 className="text-3xl font-bold leading-none">{user.name}</h2>
                <p className="text-gray-600">{user.company?.name}</p>
              </div>
            </div>

            {/* Contact info */}
            <div className="border-y border-gray-300 mt-4 py-4">
              <p className="text-gray-400 text-sm mb-4">CONTACT</p>
              <div className="flex flex-col items-start gap-2 font-medium text-lg">
                <a
                  href={`mailto:${user.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-900 hover:underline"
                >
                  <Mail size={18} className="text-gray-500" /> {user.email}
                </a>
                <a
                  href={`tel:${user.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-900 hover:underline"
                >
                  <Phone size={18} className="text-gray-500" /> {user.phone}
                </a>
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-900 hover:underline"
                >
                  <Globe size={18} className="text-gray-500" /> {user.website}
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="text-gray-400 text-sm mb-4">ADDRESS</p>
              <div className="flex flex-row items-baseline gap-1">
                <MapPin size={18} className="text-gray-500" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${user.address?.geo?.lat},${user.address?.geo?.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-900 hover:underline"
                >
                  {user.address?.street}, {user.address?.suite}
                  <br />
                  {user.address?.city}, {user.address?.zipcode}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <Loader className="inline-block mr-2 animate-spin flex justify-center items-center" />
        )}
      </div>
    </div>
  );
}
