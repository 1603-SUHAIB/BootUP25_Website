import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TetrominoLoader from "./components/Tetromino";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <>
  {loading ? <TetrominoLoader /> : <Home />}</>;
}

export default App;
