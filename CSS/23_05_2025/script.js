async function extraerEtiqueta(url, selector) {
  // 1. Traer el HTML de la página
  const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error('Error al cargar la página');
  const textoHtml = await respuesta.text();

  // 2. Parsear el HTML a un DOM manipulable
  const parser = new DOMParser();
  const doc = parser.parseFromString(textoHtml, 'text/html');

  // 3. Seleccionar la etiqueta que quieras (por ejemplo, un <h1>)
  const elemento = doc.querySelector(selector);
  if (!elemento) {
    console.warn('No se encontró ningún elemento con ese selector');
    return null;
  }

  // 4. Devolver su contenido (texto interno o HTML)
  return elemento.textContent.trim();
}

// Uso:
extraerEtiqueta('https://www.mercadona.es/', 'h1.hero-header__title')
  .then(texto => console.log('Título principal:', texto))
  .catch(err => console.error(err));
