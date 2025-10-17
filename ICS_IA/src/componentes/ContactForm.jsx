import React from "react";

export default function ContactForm() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h3 className="text-success text-center mb-4">Solicita más información</h3>

        {/* Formulario compatible con Netlify */}
        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          className="col-md-6 mx-auto needs-validation"
          noValidate
        >
          {/* Campo oculto requerido por Netlify */}
          <input type="hidden" name="form-name" value="contacto" />

          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Tu nombre"
              required
            />
            <div className="invalid-feedback">Por favor, introduce tu nombre.</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="nombre@ejemplo.com"
              required
            />
            <div className="invalid-feedback">Introduce un correo electrónico válido.</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              name="mensaje"
              className="form-control"
              rows="4"
              placeholder="Escribe tu consulta aquí..."
              required
            ></textarea>
            <div className="invalid-feedback">Escribe un mensaje antes de enviar.</div>
          </div>

          <button type="submit" className="btn btn-success w-100">Enviar solicitud</button>
        </form>
      </div>
    </section>
  );
}