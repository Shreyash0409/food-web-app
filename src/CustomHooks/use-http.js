import React, { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpRequest = useCallback(async (requireConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requireConfig.url, {
        method: requireConfig.method ? requireConfig.method : "GET",
        body: requireConfig.body ? requireConfig.body : null,
        headers: requireConfig.headers ? requireConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const responseData = await response.json();
      applyData(responseData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false); 
  }, []);
  return {
    isLoading,
    error,
    httpRequest,
  };
};
export default useHttp;
