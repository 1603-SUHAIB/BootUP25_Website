import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Loader from './components/Loading/Hamsterloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
