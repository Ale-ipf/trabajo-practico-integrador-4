console.log("####Tipos de parametros####");
const multiplicar = (a: number, b: number) => {
  return a * b;
};
console.log(multiplicar(8, 8));
console.log("#####Tipo de Retorno#####");
const respuesta = (esCorrecta: boolean): string => {
  if (esCorrecta) {
    return "es coorrecto";
  } else {
    return "es incorrecto";
  }
};
console.log(respuesta(true));

console.log("####Parametros Opcional####");
const saludo = (nombre: string, mensage?: string): string => {
  if (mensage) {
    return ` Buenas Tardes ${nombre}, ${mensage}`;
  }
  return `Buenas Tardes ${nombre}`;
};

console.log(saludo("axel", "tu color favorito cual es?"));
console.log(saludo("axel"));

console.log("####Parametros por Defecto####");
const saludar = (nombre: string, saludo: string = "Buenaas"): string => {
  return `${saludo} ${nombre}`;
};
console.log(saludar("Axel", "hola"));
console.log(saludar("Axel"));