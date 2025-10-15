let seleccionadas = [];

fetch('catalogo_sesiones.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('sesiones');
    data.forEach(session => {
      const div = document.createElement('div');
      div.className = 'session';
      div.innerHTML = `
        <h3>${session.titulo}</h3>
        <p><strong>Ponente:</strong> ${session.ponente}</p>
        <p><strong>Hora:</strong> ${session.hora}</p>
        <p><strong>Tema:</strong> ${session.tema}</p>
        <button onclick="toggleSeleccion('${session.id}', '${session.titulo}')">Marcar</button>
      `;
      container.appendChild(div);
    });
  });

function toggleSeleccion(id, titulo) {
  const index = seleccionadas.findIndex(s => s.id === id);
  if (index >= 0) {
    seleccionadas.splice(index, 1);
  } else {
    seleccionadas.push({ id, titulo });
  }
}

function mostrarSeleccion() {
  const div = document.getElementById('seleccion');
  div.innerHTML = '<h2>Sesiones seleccionadas:</h2>' +
    seleccionadas.map(s => `<li>${s.titulo}</li>`).join('');
}
