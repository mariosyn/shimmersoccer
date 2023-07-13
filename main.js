const bicicletasContenedor = document.getElementById("bicicletas-contenedor");

// Obtener los datos de las bicicletas
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en una variable global
        window.bicicletas = data.bicicletas;
        // Mostrar las bicicletas en la página
        mostrarBicicletas();
    })
    .catch(error => console.error(error));

// Función para mostrar las bicicletas en la página
function mostrarBicicletas() {
  const bicicletasContenedor = document.getElementById("bicicletas-contenedor");
  bicicletasContenedor.innerHTML = "";

    // Obtener los valores seleccionados en los filtros
    const filtroModelo = document.getElementById("filtro-modelo").value;
    const filtroCategoria = document.getElementById("filtro-categoria").value;

    // Filtrar las bicicletas según los valores seleccionados
    const bicicletasFiltradas = bicicletas.filter(function(bicicleta) {
      if (filtroModelo !== "Todos" && filtroModelo !== bicicleta.modelo) {
          return false;
      }
      if (filtroCategoria !== "Todos" && filtroCategoria !== bicicleta.categoria) {
          return false;
      }
      return true;
  });




//bloque div imagenes texto y urls



// Mostrar las bicicletas filtradas
bicicletasFiltradas.forEach(function(bicicleta) {
  const bicicletaDiv = document.createElement("div");
  bicicletaDiv.classList.add("bicicleta");

  const bicicletaImg = document.createElement("img");
  bicicletaImg.src = bicicleta.img;
  bicicletaImg.alt = bicicleta.modelo;
  bicicletaImg.setAttribute("data-url", bicicleta.url); // Agrega el atributo data-url
  bicicletaDiv.appendChild(bicicletaImg);

  const bicicletaNombre = document.createElement("h3");
  bicicletaNombre.textContent = bicicleta.nombre;
  bicicletaDiv.appendChild(bicicletaNombre);

  const bicicletaPrecio = document.createElement("p");
  bicicletaPrecio.textContent = "" + bicicleta.precio;
  bicicletaDiv.appendChild(bicicletaPrecio);

  bicicletasContenedor.appendChild(bicicletaDiv);

  const bicicletaHistoria = document.createElement("h4");
  bicicletaHistoria.textContent = bicicleta.historia; // Toma el valor de historia del objeto JSON.
  bicicletaDiv.appendChild(bicicletaHistoria);

  // Crear el div que va a contener el botón
  const botonDiv = document.createElement("div");
  botonDiv.classList.add("divboton");  // Agregar la clase al div

  // Crear el botón con todo el contenido HTML que necesitas
  const bicicletaBoton = document.createElement("button");
  bicicletaBoton.classList.add("button");
  bicicletaBoton.innerHTML = `
    <span class="button__text">
      <span>B</span><span>u</span><span>y</span><span> </span><span>N</span><span>F</span><span>T</span>
    </span>
    <svg class="button__svg" role="presentational" viewBox="0 0 600 600">
                          <defs>
                            <clipPath id="myClip">
                              <rect x="0" y="0" width="100%" height="50%" />
                            </clipPath>
                          </defs>
                          <g clip-path="url(#myClip)">
                            <g id="money">
                              <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                              <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            </g>
                            <g id="creditcard">
                              <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                              <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
                              <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                            </g>
                          </g>
                          <g id="wallet">
                            <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#7b8f91" />
                            <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
                          </g>
                      
                        </svg>
  `;

  bicicletaBoton.addEventListener("click", function() {
      window.open(bicicleta.url, "_blank"); // Abre la URL en una nueva pestaña
  });

  botonDiv.appendChild(bicicletaBoton);
  bicicletaDiv.appendChild(botonDiv);
  bicicletasContenedor.appendChild(bicicletaDiv);
});
















// Recorrer cada bicicleta
window.bicicletas.forEach(function (bicicleta) {
  // Comprobar si la bicicleta cumple con los criterios de los filtros
  if ((filtroModelo === "" || bicicleta.modelo === filtroModelo) && (filtroCategoria === "" || bicicleta.categoria === filtroCategoria)) {
      // Crear un elemento div para la bicicleta
      const bicicletaDiv = document.createElement("div");
      bicicletaDiv.classList.add("bicicleta");

      // Crear una imagen para la bicicleta
      const bicicletaImg = document.createElement("img");
      bicicletaImg.src = bicicleta.img;
      bicicletaImg.alt = bicicleta.modelo;
      bicicletaDiv.appendChild(bicicletaImg);

      // Crear un h3 para el nombre de la bicicleta
      const bicicletaNombre = document.createElement("h3");
      bicicletaNombre.innerHTML = bicicleta.nombre;
      bicicletaDiv.appendChild(bicicletaNombre);

      // Crear un div para las estadísticas de la bicicleta
      const divStats = document.createElement("div");
      divStats.classList.add("divstats");

      // Crear un p para el modelo de la bicicleta
      const bicicletaModel = document.createElement("p");
      bicicletaModel.classList.add("bicicletamodel");  // Agregar la clase al p
      bicicletaModel.innerHTML = bicicleta.modelo;
      divStats.appendChild(bicicletaModel);

      // Crear un p para el precio de la bicicleta
      const bicicletaPrice = document.createElement("p");
      bicicletaPrice.classList.add("bicicletaPrice");  // Agregar la clase al p
      bicicletaPrice.innerHTML = "" + bicicleta.precio;
      divStats.appendChild(bicicletaPrice);

      // Crear un p para el #id de la bicicleta
      const idbici = document.createElement("p");
      idbici.classList.add("idbici");  // Agregar la clase al p
      idbici.innerHTML = bicicleta.id;
      divStats.appendChild(idbici);

// Crear un elemento div para la imagen tipo
const imgtipodiv = document.createElement("div");
imgtipodiv.classList.add("imgtipodiv");

// Crear una imagen para el tipo
const imgTipo = document.createElement("img");
imgTipo.src = bicicleta.imgtipo;
imgTipo.alt = bicicleta.tipo;
imgTipo.classList.add("imgtipo");  // Agregar la clase a img
imgtipodiv.appendChild(imgTipo);

// Añadir la imagen al div de las estadísticas
divStats.appendChild(imgtipodiv);



      // Agregar el div de estadísticas al div de la bicicleta
      bicicletaDiv.appendChild(divStats);

      const bicicletaHistory = document.createElement("h4");
      bicicletaHistory.innerHTML = bicicleta.historia; // Toma el valor de historia del objeto JSON.          
      bicicletaDiv.appendChild(bicicletaHistory);

      // Crear el div que va a contener el botón
      const botonDiv = document.createElement("div");
      botonDiv.classList.add("divboton");  // Agregar la clase al div

      // Crear el botón con todo el contenido HTML que necesitas
      const bicicletaBoton = document.createElement("button");
      bicicletaBoton.classList.add("button");
      bicicletaBoton.innerHTML = `
    <span class="button__text">
        <span>B</span><span>u</span><span>y</span><span> </span><span>N</span><span>F</span><span>T</span>
    </span>
    <svg class="button__svg" role="presentational" viewBox="0 0 600 600">
                          <defs>
                            <clipPath id="myClip">
                              <rect x="0" y="0" width="100%" height="50%" />
                            </clipPath>
                          </defs>
                          <g clip-path="url(#myClip)">
                            <g id="money">
                              <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                              <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            </g>
                            <g id="creditcard">
                              <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                              <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
                              <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                            </g>
                          </g>
                          <g id="wallet">
                            <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#7b8f91" />
                            <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
                          </g>
                      
                        </svg>
`;

// Agregar el evento al botón
bicicletaBoton.addEventListener("click", function() {
    window.open(bicicleta.url, "_blank");
});

// Agregar el botón al div
botonDiv.appendChild(bicicletaBoton);

// Agregar el div al bicicletaDiv
bicicletaDiv.appendChild(botonDiv);

// Agregar el elemento div a la página
bicicletasContenedor.appendChild(bicicletaDiv);
}

});


    // Obtener elementos del DOM
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const resultsContainer = document.querySelector('#search-results');

// Manejar el evento de envío del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe

  // Obtener el término de búsqueda del campo de entrada
  const searchTerm = input.value.trim();
  // Si el término de búsqueda está vacío, recargar la página
   if (searchTerm === '') {
    window.location.reload();
    return;
  }

  // Realizar la búsqueda y mostrar los resultados en el contenedor
// Realizar la búsqueda y mostrar los resultados en el contenedor
const results = searchForTerm(searchTerm);
displayResults(results);
results.forEach(result => {
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('result-container'); // añadir la clase al contenedor
  resultsContainer.appendChild(resultContainer);

  const resultImage = document.createElement('img');
  resultImage.src = result.img;
  resultImage.alt = result.modelo;
  resultContainer.appendChild(resultImage);

  const resultName = document.createElement('h3');
  resultName.textContent = result.nombre;
  resultContainer.appendChild(resultName);

  const resultModel = document.createElement('p');
  resultModel.textContent = result.modelo;
  resultContainer.appendChild(resultModel);

  const resultPrice = document.createElement('p');
  resultPrice.textContent = result.precio;
  resultContainer.appendChild(resultPrice);

  const resultidbici = document.createElement('p');
  resultidbici.textContent = result.id;
  resultContainer.appendChild(resultidbici);

  const resultHistory = document.createElement('h4');
  resultHistory.textContent = result.historia; // Toma el valor de historia del objeto JSON.
  resultContainer.appendChild(resultHistory);

  // Crear el div que va a contener el botón
  const botonDiv = document.createElement("div");
  botonDiv.classList.add("divboton");  // Agregar la clase al div

  // Crear el botón con todo el contenido HTML que necesitas
  const bicicletaBoton = document.createElement("button");
  bicicletaBoton.classList.add("button");
  bicicletaBoton.innerHTML = `
    <span class="button__text">
        <span>B</span><span>u</span><span>y</span><span> </span><span>N</span><span>F</span><span>T</span>
    </span>
    <svg class="button__svg" role="presentational" viewBox="0 0 600 600">
                          <defs>
                            <clipPath id="myClip">
                              <rect x="0" y="0" width="100%" height="50%" />
                            </clipPath>
                          </defs>
                          <g clip-path="url(#myClip)">
                            <g id="money">
                              <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                              <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            </g>
                            <g id="creditcard">
                              <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                              <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
                              <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                            </g>
                          </g>
                          <g id="wallet">
                            <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                            <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#7b8f91" />
                            <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
                          </g>
                      
                        </svg>
  `;

  // Agregar el evento al botón
  bicicletaBoton.addEventListener("click", function() {
    window.open(result.url, "_blank");
  });

  // Agregar el botón al div
  botonDiv.appendChild(bicicletaBoton);

  // Agregar el div al resultContainer
  resultContainer.appendChild(botonDiv);
});


   
    const form = document.getElementById('search-form');
   const searchResults = document.getElementById('search-results');

   form.addEventListener('submit', (event) => {
   const input = document.getElementById('search-input');
   if (input.value.length < 4) {
    event.preventDefault(); // previene el envío de la solicitud de búsqueda
    searchResults.innerHTML = '<p class="error-message">Ingrese al menos 4 caracteres para buscar.</p>'; // muestra un mensaje de error en el contenedor de resultados
    setTimeout(() => {
      searchResults.innerHTML = ''; // elimina el mensaje de error después de 3 segundos
    }, 5000);
  }
});

    
    
    
    



    
    function displayResults(results) {
      // Vaciar el contenedor de resultados
      resultsContainer.innerHTML = '';
    
      // Mostrar el número de resultados encontrados
      const count = results.length;
      const countText = count === 1 ? 'bicicleta' : 'bicicletas';
      const countDiv = document.createElement('div');
      countDiv.textContent = `${count} ${countText} encontrada(s).`;
      resultsContainer.appendChild(countDiv);
    
      
    }

        });
  
  
  
  
  
};

// Función para realizar la búsqueda
function searchForTerm(term) {
  return bicicletas.filter(bicicleta => {
    // Convertir las propiedades a minúsculas para ignorar mayúsculas y minúsculas
    const name = bicicleta.nombre.toLowerCase();

    // Verificar si el término de búsqueda está contenido en el nombre
    return name.includes(term.toLowerCase());
  });
}

// Función para mostrar los resultados en el contenedor
function displayResults(results) {
  
  // Vaciar el contenedor de resultados
  resultsContainer.innerHTML = '';

  // Crear elemento HTML para el mensaje de "shimmer encontrado"
  const shimmerDiv = document.createElement('div');
  shimmerDiv.classList.add('shimmer');
  shimmerDiv.textContent = '1 shimmer encontrado';
  resultsContainer.parentNode.insertBefore(shimmerDiv, resultsContainer);
  if (shimmerDiv) {
    shimmerDiv.remove();
    
    }
  

  // Crear elementos HTML para cada resultado y agregarlos al contenedor
  results.forEach(result => {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result');

    const resultName = document.createElement('p');
    resultName.textContent = result.nombre;
    /*resultContainer.appendChild(resultName);*/

    

    resultsContainer.appendChild(resultContainer);
  });
}

    


// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar las bicicletas
document.getElementById("filtro-modelo").addEventListener("change", mostrarBicicletas);

document.getElementById("filtro-categoria").addEventListener("change", mostrarBicicletas);









const botonTrainers = document.getElementById("boton-trainers");
botonTrainers.addEventListener("click", function() {
  const bicicletasContenedor = document.getElementById("bicicletas-contenedor");
  bicicletasContenedor.innerHTML = ""; // Vaciar el contenedor antes de agregar los resultados

  fetch("trainers.json")
    .then(response => response.json())
    .then(trainers => {
      trainers.trainer.forEach(function(trainer) {
        const trainerDiv = document.createElement("div");
        trainerDiv.classList.add("trainer");

        const imagen = document.createElement("img");
        imagen.src = trainer.img;
        imagen.alt = trainer.nombre;
        imagen.addEventListener("click", function() {
         
        });
        trainerDiv.appendChild(imagen);
        trainerDiv.classList.add("trainer-img");

        const nombreDiv = document.createElement("div");
        nombreDiv.classList.add("trainer-nombre");
        nombreDiv.textContent = trainer.nombre;
        trainerDiv.appendChild(nombreDiv);

        bicicletasContenedor.appendChild(trainerDiv);
        imagen.addEventListener("click", function() {
          console.log("Hiciste clic en la imagen", trainer.url);
          window.open(trainer.url, "_blank"); // Abrir la URL en una nueva pestaña
        });
      });
    })
    .catch(error => {
      console.error("Error al obtener los trainers:", error);
    });
  
  botonTrainers.removeEventListener("click", arguments.callee); // Deshabilitar el botón después de hacer clic
  botonTrainers.addEventListener("click", function() {
    location.reload(); // Recargar la página al hacer clic nuevamente
  });
});

  

























// METAMASK CONNECTION
const TIMEOUT = 1000;
const COLLECTION_NAME = 'ShimmerSoccer';
let editions = [];
let dots = 1;

window.addEventListener('DOMContentLoaded', () => {
  const onboarding = new MetaMaskOnboarding();
  const onboardButton = document.getElementById('connectWallet');
  let accounts;

  const updateButton = async () => {
    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
      onboardButton.innerText = 'Install MetaMask!';
      onboardButton.onclick = () => {
        onboardButton.innerText = 'Connecting...';
        onboardButton.disabled = true;
        onboarding.startOnboarding();
      };
    } else if (accounts && accounts.length > 0) {
      onboardButton.innerText = `✔ ...${accounts[0].slice(-4)}`;
      onboardButton.disabled = true;
      onboarding.stopOnboarding();
      checkOwner(accounts[0]);
    } else {
      onboardButton.innerText = '🦊Sign In';
      onboardButton.onclick = async () => {
        await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        .then(function(accounts) {
          onboardButton.innerText = `✔ ...${accounts[0].slice(-4)}`;
          onboardButton.disabled = true;
          checkOwner(accounts[0]);
        });
      };
    }
  };

  updateButton();
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    window.ethereum.on('accountsChanged', (newAccounts) => {
      accounts = newAccounts;
      updateButton();
    });
  }
});

const checkOwner = async (account) => {
  if(account) {
    let isOwner = false;
    let page = 1
    
    const data = await fetchWithRetry(`/.netlify/functions/isowner/?wallet=${account}&page=${page}`);

    isOwner = !isOwner ? data.isOwner : isOwner;
    updateStatusText(isOwner, true)
    
    editions = [...data.editions]
    let nextPage = data.next_page

    while(nextPage) {
      page = nextPage
      const data = await fetchWithRetry(`/.netlify/functions/isowner/?wallet=${account}&page=${page}`);

      isOwner = !isOwner ? data.isOwner : isOwner;
      updateStatusText(isOwner, true)
      
      editions = [...editions, ...data.editions]
      nextPage = data.next_page
    }

    updateStatusText(isOwner, false)
  }
}

function updateStatusText(isOwner, checking) {
  const statusText = document.querySelector('.owner-status');
  if(checking) {
    if(isOwner) {
      statusText.innerText = `You do own ${COLLECTION_NAME}!! 😻 Let's see how many${renderDots(dots)}`;
    } else {
      statusText.innerText = `Checking to see if you own any ${COLLECTION_NAME} 😻${renderDots(dots)}`;
    }
  } else {
    if(isOwner) {
      statusText.innerText = `You own ${editions.length} ${COLLECTION_NAME}!! 😻`;
    } else {
      statusText.innerText = `You don't own any ${COLLECTION_NAME} 😿`;
    }
  }
  dots = dots === 3 ? 1 : dots + 1;
}

function renderDots(dots) {
  let dotsString = '';
  for (let i = 0; i < dots; i++) {
    dotsString += '.';
  }
  return dotsString;
}

function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function fetchWithRetry(url)  {
  await timer(TIMEOUT);
  return new Promise((resolve, reject) => {
    const fetch_retry = (_url) => {
      return fetch(_url).then(async (res) => {
        const status = res.status;

        if(status === 200) {
          return resolve(res.json());
        }            
        else {
          console.error(`ERROR STATUS: ${status}`)
          console.log('Retrying')
          await timer(TIMEOUT)
          fetch_retry(_url)
        }            
      })
      .catch(async (error) => {  
        console.error(`CATCH ERROR: ${error}`)  
        console.log('Retrying')    
        await timer(TIMEOUT)    
        fetch_retry(_url)
      }); 
    }
    return fetch_retry(url);
  });
}