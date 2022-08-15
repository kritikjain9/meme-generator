import React from "react"
import face from "../images/troll-face.png"


/**
 * Challenge: Build the Header component
 */
export default function Navbar() {
    return (
        <header>
            <img src={face} className="nav-img" />
            <h2 className="nav-heading">Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}