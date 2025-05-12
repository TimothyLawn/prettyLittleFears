import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './../Dashboard';
import ClientList from './../ClientList';
import Client from "./../Mimo"
import Tabular from "./components/Tabular"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/client" element={<ClientList/>}/>
        <Route path="/" element={<Dashboard />} />
        <Route path='/clientmimo' element={<Client/>}/>
        <Route path='/tabular-form' element={<Tabular/>}/>
      </Routes>
    </Router>
  );
}

export default App;
