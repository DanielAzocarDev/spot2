import { useEffect, useState } from 'react';
//Router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//Components
import Layout from './components/layout/Layout';
import Map from './components/map/Map';
import Spot from './components/spot/Spot';
//GoogleMaps
import {useLoadScript} from '@react-google-maps/api'
//Axios
import axios from 'axios';
//Styles
import './App.css';



function App() {

  const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_NOT_SECRET_CODE})
  const [spots, setSpots] = useState([])
  const [spot, setSpot] = useState({})

  useEffect(() => {
    const getSpots = () => {
    
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/spots`, {headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    }}).then(res => {
      const results = res.data.data.spots
      setSpots(results)
    }).catch(error => console.log(error))
    }

    getSpots()
  },[])

  const getSpotData = (spot_id) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/spots/${spot_id}`, {headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    }}).then(res => {
      setSpot(res.data.data)
    }).catch(error => console.log(error))
  }
  
  console.log(spot)
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={!isLoaded ? <h1>Loading...</h1> : <Map spots={spots} spotDetails={getSpotData}/>} />
          <Route path="invoices/:invoiceId" element={<Spot spot={spot}/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
