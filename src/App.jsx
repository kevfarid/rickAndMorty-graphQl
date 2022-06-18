import Header from './components/Header';
import generateQuery from './utils/generateQuery';

function App() {
  const obj = {
    query: {
      'characters(page: 2, filter: { name: "rick" })': {
        info: [ 'count' ],
        results: {
          name: 'string',
        },
      },
      'location(id: 1)': {
        id: 'string',
      },
      'episodesByIds(ids: [1, 2])': {
        id: 'string',
      },
    },
  };

  generateQuery(obj);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
