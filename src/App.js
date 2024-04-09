import React, { useState } from 'react';
import './App.css';
import RestaurantCard from './components/Mainpage/RestaurantData';
import Navbar from "./components/Navbar/Navbar";
import InfoBox from './components/Mainpage/Infobox';

function App() {
  return (
  <>
    <Navbar />
    <div className="info">
      <InfoBox />
    </div>
    <div className="wrapper">
      <RestaurantCard />
    </div>
  </>
  );
}

export default App;

