import React from "react";
import Portada from "../../../../images/Portada.png";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="inicio">
      <img src={Portada} alt="Inicio" />
      <Link to={"/"}>
        <h1>Inicio</h1>
      </Link>
      <Link to={"/productos"}>
        <h1>Productos</h1>
      </Link>
    </div>
  );
}
