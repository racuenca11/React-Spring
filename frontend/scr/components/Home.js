import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Reserva de Canchas de Fútbol</h1>
      <p>
        Bienvenido a la plataforma para reservar canchas de fútbol. Navega para ver las canchas disponibles o iniciar sesión.
      </p>
      <p><Link to="/canchas">Ver Canchas</Link></p>
      <p><Link to="/login">Iniciar Sesión</Link></p>
    </div>
  );
}

export default Home;
