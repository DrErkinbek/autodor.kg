import React from 'react';

const Header = () => {
    return(
        <>
        <nav className="blue darken-4" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" href="/" className="brand-logo">АВТОДОР</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/" className="yellow-text nav-link">Главная</a></li>
                <li><a href="/brands" className="yellow-text nav-link">Аккумуляторы</a></li>
                <li><a href="/tires" className="yellow-text nav-link">Шины</a></li>
                <li><a href="/disks" className="yellow-text nav-link">Диски</a></li>
                <li><a href="/accessories" className="yellow-text nav-link">Автоаксессуары</a></li>
            </ul>
            <ul id="nav-mobile" className="sidenav blue darken-4">
                <li><a href="/" className="yellow-text nav-link">Главная</a></li>
                <li><a href="/brands" className="yellow-text nav-link">Аккумуляторы</a></li>
                <li><a href="/tires" className="yellow-text nav-link">Шины</a></li>
                <li><a href="/disks" className="yellow-text nav-link">Диски</a></li>
                <li><a href="/accessories" className="yellow-text nav-link">Автоаксессуары</a></li>
            </ul>
            <a href="#!" data-target="nav-mobile" className="sidenav-trigger pulse"><i className="material-icons white-text">menu</i></a>
            </div>
        </nav>
        </>
    )
}

export default Header;