import { useEffect, useState } from "react";

type Params = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTION";
  url: string;
};

export default function useApi(params: Params) {
  const { url, method } = params;
  const [error, setError] = useState(null);
  const [result, setResult] = useState<Response | null>(null);
  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url, { method, signal: controller.signal });
        setResult(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  });

  return [error, result] as const;
}
