import React from 'react';
import { Routes, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.scss';
import Organization from './routes/organization/Organization';
import Header from './components/header/Header';
import Claim from './routes/claim/Claim';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Organization />} />
        <Route path='/claim' element={<Claim />} />
      </Routes>
    </div>
  );
}

export default App;
