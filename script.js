document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("lista-articulos");
    const inputBusqueda = document.getElementById("busqueda");
  
    fetch('data/posts.json')
      .then(res => res.json())
      .then(posts => {
        mostrarArticulos(posts);
  
        inputBusqueda.addEventListener("input", () => {
          const valor = inputBusqueda.value.toLowerCase();
          const filtrados = posts.filter(p =>
            p.titulo.toLowerCase().includes(valor) ||
            p.contenido.toLowerCase().includes(valor) ||
            p.etiquetas.join(" ").toLowerCase().includes(valor)
          );
          mostrarArticulos(filtrados);
        });
      });
  
    function mostrarArticulos(articulos) {
      contenedor.innerHTML = "";
      articulos.forEach(post => {
        const art = document.createElement("article");
        art.innerHTML = `<h2>${post.titulo}</h2><p>${post.contenido}</p><small>${post.etiquetas.join(", ")}</small>`;
        contenedor.appendChild(art);
      });
    }
  });
  