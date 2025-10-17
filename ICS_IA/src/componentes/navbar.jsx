import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2e7d32" }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">Naturaleza Viva</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Recursos</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
