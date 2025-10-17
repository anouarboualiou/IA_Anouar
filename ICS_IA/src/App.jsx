import React from "react";
import Navbar from "./componentes/navbar";
import CardsSection from "./componentes/CardsSection";
import ContactForm from "./componentes/ContactForm";
import Footer from "./componentes/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <>
      <Navbar />
      <CardsSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;