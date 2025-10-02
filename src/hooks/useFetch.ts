import { useEffect, useState } from "react";

export const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  autofetch = true
) => {
  const [data, setData] = useState<T | null>([] as T | null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction();
      setData(result);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error("An unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    if (autofetch) {
      fetchData();
    }
  }, []);

  return { data, loading, error, refetch: fetchData, reset };
};
