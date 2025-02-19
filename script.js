// Definición de los iones con datos adicionales
/*
const cationes = [
  { symbol: "Na⁺", name: "Sodio", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "Na" },
  { symbol: "K⁺", name: "Potasio", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "K" },
  { symbol: "Ca²⁺", name: "Calcio", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Ca" },
  { symbol: "Mg²⁺", name: "Magnesio", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Mg" },
  { symbol: "Cr²⁺", name: "Cromo", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Cr" },
  { symbol: "Fe³⁺", name: "Hierro", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Fe" },
  { symbol: "Cr³⁺", name: "Cromo", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Cr" }
];

const aniones = [
  { symbol: "Cl⁻", name: "Cloruro", charge: 1, esPoliatomico: false, formula: "Cl" },
  { symbol: "Br⁻", name: "Bromuro", charge: 1, esPoliatomico: false, formula: "Br" },
  { symbol: "SO₄²⁻", name: "Sulfato", charge: 2, esPoliatomico: true, formula: "SO4" },
  { symbol: "PO₄³⁻", name: "Fosfato", charge: 3, esPoliatomico: true, formula: "PO4" },
  { symbol: "NO₃⁻", name: "Nitrato", charge: 1, esPoliatomico: true, formula: "NO3" },
  { symbol: "CO₃²⁻", name: "Carbonato", charge: 2, esPoliatomico: true, formula: "CO3" }
];
*/



// Cationes
const cationes = [
  // +1 cationes
  { symbol: "H⁺", name: "Hidrógeno", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "H" },
  { symbol: "Li⁺", name: "Litio", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "Li" },
  { symbol: "Na⁺", name: "Sodio", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "Na" },
  { symbol: "K⁺", name: "Potasio", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "K" },
  { symbol: "Rb⁺", name: "Rubidio", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "Rb" },
  { symbol: "Cs⁺", name: "Cesio", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "Cs" },
  { symbol: "Fr⁺", name: "Francio", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "Fr" },
  { symbol: "Ag⁺", name: "Plata", charge: 1, mostrarOxidacion: false, esPoliatomico: false, formula: "Ag" },
  { symbol: "Cu⁺", name: "Cobre", charge: 1, mostrarOxidacion: true, esPoliatomico: false, formula: "Cu" },
  { symbol: "Au⁺", name: "Oro", charge: 1, mostrarOxidacion: true, esPoliatomico: false, formula: "Au" },
  { symbol: "Hg⁺", name: "Mercurio", charge: 1, mostrarOxidacion: true, esPoliatomico: false, formula: "Hg" },
  { symbol: "Tl⁺", name: "Talio", charge: 1, mostrarOxidacion: true, esPoliatomico: false, formula: "Tl" },
  { symbol: "Ga⁺", name: "Galio", charge: 1, mostrarOxidacion: true, esPoliatomico: false, formula: "Ga" },
  { symbol: "In⁺", name: "Indio", charge: 1, mostrarOxidacion: true, esPoliatomico: false, formula: "In" },
  { symbol: "NH4⁺", name: "Amonio", charge: 1, mostrarOxidacion: false, esPoliatomico: true, formula: "NH4" },
  // +2 cationes
  { symbol: "Be²⁺", name: "Berilio", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Be" },
  { symbol: "Mg²⁺", name: "Magnesio", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Mg" },
  { symbol: "Ca²⁺", name: "Calcio", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Ca" },
  { symbol: "Sr²⁺", name: "Estroncio", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Sr" },
  { symbol: "Ba²⁺", name: "Bario", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Ba" },
  { symbol: "Ra²⁺", name: "Radio", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Ra" },
  { symbol: "Ti²⁺", name: "Titanio", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Ti" },
  { symbol: "V²⁺", name: "Vanadio", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "V" },
  { symbol: "Cr²⁺", name: "Cromo", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Cr" },
  { symbol: "Fe²⁺", name: "Hierro", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Fe" },
  { symbol: "Ni²⁺", name: "Níquel", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Ni" },
  { symbol: "Cu²⁺", name: "Cobre", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Cu" },
  { symbol: "Zn²⁺", name: "Cinc", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Zn" },
  { symbol: "Cd²⁺", name: "Cadmio", charge: 2, mostrarOxidacion: false, esPoliatomico: false, formula: "Cd" },
  { symbol: "Hg²⁺", name: "Mercurio", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Hg" },
  { symbol: "Pd²⁺", name: "Paladio", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Pd" },
  { symbol: "Pb²⁺", name: "Plomo", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Pb" },
  { symbol: "Mn²⁺", name: "Manganeso", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Mn" },
  { symbol: "Sn²⁺", name: "Estaño", charge: 2, mostrarOxidacion: true, esPoliatomico: false, formula: "Sn" },
  // +3 cationes
  { symbol: "Sc³⁺", name: "Escandio", charge: 3, mostrarOxidacion: false, esPoliatomico: false, formula: "Sc" },
  { symbol: "Ti³⁺", name: "Titanio", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Ti" },
  { symbol: "V³⁺", name: "Vanadio", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "V" },
  { symbol: "Cr³⁺", name: "Cromo", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Cr" },
  { symbol: "Mn³⁺", name: "Manganeso", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Mn" },
  { symbol: "Co³⁺", name: "Cobalto", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Co" },
  { symbol: "Ni³⁺", name: "Níquel", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Ni" },
  { symbol: "Ga³⁺", name: "Galio", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Ga" },
  { symbol: "In³⁺", name: "Indio", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "In" },
  { symbol: "Au³⁺", name: "Oro", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Au" },
  { symbol: "Sb³⁺", name: "Antimonio", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Sb" },
  { symbol: "Bi³⁺", name: "Bismuto", charge: 3, mostrarOxidacion: true, esPoliatomico: false, formula: "Bi" },
  // +4 cationes
  { symbol: "Pd⁴⁺", name: "Paladio", charge: 4, mostrarOxidacion: true, esPoliatomico: false, formula: "Pd" },
  { symbol: "Si⁴⁺", name: "Silicio", charge: 4, mostrarOxidacion: false, esPoliatomico: false, formula: "Si" },
  { symbol: "Ge⁴⁺", name: "Germanio", charge: 4, mostrarOxidacion: true, esPoliatomico: false, formula: "Ge" },
  { symbol: "Sn⁴⁺", name: "Estaño", charge: 4, mostrarOxidacion: true, esPoliatomico: false, formula: "Sn" },
  { symbol: "Pb⁴⁺", name: "Plomo", charge: 4, mostrarOxidacion: true, esPoliatomico: false, formula: "Pb" },
  { symbol: "Mn⁴⁺", name: "Manganeso", charge: 4, mostrarOxidacion: true, esPoliatomico: false, formula: "Mn" },
  // +5 cationes
  { symbol: "Sb⁵⁺", name: "Antimonio", charge: 5, mostrarOxidacion: true, esPoliatomico: false, formula: "Sb" },
  { symbol: "Bi⁵⁺", name: "Bismuto", charge: 5, mostrarOxidacion: true, esPoliatomico: false, formula: "Bi" }
];


// Aniones
const aniones = [
  // -1 aniones
  { symbol: "F⁻", name: "Fluoruro", charge: 1, esPoliatomico: false, formula: "F" },
  { symbol: "Cl⁻", name: "Cloruro", charge: 1, esPoliatomico: false, formula: "Cl" },
  { symbol: "Br⁻", name: "Bromuro", charge: 1, esPoliatomico: false, formula: "Br" },
  { symbol: "I⁻", name: "Yoduro", charge: 1, esPoliatomico: false, formula: "I" },
  { symbol: "NO₃⁻", name: "Nitrato", charge: 1, esPoliatomico: true, formula: "NO3" },
  { symbol: "NO₂⁻", name: "Nitrito", charge: 1, esPoliatomico: true, formula: "NO2" },
  { symbol: "HSO₃⁻", name: "Hidrogenosulfito", charge: 1, esPoliatomico: true, formula: "HSO3" },
  { symbol: "HSO₄⁻", name: "Hidrogenosulfato", charge: 1, esPoliatomico: true, formula: "HSO4" },
  { symbol: "H₂PO₄⁻", name: "Dihidrogenofosfato", charge: 1, esPoliatomico: true, formula: "H2PO4" },
  { symbol: "H₂PO₃⁻", name: "Dihidrogenofosfito", charge: 1, esPoliatomico: true, formula: "H2PO3" },
  { symbol: "HCO₃⁻", name: "Bicarbonato", charge: 1, esPoliatomico: true, formula: "HCO3" },
  { symbol: "ClO⁻", name: "Hipoclorito", charge: 1, esPoliatomico: true, formula: "ClO" },
  { symbol: "ClO₂⁻", name: "Clorito", charge: 1, esPoliatomico: true, formula: "ClO2" },
  { symbol: "ClO₃⁻", name: "Clorato", charge: 1, esPoliatomico: true, formula: "ClO3" },
  { symbol: "ClO₄⁻", name: "Perclorato", charge: 1, esPoliatomico: true, formula: "ClO4" },
  { symbol: "BrO⁻", name: "Hipobromito", charge: 1, esPoliatomico: true, formula: "BrO" },
  { symbol: "BrO₂⁻", name: "Bromito", charge: 1, esPoliatomico: true, formula: "BrO2" },
  { symbol: "BrO₃⁻", name: "Bromato", charge: 1, esPoliatomico: true, formula: "BrO3" },
  { symbol: "BrO₄⁻", name: "Perbromato", charge: 1, esPoliatomico: true, formula: "BrO4" },
  { symbol: "IO⁻", name: "Hipoyodito", charge: 1, esPoliatomico: true, formula: "IO" },
  { symbol: "IO₂⁻", name: "Iodito", charge: 1, esPoliatomico: true, formula: "IO2" },
  { symbol: "IO₃⁻", name: "Yodato", charge: 1, esPoliatomico: true, formula: "IO3" },
  { symbol: "IO₄⁻", name: "Peryodato", charge: 1, esPoliatomico: true, formula: "IO4" },
  { symbol: "CN⁻", name: "Cianuro", charge: 1, esPoliatomico: true, formula: "CN" },
  { symbol: "HS⁻", name: "Hidrosulfuro", charge: 1, esPoliatomico: true, formula: "HS" },
  { symbol: "SCN⁻", name: "Tiosicianato", charge: 1, esPoliatomico: true, formula: "SCN" },
  { symbol: "MnO₄⁻", name: "Permanganato", charge: 1, esPoliatomico: true, formula: "MnO4" },
  // -2 aniones
  { symbol: "SO₄²⁻", name: "Sulfato", charge: 2, esPoliatomico: true, formula: "SO4" },
  { symbol: "CO₃²⁻", name: "Carbonato", charge: 2, esPoliatomico: true, formula: "CO3" },
  { symbol: "S²⁻", name: "Sulfuro", charge: 2, esPoliatomico: false, formula: "S" },
  { symbol: "SO₃²⁻", name: "Sulfito", charge: 2, esPoliatomico: true, formula: "SO3" },
  { symbol: "Se²⁻", name: "Seleniuro", charge: 2, esPoliatomico: false, formula: "Se" },
  { symbol: "O²⁻", name: "Oxido", charge: 2, esPoliatomico: false, formula: "O" },
  // -3 aniones
  { symbol: "As³⁻", name: "Arseniuro", charge: 3, esPoliatomico: false, formula: "As" },
  { symbol: "N³⁻", name: "Nitruro", charge: 3, esPoliatomico: false, formula: "N" },
  { symbol: "P³⁻", name: "Fosfuro", charge: 3, esPoliatomico: false, formula: "P" },
  { symbol: "PO₄³⁻", name: "Fosfato", charge: 3, esPoliatomico: true, formula: "PO4" },
  { symbol: "PO₃³⁻", name: "Fosfito", charge: 3, esPoliatomico: true, formula: "PO3" }
];


// Números romanos para la nomenclatura Stock
const numeralesRomanos = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V" };

// Variables globales para la selección y para guardar resultados
let cationSeleccionado = cationes[0];
let anionSeleccionado = aniones[0];
let resultadoFormula = "";
let resultadoNombre = "";

/* FUNCIONES DE LA RULETA */

function girarRuleta(tipo) {
  const lista = tipo === "cationes" ? cationes : aniones;
  const ruleta = document.getElementById(`ruleta-${tipo}`);
  
  ruleta.style.pointerEvents = "none";
  
  // Generar contenido repetido para simular el giro
  let contenido = "";
  for (let i = 0; i < 10; i++) {
    contenido += lista
      .map(item => `<div>${item.symbol} (${item.name})</div>`)
      .join("");
  }
  ruleta.innerHTML = contenido;
  
  const index = Math.floor(Math.random() * lista.length);
  const offset = index * 50;
  
  ruleta.style.transition = "transform 3s ease-out";
  ruleta.style.transform = `translateY(-${offset + Math.random() * 500}px)`;
  
  setTimeout(() => {
    ruleta.style.transition = "none";
    ruleta.style.transform = "translateY(0px)";
    ruleta.innerHTML = `<div>${lista[index].symbol} (${lista[index].name})</div>`;
    ruleta.style.pointerEvents = "auto";
    
    // Actualizar la selección global
    if (tipo === "cationes") {
      cationSeleccionado = lista[index];
    } else {
      anionSeleccionado = lista[index];
    }
    generarCompuesto();
  }, 3000);
}

/* FUNCIONES PARA GENERAR EL COMPUESTO */

// Función para convertir dígitos en subíndices (en la fórmula)
function formatIonFormula(formulaStr) {
  return formulaStr.replace(/(\d+)/g, "<sub>$1</sub>");
}

function generarCompuesto() {
  const cat = cationSeleccionado;
  const ani = anionSeleccionado;
  
  // Calcular el MCM de las cargas para balancear la fórmula
  const mcm = getMCM(cat.charge, ani.charge);
  const nCat = mcm / cat.charge;
  const nAni = mcm / ani.charge;
  
  // Formatear la parte de la fórmula de cada ion (convertir dígitos a subíndices)
  let formattedCat = formatIonFormula(cat.formula);
  let formattedAni = formatIonFormula(ani.formula);
  
  // Si el ion es poliatómico y se repite, envolverlo en paréntesis
  if (cat.esPoliatomico && nCat > 1) {
    formattedCat = `(${formattedCat})`;
  }
  if (ani.esPoliatomico && nAni > 1) {
    formattedAni = `(${formattedAni})`;
  }
  
  // Agregar subíndices para indicar la cantidad (si es mayor que 1)
  const subCat = nCat > 1 ? toSubscript(nCat) : "";
  const subAni = nAni > 1 ? toSubscript(nAni) : "";
  
  // Fórmula final, por ejemplo: Fe<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub>
  resultadoFormula = `${formattedCat}${subCat}${formattedAni}${subAni}`;
  
  // Construir el nombre del compuesto: "nombre del anión de nombre del catión"
  resultadoNombre = `${ani.name} de ${cat.name}`;
  // Solo se muestra la oxidación si corresponde y se evita duplicarla
  if (cat.mostrarOxidacion && cat.charge > 1) {
    resultadoNombre += ` (${numeralesRomanos[cat.charge]})`;
  }
  
  // Limpiar cualquier resultado previo (se mostrará al presionar los botones)
  document.getElementById("resultado-formula").innerHTML = "";
  document.getElementById("resultado-nombre").innerHTML = "";
}

/* FUNCIONES MATEMÁTICAS AUXILIARES */

function getMCM(a, b) {
  return (a * b) / getMCD(a, b);
}

function getMCD(a, b) {
  return b === 0 ? a : getMCD(b, a % b);
}

function toSubscript(num) {
  return `<sub>${num}</sub>`;
}

/* FUNCIONES PARA MOSTRAR RESULTADOS AL PRESIONAR BOTONES */

function mostrarFormula() {
  document.getElementById("resultado-formula").innerHTML = resultadoFormula;
}

function mostrarNombre() {
  document.getElementById("resultado-nombre").innerHTML = resultadoNombre;
}
