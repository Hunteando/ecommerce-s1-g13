import React from "react";
import "./App.css";
import "boxicons";
import NavBar from "./components/NavBar/NavBar";
import NuevoProducto from "./components/NuevoProducto/NuevoProducto";
import { Routes, Route } from "react-router-dom";
import { NuevaImagen } from "./components/nuevaImagen/NuevaImagen";
import VerProductos from "./components/VerProductos/VerProductos";
import ImagesUploadPage from "./pages/ImagesUploadPage";
import ImagesByProductIdPage from "./pages/ImagesByProductIdPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<NuevoProducto />}></Route>
        <Route path="/nuevaImagen" element={<NuevaImagen />}></Route>
        <Route path="/productos" element={<VerProductos />}></Route>
        <Route path="/images-upload" element={<ImagesUploadPage />} />
        <Route path="/images" element={<ImagesByProductIdPage />} />
      </Routes>
    </div>
  );
}

export default App;
