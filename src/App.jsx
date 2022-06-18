import Header from './components/Header';

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

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
