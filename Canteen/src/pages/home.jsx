import React, { useEffect } from "react";

export default function home () {
    useEffect (() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container-fluid">
            <nav class={"navbar "+ navbar.myNavbar} role="navigation" aria-label="main navigation">
                <a href="#home" onClick={()=>window.location.href = "#home"}>Home</a>
                <a href="#menu" onClick={()=>window.location.hash = '#/menu'}>{navbar.Menu}</a>
                <a href="/order" target="_blank">{navbar.Order}</a>
            </nav>
            
            <section id="home" className="hero is-fullheight is-error is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                    </div>
                </div>
            </section>
        </div>
)};