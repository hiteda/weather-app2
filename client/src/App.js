import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Layout from './components/Layout';

const App = () => {
  /*const [latLon, setLatLon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/geocode?city=Murfreesboro&state=TN').catch(console.log);

      setLatLon(result);
    };
    fetchData();
  }, []);*/

  return (
    <div>
      <Layout />
    </div>
  );
}

/*const renderLatLon = latLon => {
  if (latLon && latLon.status === 200) {
    return (
      <div>
        <span>{latLon.data.lat}</span> <span>{latLon.data.lon}</span>
      </div>
    );
  }
  return null;
};*/

export default App;
