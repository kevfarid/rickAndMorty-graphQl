import { useState, useCallback, useEffect } from 'react';
import generateQuery from '../utils/generateQuery';
const URL = 'https://rickandmortyapi.com/graphql';

export default function useQuery(query) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const body = generateQuery(query);

  const getData = useCallback(() => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.error) {
          setError(resp.error);
        }

        if (resp.data) {
          setData(resp.data);
        }
      })
      .finally(() => setIsLoading(false));
  }, [data, error]);

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
