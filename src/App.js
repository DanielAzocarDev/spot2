import { useEffect, useState } from 'react';

import Layout from './components/layout/Layout';
import Map from './components/map/Map';

import './App.css';

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import axios from 'axios';


function App() {

  const [mapZoom, setMapZoom] = useState(15)
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <h2>Is Loading</h2>;
      case Status.FAILURE:
        return <h2>Upss something happen</h2>;
      case Status.SUCCESS:
        return <Map zoom={mapZoom} center={{lat:19.42847, lng: -99.12766}}/>;
      default:
        return 'hola'
    }
  };

  useEffect(() => {
    const getSpots = () => {

      const configs = {
        headers: {
            Authorization: "Bearer X|YhrV99YWcDm2UOGYYNM6WDcbbwId8R2mfJf3B9BM",
            Token: '7|7zclHNTwRvbbAawKJ8BKY0MOc9sFzPX89Bo83G5u'
        }
    }
    
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/spots`, {headers: {
        Authorization: "Bearer X|YhrV99YWcDm2UOGYYNM6WDcbbwId8R2mfJf3B9BM",
        Token: '7|7zclHNTwRvbbAawKJ8BKY0MOc9sFzPX89Bo83G5u'
    }}).then(res => console.log(res)).catch(error => console.log(error))
    }

    getSpots()
  },[])
  return (
    <Layout mapZoom={setMapZoom}>
      <Wrapper apiKey={process.env.REACT_APP_NOT_SECRET_CODE} render={render}/>
    </Layout>
  );
}

export default App;
