import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CharactersPage from './pages/Characters';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
