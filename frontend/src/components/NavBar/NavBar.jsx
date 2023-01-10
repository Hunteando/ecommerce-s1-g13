import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Cargar producto</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">

                            <Link to="/nuevaImagen" className="nav-link">Agregar su imagen</Link>
                            <Link to="/" className="nav-link">Volver a producto</Link>
                            <Link to="/productos" className="nav-link">Ver productos</Link>
                        </div>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar