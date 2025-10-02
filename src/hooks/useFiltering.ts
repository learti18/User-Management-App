import type { User } from "../types/user";

export const useFiltering = (
  data: User[],
  query: string,
  sortOrder: string
) => {
  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  return sortedData;
};
