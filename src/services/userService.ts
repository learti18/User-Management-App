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
