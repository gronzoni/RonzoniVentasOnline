import React from "react";
import logo from '../../assets/logo.png'
import './Navbar.css'
import Cartwidget from './Cartwidget'

const Navbar = () => {
    return (
    <header>
        <img src={logo} alt="tienda online" />
        <h1>Ronzoni ventas OnLine</h1>
        <nav>
            <a href="">Categoria 1</a>
            <a href="">Categoria 2</a>
            <a href="">Categoria 3</a>
        </nav>
        
<Cartwidget/>

    </header>

     
    )
}
export default Navbar