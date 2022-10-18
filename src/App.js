import React from "react";
import './App.css'
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer from "./Componentes/ItemListContainer";
import { ItemDetailContainer } from "./Componentes/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const mensaje = "Guillermo";
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer greeting={mensaje} />}/>
        </Routes>
      </Router>
    </>
    );
  };
export default App