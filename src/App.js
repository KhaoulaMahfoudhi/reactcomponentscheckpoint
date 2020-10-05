import React from 'react';
import './App.css';
import Fullname from './Component/Profile/FullName';
import Photo from './Component/Profile/ProfilPhoto';
import Address from './Component/Profile/Address';
import Header from './Component/Profile/Header';


function App() {
  return (
    <div className="App">
       <Header/>
      <Photo/>
      <Fullname/>
      <Address/>
    </div>
  );
}

export default App;
