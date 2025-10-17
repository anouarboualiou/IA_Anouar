import React from "react";

import florImg from "../assets/fotoFlor.jpeg"

export default function CardsSection() {
  const cards = [
    { icon: "bi-tree", title: "Bosques sostenibles", text: "Descubre cómo cuidar los bosques y mantener su biodiversidad." },
    { icon: "bi-flower1", title: "Jardines ecológicos", text: "Aprende a cultivar jardines respetuosos con el medio ambiente." },
    { icon: "bi-droplet", title: "Ahorro de agua", text: "Consejos para un uso responsable del agua en tu día a día." },
    { icon: "bi-recycle", title: "Reciclaje y reutilización", text: "Reduce tu huella ambiental mediante buenas prácticas de reciclaje." }
  ];

  return (
    <section className="py-5 text-center" style={{ backgroundColor: "#e8f5e9" }}>
      <div className="container">
        <h2 className="mb-4 text-success">Explora la Naturaleza</h2>
        <div className="row g-4">
          {cards.map((card, index) => (
            <div className="col-md-3" key={index}>
              <div className="card h-100 p-3 border-0 shadow-sm">
                <img src={florImg} alt={card.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-success">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}