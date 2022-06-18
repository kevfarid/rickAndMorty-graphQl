import Header from './components/Header';
import useQuery from './hooks/useQuery';

function App() {
  const obj = {
    query: {
      'characters(page: 3, filter: { name: "rick" })': {
        info: ['count'],
        results: ['name', 'status'],
      },
      'location(id: 1)': ['id'],
      'episodesByIds(ids: [1, 2])': ['id'],
    },
  };

  const { data } = useQuery(obj);

  return (
    <div>
      <Header />
      {data?.characters.results.map((result) => (
        <ul>
          <li>
            <b>Name: </b>
            {result.name}
          </li>
          <li>
            <b>Status: </b>
            {result.status}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
