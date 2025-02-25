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
    symbol: "Li",
    name: "Litio",
    numberOfValences: 1,
    valence1: 1,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
{
    symbol: "Na",
    name: "Sodio",
    numberOfValences: 1,
    valence1: 1,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
{
    symbol: "K",
    name: "Potasio",
    numberOfValences: 1,
    valence1: 1,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
{
    symbol: "Rb",
    name: "Rubidio",
    numberOfValences: 1,
    valence1: 1,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },  
{
    symbol: "Cs",
    name: "Cesio",
    numberOfValences: 1,
    valence1: 1,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },  

{
    symbol: "Fr",
    name: "Francio",
    numberOfValences: 1,
    valence1: 1,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },  

{
    symbol: "Be",
    name: "Berilio",
    numberOfValences: 1,
    valence1: 2,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },  

  {
    symbol: "Mg",
    name: "Magnesio",
    numberOfValences: 1,
    valence1: 2,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Ca",
    name: "Calcio",
    numberOfValences: 1,
    valence1: 2,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Sr",
    name: "Estroncio",
    numberOfValences: 1,
    valence1: 2,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Ba",
    name: "Bario",
    numberOfValences: 1,
    valence1: 2,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Ra",
    name: "Radio",
    numberOfValences: 1,
    valence1: 2,
    valence2: null,
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
    symbol: "O",
    name: "Oxígeno",
    numberOfValences: 2,
    valence1: -2,
    valence2: 2,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "S",
    name: "Azufre",
    numberOfValences: 4,
    valence1: -2,
    valence2: 2,
    valence3: 4,
    valence4: 6,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Se",
    name: "Selenio",
    numberOfValences: 4,
    valence1: -2,
    valence2: 2,
    valence3: 4,
    valence4: 6,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Te",
    name: "Telurio",
    numberOfValences: 4,
    valence1: -2,
    valence2: 2,
    valence3: 4,
    valence4: 6,
    valence5: null,
    valence6: null
  },
{
    symbol: "F",
    name: "Flúor",
    numberOfValences: 1,
    valence1: -1,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Cl",
    name: "Cloro",
    numberOfValences: 5,
    valence1: -1,
    valence2: 1,
    valence3: 3,
    valence4: 5,
    valence5: 7,
    valence6: null
  },
  {
    symbol: "Br",
    name: "Bromo",
    numberOfValences: 5,
    valence1: -1,
    valence2: 1,
    valence3: 3,
    valence4: 5,
    valence5: 7,
    valence6: null
  },
  {
    symbol: "I",
    name: "Yodo",
    numberOfValences: 5,
    valence1: -1,
    valence2: 1,
    valence3: 3,
    valence4: 5,
    valence5: 7,
    valence6: null
  },
  {
    symbol: "C",
    name: "Carbono",
    numberOfValences: 3,
    valence1: -4,
    valence2: 2,
    valence3: 4,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Si",
    name: "Silicio",
    numberOfValences: 2,
    valence1: -4,
    valence2: 4,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Ge",
    name: "Germanio",
    numberOfValences: 2,
    valence1: 2,
    valence2: 4,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Sn",
    name: "Estaño",
    numberOfValences: 2,
    valence1: 2,
    valence2: 4,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Pb",
    name: "Plomo",
    numberOfValences: 2,
    valence1: 2,
    valence2: 4,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "N",
    name: "Nitrógeno",
    numberOfValences: 5,
    valence1: -3,
    valence2: 1,
    valence3: 3,
    valence4: 4,
    valence5: 5,
    valence6: null
  },
  {
    symbol: "P",
    name: "Fósforo",
    numberOfValences: 3,
    valence1: -3,
    valence2: 3,
    valence3: 5,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "As",
    name: "Arsénico",
    numberOfValences: 3,
    valence1: -3,
    valence2: 3,
    valence3: 5,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Sb",
    name: "Antimonio",
    numberOfValences: 3,
    valence1: -3,
    valence2: 3,
    valence3: 5,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Bi",
    name: "Bismuto",
    numberOfValences: 3,
    valence1: -3,
    valence2: 5,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
 {
    symbol: "B",
    name: "Boro",
    numberOfValences: 1,
    valence1: 3,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Al",
    name: "Aluminio",
    numberOfValences: 1,
    valence1: 3,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Ga",
    name: "Galio",
    numberOfValences: 1,
    valence1: 3,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "In",
    name: "Indio",
    numberOfValences: 2,
    valence1: 1,
    valence2: 3,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Tl",
    name: "Talio",
    numberOfValences: 2,
    valence1: 1,
    valence2: 3,
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
    symbol: "Co",
    name: "Cobalto",
    numberOfValences: 2,
    valence1: 2,
    valence2: 3,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Ni",
    name: "Níquel",
    numberOfValences: 2,
    valence1: 2,
    valence2: 3,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Zn",
    name: "Zinc",
    numberOfValences: 1,
    valence1: 2,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Cd",
    name: "Cadmio",
    numberOfValences: 1,
    valence1: 2,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Hg",
    name: "Mercurio",
    numberOfValences: 2,
    valence1: 1,
    valence2: 2,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Cu",
    name: "Cobre",
    numberOfValences: 2,
    valence1: 1,
    valence2: 2,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
  },
  {
    symbol: "Ag",
    name: "Plata",
    numberOfValences: 1,
    valence1: 1,
    valence2: null,
    valence3: null,
    valence4: null,
    valence5: null,
    valence6: null
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
