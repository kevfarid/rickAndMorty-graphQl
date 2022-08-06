import React, { useEffect, useState } from 'react';
import Characters from '../components/Characters';
import LayoutPage from '../components/LayoutPage';
import useQuery from '../hooks/useQuery';

export default function CharactersPage() {
  const createObj = (page = 1) => ({
    query: {
      [`characters(page: ${page})`]: {
        info: ['pages', 'next'],
        results: ['id', 'name', 'status', 'image', 'origin { name }', 'species'],
      },
    },
  });

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(createObj(page));

  useEffect(() => {
    setQuery(createObj(page));
  }, [page]);

  const { data } = useQuery(query);

  return (
    <LayoutPage title="Characters">
      <Characters list={data?.characters.results} />
      <select onChange={(e) => setPage(e.target.value)}>
        {Array.from(Array(data?.characters.info.pages).keys()).map((i) => (
          <option key={i} value={i + 1}>
            Page {i + 1}
          </option>
        ))}
      </select>
    </LayoutPage>
  );
}
