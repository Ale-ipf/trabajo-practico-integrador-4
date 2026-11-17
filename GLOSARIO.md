# Glosario de TypeScript

Diez conceptos que suelen generar dudas al trabajar con TypeScript.

## 1. Inferencia de tipos
TypeScript deduce el tipo de una variable o expresión a partir del valor asignado o del contexto. Por ejemplo, en `const edad = 20`, infiere que `edad` es de tipo `number` sin que haya que escribirlo.

## 2. Anotación de tipo
Escribir explícitamente el tipo esperado en una variable, parámetro o valor de retorno. Por ejemplo: `let nombre: string` o `function sumar(a: number, b: number): number`.

## 3. Narrowing (refinamiento de tipos)
Es el proceso por el que TypeScript reduce las posibilidades de un tipo dentro de una parte del código, después de comprobar una condición. Si una variable puede ser `string | number`, una verificación como `typeof valor === "string"` permite tratarla como `string` dentro de ese bloque.

## 4. Tipo unión
Combina dos o más tipos con el operador `|`. Una variable `string | number` puede contener un texto o un número; antes de usarla como uno de esos tipos, puede ser necesario comprobar cuál tiene.

## 5. `any`
Tipo que desactiva la mayoría de las comprobaciones para el valor al que se asigna. Permite cuálquier operación y asignación, por lo que puede ocultar errores. Conviene evitarlo cuando sea posible.

## 6. `unknown`
Representa un valor cuyo tipo todavía no se conoce. A diferencia de `any`, no permite usar el valor directamente: primero hay que comprobar su tipo o validarlo. Es útil para datos externos, como una respuesta recibida de una API.

## 7. `never`
Representa un valor que no puede ocurrir. Se usa, por ejemplo, en funciones que siempre lanzan un error o que nunca terminan, y para comprobar que se contemplaron todos los casos de una unión.

## 8. Aserción de tipo
Indica a TypeScript que trate un valor como un tipo determinado, mediante una expresión como `valor as HTMLInputElement`. No convierte ni valida el valor durante la ejecución; si la suposición es incorrecta, puede producir errores en tiempo de ejecución.

## 9. Encadenamiento opcional (`?.`)
Permite acceder a una propiedad o llamar a un método solo si el valor anterior no es `null` ni `undefined`. Si lo es, la expresión devuelve `undefined` en lugar de producir un error. No reemplaza la validación cuando la propiedad es obligatoria.

## 10. Eliminación de tipos (type erasure)
Al compilar TypeScript a JavaScript, las anotaciones y construcciones que solo existen para el sistema de tipos se eliminan. Por eso los tipos ayudan a verificar el programa durante el desarrollo, pero no validan por sí solos los datos cuando el programa está ejecutándose.
