import React from "react";
import './_Header.scss'
const Header=()=>{
    return (
        <header className="header-container">
            <div className="logo">
            <a href="" >Logo</a>
            </div>
            <div className="header">
            <a href="">Design</a>
            <a href="">Art</a>
            <a href="">About</a>
            <a href="">Contact</a>
            </div>
            <div className="icons">
                <a href="">i</a>
                <a href="">i</a>
                <a href="">i</a>
            </div>
        </header>
    )
}
export default Header