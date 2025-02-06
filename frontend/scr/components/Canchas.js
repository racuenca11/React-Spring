import React, { useState, useEffect } from 'react';

function Canchas() {
  const [canchas, setCanchas] = useState([]);

  useEffect(() => {
    // Asegurarse de que el back-end se esté ejecutando en http://localhost:8080
    fetch('http://localhost:8080/api/canchas')
      .then(response => response.json())
      .then(data => setCanchas(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  return (
    <div>
      <h1>Canchas Disponibles</h1>
      {canchas.length === 0 ? (
        <p>Cargando canchas...</p>
      ) : (
        <ul>
          {canchas.map(c => (
            <li key={c.id}>
              <h3>{c.nombre}</h3>
              <p>Ubicación: {c.ubicacion}</p>
              <p>Horarios disponibles: {c.horariosDisponibles}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Canchas;
