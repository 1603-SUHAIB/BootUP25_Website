import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="main-content">
          <h1>Welcome to My App 🚀</h1>
          <p>Your main content appears here!</p>
        </div>
      )}
    </>
  );
};

export default App;
