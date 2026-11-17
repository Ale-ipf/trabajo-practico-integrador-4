const lenguaje: string = "TypeScript";
const comandoInstalar: string = "npm i -D typescript @types/node tsx";
const archivoConfig: string = "tsconfig.json";
const usaModoEstricto: boolean = true;

console.log("##### INSTALACIÓN #####");
console.log(`Para instalar ${lenguaje} se usa: ${comandoInstalar}`);

console.log("##### TSCONFIG #####");
console.log(`El archivo ${archivoConfig} guarda la configuración del proyecto`);
console.log(`¿Usa modo estricto? ${usaModoEstricto}`);

console.log("##### COMANDOS #####");
console.log("tsc  -> revisa los tipos y crea el archivo .js");
console.log("tsx  -> ejecuta el archivo .ts directamente");
console.log("node -> ejecuta el archivo .js");