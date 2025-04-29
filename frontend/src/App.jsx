import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Client from './components/Crud_client/client.jsx'
import Vehicle from './components/ vehicles/vehicle.jsx'
import Layout from './components/layout.jsx'
import Repair from './components/repairs/repairs.jsx'
import './App.css'

function Home() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src="/images/logo.png" className="logo react" alt="React logo" />
      </a>
      <h1>TALLER AUTOFIX</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clientes" element={<Client />} />
          <Route path="vehiculos" element={<Vehicle />} />
          <Route path="reparaciones" element={<Repair/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App