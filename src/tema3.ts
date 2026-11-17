const saludo1: string = "Hola Mundo 1 "
const saludo2:string = 'Hola Mundo 2'
const saludo3:string = `Hola Mundo 3`

console.log(saludo1);
console.log(saludo2);
console.log(saludo3);

const entero: number = 18
const decimal:number = 2.5

console.log(`Yo tengo ${entero} años`);
console.log(`Yo le debo ${decimal} centavos`);

const array : number[] = [1,2,3,4,5,6]
const otroArray: Array<number> = [1,2,3,4,5]

console.log("Primer arreglo (number[])",array);
console.log("segundo arreglo (Array<number>)",otroArray);

let id:number | string = 10

console.log(`el id como numero es: ${id}`);

id="10"
console.log(`id como texto: ${id}`);

const verdadero: boolean = true;
const falso: boolean = false;

console.log(`¿Soy mayor de edad? ${verdadero}`);

console.log(`¿Tengo deudas? ${falso}`);

const arreglo: (number | string)[] = [1, 2, 3, "hola mundo"];
console.log("Arreglo con unión:", arreglo);

let dato: any = "hola";
dato = 25; 
console.log(`Con any el dato cambió a ${dato} y TypeScript no avisó`);
