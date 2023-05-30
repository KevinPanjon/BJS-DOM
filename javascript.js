var numero = 1
var texto = "Hola"
var mastexto = "Kevin"
var booleano = 2

console.log(numero, texto, mastexto, booleano)

// Las variables integer serian numero y booleano por tener un valor númerico

numero + 2
booleano * 4
suma = numero + booleano

console.log('Resultado de la suma es ' + suma)

// Concatenar texto

libro = texto + " " + mastexto

console.log(libro)

// Función

function saludar() {
    let resultado = texto + " " + mastexto
    return resultado
}

console.log(saludar)

// Función par

function esPar(numero) {
    return numero % 2 === 0;
  }
  
console.log(esPar(4)); // Devuelve true
console.log(esPar(7)); // Devuelve false
  
console.log('SIGUIENTE DIAPOSITIVA')

// Objeto carro

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    caracteristicas: {
      puertas: "5",
    },
    mostrarInformacion: function() {
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
      console.log(`Puertas: ${this.puertas}`);
    }
  };
  
  console.log(carro.marca); 
  console.log(carro.modelo); 
  console.log(carro.caracteristicas.puertas);
  
// ARRAY

// Crear un array de 10 números

let numeros = [4, 8, 15, 16, 23, 42, 7, 12, 6, 11];

// Función para imprimir todos los números de un array

function imprimirNumeros(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Función para añadir un número al array

function agregarNumero(array, numero) {
  array.push(numero);
}

// Función para eliminar los números pares de un array

function eliminarPares(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      array.splice(i, 1);
    }
  }
}

// Función para obtener el número mayor de un array
function obtenerNumeroMayor(array) {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}

// Función para obtener el número menor de un array
function obtenerNumeroMenor(array) {
  let menor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  return menor;
}

// Función para convertir todas las letras de un texto a minúsculas
function convertirAMinusculas(texto) {
  return texto.toLowerCase();
}

// Función para convertir todas las letras de un texto a mayúsculas
function convertirAMayusculas(texto) {
  return texto.toUpperCase();
}

// Función para convertir la primera letra de cada nombre en mayúscula
function convertirPrimeraLetraMayuscula(nombres) {
  let nombresMayuscula = [];
  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let nombreConPrimeraMayuscula = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    nombresMayuscula.push(nombreConPrimeraMayuscula);
  }
  return nombresMayuscula;
}

imprimirNumeros(numeros);
agregarNumero(numeros, 50);
console.log(numeros);
eliminarPares(numeros);
console.log(numeros);
console.log(obtenerNumeroMayor(numeros));
console.log(obtenerNumeroMenor(numeros));
console.log(convertirAMinusculas("TEXTO EN MINÚSCULAS"));
console.log(convertirAMayusculas("texto en mayúsculas"));
console.log(convertirPrimeraLetraMayuscula(["juan", "maría", "pedro"]));

// Manipulación del DOM

// Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
  alert("Pipo");
});

//  Cambiar el contenido de un elemento HTML mediante JavaScript

const myParagraph = document.getElementById("myParagraph");
myParagraph.textContent = "Contenido cambiado de un elemento";

//  Ocultar y mostrar elementos HTML utilizando JavaScript

const myElement = document.getElementById("myElement");
const hideButton = document.getElementById("hideButton");
const showButton = document.getElementById("showButton");

hideButton.addEventListener("click", () => {
  myElement.style.display = "none";
});

showButton.addEventListener("click", () => {
  myElement.style.display = "block";
});

// Crear un array de 10 nombres y función para imprimir una lista con los nombres

const nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Valeria"];

function imprimirNombres() {
  const listaNombres = document.getElementById("listaNombres");
  listaNombres.innerHTML = "";

  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaNombres.appendChild(li);
  });
}

imprimirNombres();

// Crear un array de números y función para mostrar cuántos números contiene

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarCantidadNumeros() {
  const cantidadNumeros = document.getElementById("cantidadNumeros");
  cantidadNumeros.textContent = "El array contiene " + numbers.length + " números.";
}

mostrarCantidadNumeros();

// Crear los nodos necesarios para imprimir un formulario

const formulario = document.createElement("form");
formulario.setAttribute("id", "myForm");

const labelNombre = document.createElement("label");
labelNombre.textContent = "Nombre: ";
const inputNombre = document.createElement("input");
inputNombre.setAttribute("type", "text");
inputNombre.setAttribute("name", "nombre");

const labelEmail = document.createElement("label");
labelEmail.textContent = "Email: ";
const inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("name", "email");

const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Enviar");

formulario.appendChild(labelNombre);
formulario.appendChild(inputNombre);
formulario.appendChild(labelEmail);
formulario.appendChild(inputEmail);
formulario.appendChild(submitButton);

document.body.appendChild(formulario);

// Crea los nodos necesarios para imprimir una tabla

const datos = [
  { id: 1, name: "Marcos", status: "Activo", species: "Human", type: "A", gender: "Male" },
  { id: 2, name: "Paula", status: "Inactivo", species: "Human", type: "B", gender: "Female" },
];

const tabla = document.createElement("table");

const encabezado = document.createElement("tr");
for (const key in datos[0]) {
  const th = document.createElement("th");
  th.textContent = key;
  encabezado.appendChild(th);
}
tabla.appendChild(encabezado);

datos.forEach((objeto) => {
  const fila = document.createElement("tr");
  for (const key in objeto) {
    const celda = document.createElement("td");
    celda.textContent = objeto[key];
    fila.appendChild(celda);
  }
  tabla.appendChild(fila);
});

document.body.appendChild(tabla);


