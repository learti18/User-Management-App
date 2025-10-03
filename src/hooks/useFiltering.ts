import type { User } from "../types/user";

export const useFiltering = (
  data: User[],
  query: string,
  sortOrder: string,
  setSearchParams: (newParams: URLSearchParams) => void
) => {
  const updateURLParams = (newQuery: string, newSort: string) => {
    const params = new URLSearchParams();

    if (newQuery.trim()) {
      params.set("query", newQuery);
    }
    if (newSort && newSort !== "") {
      params.set("sort", newSort);
    }

    if (!newQuery.trim() && (!newSort || newSort === "")) {
      setSearchParams(new URLSearchParams());
    } else {
      setSearchParams(params);
    }
  };

  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "descending") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return { sortedData, updateURLParams };
};
