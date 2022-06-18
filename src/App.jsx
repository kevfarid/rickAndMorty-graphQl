import Header from './components/Header';
import useQuery from './components/hooks/useQuery';
import generateQuery from './utils/generateQuery';

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

  const { data, isLoading } = useQuery(obj);

  console.log(data, isLoading);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
