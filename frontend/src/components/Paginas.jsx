import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosLista } from "./page/productos";



export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route exact path="/" element={<Inicio/>}></Route>
        <Route exact path="/productos" element={<ProductosLista/>}></Route>
        {/* <Route path="/producto/:id" exact component={ProductosDetalles} /> */}
      </Routes>
    </section>
  );
};
