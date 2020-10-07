import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Ábaco
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact activeClassName="active">
                Inicial
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" activeClassName="active">
                Portfólio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/produtos" activeClassName="active">
                Produtos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contato" activeClassName="active">
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
