import React from 'react';

const FormularioNetlify = () => {
  return (
    <form name="contacto" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contacto" />

      <div className="mb-3">
        <label>Nombre:</label>
        <input type="text" name="nombre" className="form-control" required />
      </div>

      <div className="mb-3">
        <label>Email:</label>
        <input type="email" name="email" className="form-control" required />
      </div>

      <div className="mb-3">
        <label>Mensaje:</label>
        <textarea name="mensaje" className="form-control" required></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default FormularioNetlify;