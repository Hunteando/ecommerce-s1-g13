import React from "react";
// import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.jpg";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
        <img src={Logo} alt="logo" width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  );
};