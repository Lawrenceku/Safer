import React from "react";
import { render } from "react-dom";

function Navbar(){
    return(
        <>
        <section className="menu" class='menu'>
        <nav class="menu-items">
            <h3 id="logo">DOWNLOAD</h3>
            <a class="nav" href="#">Home</a>
            <a class="nav" href="#">Product</a>
            <a class="nav" href="#">FAQ</a>
            <a class="nav" href="#">Contact</a>
        </nav>
    </section>
    </>
    )
}

export default Navbar