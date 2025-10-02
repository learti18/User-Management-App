import type { UserFormData } from "../types/user";
import { api } from "./api";

export const fetchUsers = async () => {
  const response = await api.get("/users");

  if (response.status !== 200) {
    throw new Error("Failed to fetch users");
  }
  return response.data;
};

export const fetchUserById = async (id: string) => {
  const response = await api.get(`/users/${id}`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch user");
  }

  return response.data;
};

export const addUser = async (userData: UserFormData) => {
  const response = await api.post("/users", userData);

  if (response.status !== 201) {
    throw new Error("Failed to add user");
  }

  return response.data;
};
