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

//FUNCION A CORREGIR CON LA CLASE DEL 10 DE NOVIEMBRE BUENAS PRACTICAS 
//function generarDominio() {
// let pron = pronombres[Math.floor(Math.random() * pronombres.length)];
//let adj = adjetivos[Math.floor(Math.random() * adjetivos.length)];
//let nom = nombres[Math.floor(Math.random() * nombres.length)];
//let ext = extensiones[Math.floor(Math.random() * extensiones.length)];

// Agregue la formula en una sola linea y con flecha para reutilizarla 
let elegirAlAzar= arr => arr[Math.floor(Math.random() * arr.length)];

let generarDominio = () =>
  `${elegirAlAzar(pronombres)}${elegirAlAzar(adjetivos)}${elegirAlAzar(nombres)}${elegirAlAzar(extensiones)}`;



console.log("🌐 Generador de dominios by Crys:");
for (let i = 0; i < 8; i++) {
  console.log(generarDominio());
}



