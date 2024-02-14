import React, { useState } from 'react';

const Componente = () => {
  const [state, setState] = useState({ msj: "(from changed state)" });

  const mostrarMensaje = () => {
    alert(state.msj);
  };

  return (
    <div>
      <p>Estado: {state.msj}</p>
      <button onClick={mostrarMensaje}>Mostrar Mensaje</button>
    </div>
  );
};

export default Componente;
