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
      bicicletaPrecio.textContent = "Score->" + bicicleta.precio;
      bicicletaDiv.appendChild(bicicletaPrecio);

      bicicletasContenedor.appendChild(bicicletaDiv);

      // Agrega el evento de clic a la imagen de la bicicleta
      bicicletaImg.addEventListener("click", function() {
          const url = this.getAttribute("data-url");
          window.open(url, "_blank"); // Abre la URL en una nueva pestaña
      });
  });









    // Recorrer cada bicicleta
    window.bicicletas.forEach(function (bicicleta) {
        // Comprobar si la bicicleta cumple con los criterios de los filtros
        if ((filtroModelo === "" || bicicleta.modelo === filtroModelo) && (filtroCategoria === "" || bicicleta.categoria === filtroCategoria) 
        ) {
            // Crear un elemento div para la bicicleta
            const bicicletaDiv = document.createElement("div");
            bicicletaDiv.classList.add("bicicleta");
            
            
            
            
            
            
            // Crear una imagen para la bicicleta
            const bicicletaImg = document.createElement("img");
            bicicletaImg.src = bicicleta.img;
            bicicletaImg.alt = bicicleta.modelo;
            bicicletaImg.setAttribute("data-url", bicicleta.url); // Agrega el atributo data-url
            bicicletaDiv.appendChild(bicicletaImg);

            bicicletaImg.addEventListener("click", function() {
              const url = this.getAttribute("data-url");
              window.open(url, "_blank"); // Abre la URL en una nueva pestaña
          });





            // Crear un h3 para el nombre de la bicicleta
            const bicicletaNombre = document.createElement("h3");
            bicicletaNombre.innerHTML = bicicleta.nombre;
            bicicletaDiv.appendChild(bicicletaNombre);

            // Crear un p para el modelo de la bicicleta
            const bicicletaModel = document.createElement("p");
            bicicletaModel.innerHTML = bicicleta.modelo;
            bicicletaDiv.appendChild(bicicletaModel);

            // Crear un p para el precio de la bicicleta
            const bicicletaPrice = document.createElement("p");
            bicicletaPrice.innerHTML = "SCORE->"+bicicleta.precio;            
            bicicletaDiv.appendChild(bicicletaPrice);

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
  resultPrice.textContent = "SCORE->" + result.precio;
  resultContainer.appendChild(resultPrice);


   
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
  
  
  
  
  
});

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

    
}

// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar las bicicletas
document.getElementById("filtro-modelo").addEventListener("change", mostrarBicicletas);

document.getElementById("filtro-categoria").addEventListener("change", mostrarBicicletas);


















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

  
