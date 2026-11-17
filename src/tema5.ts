//? Interfaz

interface Telefono {
  marca: string;
  modelo: string;
  precio: number;
  tiene10Gigas: boolean;
}

const celular1: Telefono = {
  marca: "Samsung",
  modelo: "A54",
  precio: 450000,
  tiene10Gigas: true,
};

const celular2: Telefono = {
  marca: "Iphone",
  modelo: "18proMax",
  precio: 1000000,
  tiene10Gigas: false,
};

// Ejemplo de un objeto que NO cumple la interfaz (da error):
// const celularMal: Telefono = {
//   marca: "Apple",
//   modelo: "iPhone 15",
//   precio: "mucho",   // Error: precio debe ser number, no string
// };                   // Error: falta la propiedad tiene10Gigas

console.log("###Interfaces###");
console.log("Telefono 1:", celular1);
console.log("Telefono 2:", celular2);

//? Types

// acá describo un objeto
type Reloj = {
  marca: string;
  electronico: boolean;
  precio: number;
};

const reloj1: Reloj = {
  marca: "casio",
  electronico: false,
  precio: 150000,
};

// Type con unión de valores (esto una interfaz no lo puede hacer)
type ColorReloj = "negro" | "plateado" | "dorado";

const colorReloj1: ColorReloj = "plateado";
// const colorMal: ColorReloj = "rosa"; // Error: "rosa" no es un valor permitido

//  Type con unión de tipos
type CodigoProducto = number | string;

const codigo1: CodigoProducto = 1050;
const codigo2: CodigoProducto = "CAS-150";

console.log("#####Types#####");
console.log("Reloj:", reloj1);
console.log("Color del reloj:", colorReloj1);
console.log("Código numérico:", codigo1);
console.log("Código de texto:", codigo2);

//? Propiedad opcional
// Se marca con "?" después del nombre. Puede estar o no; si no está, vale undefined.

interface Auricular {
  marca: string;
  inalambrico: boolean;
  colorFunda?: string; // opcional
}

const auricular1: Auricular = {
  marca: "JBL",
  inalambrico: true,
  colorFunda: "azul",
};

const auricular2: Auricular = {
  marca: "Sony",
  inalambrico: false, // no tiene colorFunda y no da error
};

function mostrarAuricular(auricular: Auricular): void {
  if (auricular.colorFunda) {
    console.log(`${auricular.marca} con funda ${auricular.colorFunda}`);
  } else {
    console.log(`${auricular.marca} no tiene funda`);
  }
}

console.log("###Propiedad opcional###");
mostrarAuricular(auricular1);
mostrarAuricular(auricular2);


//? Cuándo usar cada uno
// interface: conviene para objetos y para heredar con extends
interface TelefonoGamer extends Telefono {
    ventilador: boolean;
}

// type: conviene para uniones (como ColorReloj y CodigoProducto de arriba)
const gamer1: TelefonoGamer = {
    marca: "Asus",
  modelo: "ROG 8",
  precio: 1200000,
  tiene10Gigas: true,
  ventilador: true, // propiedad nueva, el resto la hereda de Telefono
};

console.log("###Interface con extends###");
console.log("Teléfono gamer:", gamer1);