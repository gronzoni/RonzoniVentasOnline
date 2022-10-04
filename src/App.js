import React from "react";
import './App.css'
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer from "./Componentes/ItemListContainer";

const App = () => {
  const mensaje = "Guillermo";
  return (
    <>
      <Navbar />
      <ItemListContainer greetings={mensaje}/>
    
    </>
    );
  };
export default App