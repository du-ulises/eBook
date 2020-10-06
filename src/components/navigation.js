import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/web-design" exact>
                  Diseño Web
                </NavLink>
              </li>
              <li>
                <NavLink to="/social-media-design" exact>
                  Diseño de Redes Sociales
                </NavLink>
              </li>
              <li>
                <NavLink to="/renders" exact>
                  Logos, Carteles, Renders
                </NavLink>
              </li>
              <li>
                <NavLink to="/illustrations" exact>
                  Ilustraciones-Bocetos
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>LMICEB@gmail.com</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Ubicación</li>
                <li>Morelia, Michoacán</li>
                <li>México</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacidad y cookies</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Teléfono</li>
                <li>+52 1 443 342 8793</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
