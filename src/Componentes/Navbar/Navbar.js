import React from "react";
import logo from '../../assets/logo.png'
import './Navbar.css'
import Cartwidget from './Cartwidget'
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Link
  } from "react-router-dom";

const Navbar = () => {
    const categorias = [
        { nombre: "tinto", id: 0, ruta: "/categoria/electronics" },
        { nombre: "blanco", id: 1, ruta: "/categoria/jewelery" },
        { nombre: "espumante", id: 2, ruta: "/categoria/electronics" },
      ];
    return (
        <header>
        <Link to="/"><img src={logo} alt="tienda online" /></Link>
        <h1>Ronzoni ventas OnLine</h1>
        <nav>
        {categorias.map((categoria) => {
          return (
            <NavLink
              key={categoria.id}
              to={categoria.ruta}
            >
              {categoria.nombre}
            </NavLink>
          );
        })}
      </nav>
        <Cartwidget/>
        </header>
      );
}

export default Navbar