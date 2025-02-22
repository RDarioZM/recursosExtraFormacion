/*****************************************
 * EJEMPLO DE ELEMENTOS 
 *****************************************/
const elementosOriginal = [
  {
    symbol: "H",
    name: "Hidrogeno",
    numberOfValences: 2,
    valence1: -1,
    valence2: 1,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "He",
    name: "Helio",
    numberOfValences: 1,
    valence1: 0,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Fe",
    name: "Hierro",
    numberOfValences: 2,
    valence1: 2,
    valence2: 3,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "N",
    name: "Nitrogeno",
    numberOfValences: 6,
    valence1: -3,
    valence2: 1,
    valence3: 2,
    valence4: 3,
    valence5: 4,
    valence6: 5
  },
  {
    symbol: "Au",
    name: "Oro",
    numberOfValences: 2,
    valence1: 1,
    valence2: 3,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  }
];

/*****************************************
 * Variables globales y preparación
 *****************************************/
let elementosBarajados = [];
let indiceActual = 0;
let aciertos = 0;
let errores = 0;

window.onload = () => {
  // Barajamos el array de elementos y mostramos el primer elemento
  barajarElementos();
  mostrarElemento(indiceActual);
};

// Mezcla los elementos para que aparezcan en orden aleatorio
function barajarElementos() {
  // Copiamos el array original
  elementosBarajados = [...elementosOriginal];
  // Algoritmo de Fisher-Yates
  for (let i = elementosBarajados.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [elementosBarajados[i], elementosBarajados[j]] =
      [elementosBarajados[j], elementosBarajados[i]];
  }
}

// Muestra el elemento actual con color de fondo aleatorio y genera inputs dinámicos
function mostrarElemento(i) {
  const elemento = elementosBarajados[i];

  // 1. Limpiar la sección de valencias correctas y el mensaje
  document.getElementById("element-charges").innerHTML = "";
  document.getElementById("mensaje").innerText = "";

  // 2. Mostrar símbolo y nombre
  document.getElementById("element-symbol").innerText = elemento.symbol;
  document.getElementById("element-name").innerText = elemento.name;

  // 3. Generar dinámicamente los inputs
  const inputsContainer = document.getElementById("inputs-container");
  inputsContainer.innerHTML = ""; // Limpia lo que hubiera

  for (let idx = 1; idx <= elemento.numberOfValences; idx++) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = `valencia${idx}`;
    input.placeholder = `Valencia #${idx}`;
    inputsContainer.appendChild(input);
  }

  // Botón de Revisar (ya está en index.html, pero lo movemos al final con JS para asegurarnos de que esté debajo)
  const botonRevisar = document.createElement("button");
  botonRevisar.textContent = "Revisar";
  botonRevisar.onclick = revisarRespuesta;
  inputsContainer.appendChild(botonRevisar);

  // 4. Cambiar color aleatorio de la tarjeta
  const card = document.getElementById("tarjeta-elemento");
  card.style.backgroundColor = getRandomColor();
}

// Verificar las valencias ingresadas y actualizar aciertos/errores
function revisarRespuesta() {
  const elemento = elementosBarajados[indiceActual];

  // 1. Leer todos los inputs que se generaron
  const userValences = [];
  for (let i = 1; i <= elemento.numberOfValences; i++) {
    const val = parseInt(document.getElementById(`valencia${i}`).value, 10);
    userValences.push(isNaN(val) ? 0 : val);
  }

  // 2. Armar un array con las valencias correctas (ignoramos las que sean null)
  const actualValences = [];
  for (let i = 1; i <= elemento.numberOfValences; i++) {
    const valor = elemento[`valence${i}`];
    if (valor !== null) {
      actualValences.push(valor);
    }
  }

  // 3. Ordenar ambos arrays y compararlos (para no exigir un orden específico)
  userValences.sort((a, b) => a - b);
  actualValences.sort((a, b) => a - b);

  // 4. Comparar si ambas listas son iguales
  const correcto = JSON.stringify(userValences) === JSON.stringify(actualValences);

  // 5. Actualizar la interfaz según si es correcto o no
  if (correcto) {
    aciertos++;
    document.getElementById("aciertos").innerText = aciertos;
    document.getElementById("mensaje").innerText = "¡Correcto!";
    mostrarValenciasCorrectas(elemento);
    mostrarCelebracion();
  } else {
    errores++;
    document.getElementById("errores").innerText = errores;
    document.getElementById("mensaje").innerText = "Incorrecto, intenta de nuevo.";
  }
}

// Función para pasar al siguiente elemento
function siguienteElemento() {
  indiceActual++;
  // Si llegamos al final, reiniciamos y barajamos de nuevo
  if (indiceActual >= elementosBarajados.length) {
    alert("¡Has practicado todos los elementos! Se reiniciará la práctica.");

    // Reiniciar valores
    indiceActual = 0;
    aciertos = 0;
    errores = 0;
    document.getElementById("aciertos").innerText = aciertos;
    document.getElementById("errores").innerText = errores;

    // Volver a barajar
    barajarElementos();
  }
  mostrarElemento(indiceActual);
}

// Muestra las valencias en la tarjeta (ahora con un tamaño de fuente mayor tras acertar)
function mostrarValenciasCorrectas(elemento) {
  const chargesDiv = document.getElementById("element-charges");
  chargesDiv.innerHTML = ""; // Limpia por si acaso

  // Aumentar el tamaño de las valencias una vez acertado
  chargesDiv.style.fontSize = "1.8em";

  // Agregar todas las valencias no nulas
  for (let i = 1; i <= elemento.numberOfValences; i++) {
    const val = elemento[`valence${i}`];
    if (val !== null) {
      const sup = document.createElement("sup");
      sup.textContent = val;
      chargesDiv.appendChild(sup);
      chargesDiv.appendChild(document.createTextNode(" ")); // espacio
    }
  }
}

// Animación de celebración
function mostrarCelebracion() {
  const celebration = document.getElementById("celebration");
  celebration.classList.add("active");
  // Quitar la clase active tras 1.5 segundos
  setTimeout(() => {
    celebration.classList.remove("active");
  }, 1500);
}

// Generar un color aleatorio en formato HEX
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
