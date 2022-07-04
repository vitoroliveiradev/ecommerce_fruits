import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  
  
  useEffect(() => {

    const getProducts = async () => {
      
      setLoading(true);
      try {
        
        const res = await fetch(url);
        const json = await res.json();

        setData(json);

      } catch (error) {
        console.log(error.message);
        setError(error.message)
      }
      setLoading(false);

    }

    getProducts();
    
  }, [url])

  return {
    data,
    loading,
    error
  }

}