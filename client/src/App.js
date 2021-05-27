import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [latLon, setLatLon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/geocode?city=Murfreesboro&state=TN').catch(console.log);

      setLatLon(result);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {renderLatLon(latLon)}
      </header>
    </div>
  );
}

const renderLatLon = latLon => {
  if (latLon && latLon.status === 200) {
    return (
      <div>
        <span>{latLon.data.lat}</span> <span>{latLon.data.lon}</span>
      </div>
    );
  }
  return null;
};

export default App;
