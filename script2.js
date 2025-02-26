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
    mostrarError();
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

// Lista de GIFs para aciertos
const gifsAcierto = [
    "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
"https://media.giphy.com/media/l3vRlT2k2L35Cnn5C/giphy.gif?cid=ecf05e47mx16vlikraqyinat26ixy5tpoegkn0jq5n9tzo2x&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/StK13Ad9lHtdo1IqFA/giphy.gif?cid=ecf05e47mx16vlikraqyinat26ixy5tpoegkn0jq5n9tzo2x&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif?cid=ecf05e47mx16vlikraqyinat26ixy5tpoegkn0jq5n9tzo2x&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/QsZol42CPIjMzke1QW/giphy.gif?cid=ecf05e47mx16vlikraqyinat26ixy5tpoegkn0jq5n9tzo2x&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/KPgOYtIRnFOOk/giphy.gif?cid=ecf05e47vdch8drm2bysrkhqllh1n52bwjkwuplf9tmxwe4x&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/Rlwz4m0aHgXH13jyrE/giphy.gif?cid=ecf05e473qwlmq33kmr7nuk76o8lz17q8uoxoq9u4dffujsb&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/VRKheDy4DkBMrQm66p/giphy.gif?cid=ecf05e473qwlmq33kmr7nuk76o8lz17q8uoxoq9u4dffujsb&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/zfNAMCrhSQzte/giphy.gif?cid=ecf05e47hy759ntysm1kw7mllrkspk0ac80u1l7izhneyk9a&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/u9ntJMbnX7orBnNtbx/giphy.gif?cid=ecf05e47hy759ntysm1kw7mllrkspk0ac80u1l7izhneyk9a&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/qVfJX3Si7MLkOksNMB/giphy.gif?cid=ecf05e47hy759ntysm1kw7mllrkspk0ac80u1l7izhneyk9a&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/olAik8MhYOB9K/giphy.gif?cid=ecf05e47hy759ntysm1kw7mllrkspk0ac80u1l7izhneyk9a&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/Y5pJPmh9IWMKc/giphy.gif?cid=ecf05e47hy759ntysm1kw7mllrkspk0ac80u1l7izhneyk9a&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/wAxlCmeX1ri1y/giphy.gif?cid=ecf05e47oyxttm7wur17d37gxvxwv62nj14r3lk7qazorja9&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/okfvUCpgArv3y/giphy.gif?cid=ecf05e47oyxttm7wur17d37gxvxwv62nj14r3lk7qazorja9&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif?cid=ecf05e47oyxttm7wur17d37gxvxwv62nj14r3lk7qazorja9&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/dmvodzjX8wU7icE3TL/giphy.gif?cid=ecf05e47oyxttm7wur17d37gxvxwv62nj14r3lk7qazorja9&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/joYf3Ba2phD15ch9Nt/giphy.gif?cid=ecf05e474w08d3nvwytuj5xuhjg9hly4nam7evsc7vxfgwwh&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWNld3E1eWZ2ZGR4NjNkb3R3cnV0cGY2OHNqMG5qemY0aThjOGFnNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/t3sZxY5zS5B0z5zMIz/giphy.gif",
"https://media.giphy.com/media/voMyf7YAM2GjSx0Yw9/giphy.gif?cid=790b7611mcewq5yfvddx63dotwrutpf68sj0njzf4i8c8ag6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/3oz8xQQP4ahKiyuxHy/giphy.gif?cid=ecf05e47cntdq6ni3jlnzw62i0v09fuqybh1xb6csyu7w4el&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHA3NXd4aWd4czM4ZzBlYTRkY29zdTRpcmxodzJwb2dpZ3ozMzJtaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4xpB3eE00FfBm/giphy.gif",
"https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif?cid=ecf05e474u95s1llrtrjogo4o20mgxz379c6anfmn9d6ckse&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/lvOnlEYunAwOkHjgmU/giphy.gif?cid=ecf05e474u95s1llrtrjogo4o20mgxz379c6anfmn9d6ckse&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/g9SURfIJouBck/giphy.gif?cid=ecf05e47mefnjy0qluk5joa8l59i3tryn8sze50ddxho7pfb&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif?cid=ecf05e47a1ouh68aqkjrai9hn0m6jkh10ajbsnbkd2uald4b&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/1ofR3QioNy264/giphy.gif?cid=ecf05e471ue3u3aurr1dm3c4oovljc5ox3rl1tvwlzkgeg43&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/xvWLAWTMsaEtG/giphy.gif?cid=ecf05e475e93igur9zw5qhan9lzbasbc9yfaldge9i3wxxzk&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/bKBM7H63PIykM/giphy.gif?cid=ecf05e475e93igur9zw5qhan9lzbasbc9yfaldge9i3wxxzk&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/l4FGkf5yXSR7FgMQU/giphy.gif?cid=ecf05e47tqfyqg0gg73k026zm6wdi5lqicd4finbe2q6kkpe&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/mbHB65fPHLNtu/giphy.gif?cid=ecf05e47vxknb7q7pot3a215uswuicd4tdvbsw1nmfw9b6id&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/Um3ljJl8jrnHy/giphy.gif?cid=790b7611ruj08pjvkiiv7fwbn6u79oji6nqtlgi6gzthb7dg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/VRKheDy4DkBMrQm66p/giphy.gif?cid=ecf05e47530o05jyjnkfm9bkndqzavhi5h3dslmaq0sm1gaw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/kd9BlRovbPOykLBMqX/giphy.gif?cid=ecf05e47a086m03i0are07mydk2wnxxx8utosbniujav8tra&ep=v1_gifs_search&rid=giphy.gif&ct=g"



];




// Lista de GIFs para errores
const gifsError = [
    "https://media.giphy.com/media/WTjnWYENpLxS8JQ5rz/giphy.gif?cid=ecf05e472wceod24bnaie2ge9j5nxsn9stddkubot6nx7e7d&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/d2ZcfODrNWlA5Gg0/giphy.gif?cid=ecf05e47t7s6ngyttlt7e52jwnt77hw19tf9h0j89v1qlbpu&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/eKrgVyZ7zLvJrgZNZn/giphy.gif?cid=ecf05e47t7s6ngyttlt7e52jwnt77hw19tf9h0j89v1qlbpu&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/LOEI8jsNKPmzdJYvhJ/giphy.gif?cid=ecf05e47t7s6ngyttlt7e52jwnt77hw19tf9h0j89v1qlbpu&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=ecf05e47t7s6ngyttlt7e52jwnt77hw19tf9h0j89v1qlbpu&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/sU6yN4mPVwP7wiXB9v/giphy.gif?cid=ecf05e47mo07lb0n8r7g3ghoy4x1hsdglsd8j5wnd3thguek&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/vyTnNTrs3wqQ0UIvwE/giphy.gif?cid=ecf05e47cntdq6ni3jlnzw62i0v09fuqybh1xb6csyu7w4el&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/4zXbvOphyf3TZbAz52/giphy.gif?cid=ecf05e47cntdq6ni3jlnzw62i0v09fuqybh1xb6csyu7w4el&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/wofftnAdDtx4s/giphy.gif?cid=ecf05e47i1u4f3k4eblzl1yt1w1khfx0dq1n1sspwhf5gkus&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/C0jvtLgeFpZ8R3BulF/giphy.gif?cid=ecf05e47i1iewqz2obevii0aue01jbb37jf93fbn5c2ne9fv&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/26tP1TiiRIF0rLhWU/giphy.gif?cid=ecf05e47i1iewqz2obevii0aue01jbb37jf93fbn5c2ne9fv&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif?cid=ecf05e47i1iewqz2obevii0aue01jbb37jf93fbn5c2ne9fv&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/60rUVyj8ShyuEhHbaz/giphy.gif?cid=ecf05e47k3lchf7k6irrevtvxgjbf7sj75n3s2pmjzmo29l9&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/26tOXgoz0WNQhwb04/giphy.gif?cid=ecf05e47k3lchf7k6irrevtvxgjbf7sj75n3s2pmjzmo29l9&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/26tPskka6guetcHle/giphy.gif?cid=ecf05e47xs5ind7f4urzy8zfgbz2gulgq6rgt6rjyrbfzvdz&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/3Hywrgqw2B9mg/giphy.gif?cid=ecf05e47xs5ind7f4urzy8zfgbz2gulgq6rgt6rjyrbfzvdz&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGcybnM3NTl2bDA5cHRyenNlbGlmcDY3aHU5MjRiZWV0dDhwcHhpZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YTJXDIivNMPuNSMgc0/giphy.gif",
"https://media.giphy.com/media/3ohs4qw8hkPShGeanS/giphy.gif?cid=790b7611dg2ns759vl09ptrzselifp67hu924beett8ppxif&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/S6GmIwq0c6zSAC7OYZ/giphy.gif?cid=790b7611dg2ns759vl09ptrzselifp67hu924beett8ppxif&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/SjRgoSG1RTpYs/giphy.gif?cid=790b7611dg2ns759vl09ptrzselifp67hu924beett8ppxif&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/57WEsxpUr3bTG/giphy.gif?cid=ecf05e47z8fgto0yoe77u1sizrlwa66sl0iehdiujdi3pvmj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/O5pd2oPjjcGFW/giphy.gif?cid=ecf05e47z8fgto0yoe77u1sizrlwa66sl0iehdiujdi3pvmj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/UkaZpqcieR38c/giphy.gif?cid=ecf05e47z8fgto0yoe77u1sizrlwa66sl0iehdiujdi3pvmj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/Ub8XEam5vXbMY/giphy.gif?cid=ecf05e472ln7enzwchj5ns3ohu6705q6fw35zk5blgy3mgvf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/8SQwBWknR1Hos/giphy.gif?cid=ecf05e47tl70sdnrw8zoygxl6rtejtn9h637fsxqv269uy6d&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif?cid=ecf05e47tl70sdnrw8zoygxl6rtejtn9h637fsxqv269uy6d&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/jNJArHGdYK1Gw/giphy.gif?cid=ecf05e47idqc7sac8xrrom05kvo7wxn0v8qftb0eehs4w2g4&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/5xtDarLmwz5ma8nfmG4/giphy.gif?cid=ecf05e47idqc7sac8xrrom05kvo7wxn0v8qftb0eehs4w2g4&ep=v1_gifs_related&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/kaq6GnxDlJaBq/giphy.gif?cid=790b7611ruj08pjvkiiv7fwbn6u79oji6nqtlgi6gzthb7dg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif?cid=790b7611ruj08pjvkiiv7fwbn6u79oji6nqtlgi6gzthb7dg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/xL7PDV9frcudO/giphy.gif?cid=790b7611ruj08pjvkiiv7fwbn6u79oji6nqtlgi6gzthb7dg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/ZechFo0yBIQpEve1Sm/giphy.gif?cid=ecf05e47530o05jyjnkfm9bkndqzavhi5h3dslmaq0sm1gaw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/Z5xk7fGO5FjjTElnpT/giphy.gif?cid=ecf05e47530o05jyjnkfm9bkndqzavhi5h3dslmaq0sm1gaw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/JyW51lx5XMDgQ/giphy.gif?cid=ecf05e4792accgx5wr4cerc78tqygaexldu2pg5543ocr95y&ep=v1_gifs_search&rid=giphy.gif&ct=g",
"https://media.giphy.com/media/rfqHxai5XJnuU/giphy.gif?cid=ecf05e47qtrwn02vq240clozc82wlw1kmdj4r0wpi7nxfy9l&ep=v1_gifs_search&rid=giphy.gif&ct=g"


];

function obtenerGifAleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length); // Elegir un índice aleatorio
    return lista[indice];
}

function mostrarCelebracion() {
    const celebration = document.getElementById("celebration");
    const celebrationImg = document.getElementById("celebration-img"); // Asegúrate de tener este ID en el HTML

    // Obtener un GIF aleatorio de la lista de aciertos
    celebrationImg.src = obtenerGifAleatorio(gifsAcierto);

    // Mostrar la ventana de celebración
    celebration.classList.add("active");

    // Esperar un clic para cerrarlo
    setTimeout(() => {
        document.addEventListener("click", ocultarCelebracion);
    }, 500);
}

function ocultarCelebracion() {
    const celebration = document.getElementById("celebration");
    celebration.classList.remove("active");
    document.removeEventListener("click", ocultarCelebracion);
}

function mostrarError() {
    const error = document.getElementById("error");
    const errorImg = document.getElementById("error-img"); // Asegúrate de tener este ID en el HTML

    // Obtener un GIF aleatorio de la lista de errores
    errorImg.src = obtenerGifAleatorio(gifsError);

    // Mostrar la ventana de error
    error.classList.add("active");

    // Esperar un clic para cerrarlo
    setTimeout(() => {
        document.addEventListener("click", ocultarError);
    }, 500);
}

function ocultarError() {
    const error = document.getElementById("error");
    error.classList.remove("active");
    document.removeEventListener("click", ocultarError);
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
