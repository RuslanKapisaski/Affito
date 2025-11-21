import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div>
      {!backendData ? (
        <p>Loading ....</p>
      ) : (
        backendData.hotels.map((hotel, i) => <p key={i}>{hotel}</p>)
      )}
    </div>
  );
}

export default App;
