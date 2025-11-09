//Lets que conformaran el dominii
let pronombres = [
  "el",
  "mi",
  "tu",
  "nuestro",
  "un",
  "ese",
  "eldemente",
  "losrebeldes"
];

let adjetivos = [
  "rockero",
  "salvaje",
  "eléctrico",
  "loco",
  "felino",
  "pirata",
  "grosero",
  "ninja",
  "súper",
  "rabioso",
  "galáctico",
  "legendario"
];


let nombres = [
  "guitarra",
  "guerrero",
  "león",
  "drako",
  "código",
  "instinto",
  "dojo",
  "lobo",
  "riffs",
  "memeador",
  "cafetero",
  "tecladista"
];

let extensiones = [".com", ".es", ".io", ".dev", ".net"];

//funcion que contiene la formulas con math, aqui se llama a la funcion en el for para mostrar 8 dominios 
function generarDominio() {
  let pron = pronombres[Math.floor(Math.random() * pronombres.length)];
  let adj = adjetivos[Math.floor(Math.random() * adjetivos.length)];
  let nom = nombres[Math.floor(Math.random() * nombres.length)];
  let ext = extensiones[Math.floor(Math.random() * extensiones.length)];

  let dominioAleatorio = `${pron}${adj}${nom}${ext}`;

  return dominioAleatorio;
}


console.log("🌐 Generador de dominios by Crys:");
for (let i = 0; i < 8; i++) {
  console.log(generarDominio());
}



