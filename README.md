Tema 1: ¿Qué es TypeScript?
● ¿Qué es TypeScript y quién lo desarrolla?
TypeScript es un superconjunto de JavaScript desarrollado por Microsoft que agrega tipado estático
opcional. Todo código JavaScript válido es también TypeScript válido. Antes de ejecutarse, el código TypeScript se convierte en JavaScript puro.
TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. Anders Hejlsberg, diseñador de C# y creador de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript.
TypeScript es un superconjunto de JavaScript desarrollado por Microsoft que agrega tipado estático
opcional. Todo código JavaScript válido es también TypeScript válido. Antes de ejecutarse, el código TypeScript se convierte en JavaScript puro.

● ¿Qué diferencias tiene con JavaScript?
TypeScript mantiene una relación peculiar con JavaScript. TypeScript ofrece todas las características de JavaScript, además de una capa adicional: su propio sistema de tipos.
Por ejemplo, JavaScript proporciona primitivas de lenguaje como string y number, pero no comprueba que se hayan asignado de forma consistente. TypeScript sí lo hace.
Esto significa que tu código JavaScript actual también es código TypeScript. La principal ventaja de TypeScript es que puede resaltar comportamientos inesperados en tu código, reduciendo la probabilidad de errores.
En JavaScript se puede utilizar una gran variedad de patrones de diseño. Sin embargo, algunos dificultan la inferencia automática de tipos (por ejemplo, los patrones que utilizan programación dinámica). Para solucionar estos casos, TypeScript admite una extensión del lenguaje JavaScript que permite especificar los tipos que se deben utilizar.

● ¿Qué ventajas ofrece?
TypeScript se convierte en JavaScript puro. Beneficios principales: 
• Detecta errores mientras se escribe el código, antes de ejecutarlo.
• Mejora el autocompletado y la refactorización en el editor.
• Hace el código mas mantenible y escalable.
•Los tipos funcionan como documentación del propio código.

● ¿Cuál es su versión actual?
Versiones actuales (noviembre de 2026) • TypeScript 7 salió el 8 de julio de 2026. Es una reescritura completa del compilador en Go, unas 10
veces más rápida. Se instala igual que antes, con npm i -D typescript.
• TypeScript 7 cambió varios valores por defecto: strict viene activado y el campo types viene vacío, entre otros. Por eso algunas configuraciones de guías anteriores ya no funcionan igual.
• Node.js 24 y 26 son las versiones LTS(con soporte a largo plazo) recomendadas. Las dos pueden ejecutar archivos .ts directamente, con limitaciones.


Tema 2: Crear y ejecutar un proyecto
● ¿Cómo se instala TypeScript en un proyecto?
| | npm install -g typescript (global) | npm i -D typescript (local) |
| :--- | :---: | ---: |
| Izquierda | Centro | Derecha |
| Dónde se instala | Una vez en la computadora | En node_modules del proyecto |
| Queda registrado en package.json | No | Sí, en devDependencies |
| Versión | La misma para todos los proyectos | Cada proyecto tiene la suya |

Se recomienda la instalación local. Cualquiera que clone el proyecto y ejecute npm install obtiene
exactamente la misma versión. -D es la abreviatura de --save-dev: indica que es una herramienta de
desarrollo, no algo que el programa necesita para funcionar. Si hay una instalación global y una local, tsc a secas ejecuta la global y npx tsc la local. Se puede comparar
con tsc -v y npx tsc -v.

● ¿Para qué sirve el archivo tsconfig.json?
Para qué sirve
Es el archivo de configuración del proyecto. Le indica a TypeScript tres cosas:
1. Qué archivos forman el proyecto: include. 
2. Qué tan estricto debe ser al verificar tipos: strict y opciones relacionadas. 
3. Cómo generar el JavaScript: versión (target), sistema de módulos (module) y carpeta de salida
(outDir). 
También define que la carpeta es un proyecto TypeScript. Sin tsconfig.json, tsc no sabe qué compilar y
muestra la pantalla de ayuda. Lo leen tsc y el editor; Node y tsx no lo usan para verificar. Por qué crearlo a mano

● ¿Qué hace el comando tsc?
tsc: Verifica tipos y genera JavaScript

● ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
Hay tres formas de pasar de TypeScript a un programa en ejecución, y solo tsc verifica los tipos. En el curso
se usa tsx para desarrollar, tsc para verificar y compilar, y Node para ejecutar la versión compilada. Los tipos no se verifican al ejecutar
Opción A: Node directamente (node src/app.ts)
Node 24 y 26 ejecutan archivos .ts sin instalar nada. Lo que hacen se llama type stripping: borran las
anotaciones de tipos y ejecutan el JavaScript que queda. No verifican tipos, ignoran el tsconfig.json y
nunca generan código nuevo.
Opción B: tsx(npm run dev)
Soporta toda la sintaxis de TypeScript de esta guía: enum, namespace, parameter properties e imports sin
extensión. Sus límites son otros: 
• No verifica tipos. 
• No soporta emitDecoratorMetadata, que usan NestJS y TypeORM.
• Es solo para desarrollo: no genera archivos para producción.
Es la opción recomendada para el curso. 
Opción C: compilar con tsc y ejecutar con Node
tsc entiende todo TypeScript y es el único que verifica tipos. Sus límites: 
• No ejecuta nada; solo verifica y genera .js. 
• Solo procesa .ts: no copia a dist/ archivos .json, imágenes ni otros recursos. 
• No reescribe los alias de paths en el .js generado, y Node no sabe resolverlos. 
• No empaqueta: genera un .js por cada .ts. Para unirlos existen herramientas como esbuild o Vite. Por defecto, tsc genera los .js aunque haya errores: muestra el aviso pero no bloquea. Por eso el tsconfig
del curso incluye noEmitOnError. Igualmente, tsc termina con código de error cuando encuentra
problemas, así que en npm run build && npm start el segundo comando no se ejecuta.

Tema 3: Tipos básicos
● ¿Qué son los tipos string, number y boolean?
JavaScript tiene tres tipos primitivos muy utilizados : string, number, y boolean. Cada uno tiene un tipo correspondiente en TypeScript. Como era de esperar, estos son los mismos nombres que verías si usaras el typeof operador de JavaScript en un valor de esos tipos:

•string representa valores de cadena como"Hello, world"
•number es para números como 42. JavaScript no tiene un valor de tiempo de ejecución especial para enteros, por lo que no hay un equivalente a into float- todo es simplementenumber
•boolean es para los dos valores true y false

● ¿Cómo se declara un array con tipo?
TypeScript al igual que JavaScript, permite trabajar con arreglos de valores. Los arreglos pueden ser escritos de dos formas posibles. La primera es usando los paréntesis [] para denotar un arreglo del tipo definido.
let listaDeNumeros: number[] = [1, 2, 3];
En el ejemplo anterior hemos definido que la variable listaDeNumeros puede solo contener números. En TypeScript si intentamos agregar un tipo diferente dentro de un arreglo nos generará un error.

● ¿Qué es un tipo unión?
Los tipos unión en TypeScript permiten que una variable o una función acepten múltiples tipos de datos. Esto nos da flexibilidad para definir tipos y nos ayuda en situaciones donde los valores pueden ser de más de un tipo. 
Para declarar un tipo unión, se utiliza el operador de barra vertical (|) entre los tipos que se quieren combinar. Esto indica que una variable puede ser de uno u otro tipo.
● ¿Por qué se recomienda evitar any?
Toma siempre en cuenta que el utilizar any implica que se pierdan los beneficios del tipado, entre ellos el de la seguridad y prevención de errores. La seguridad que el tipado brinca es una de las principales motivaciones para utilizar TypeScript por lo cual se recomienda que no se utilice any a menos que sea estrictamente necesario.

Tema 4: Funciones
● ¿Cómo se indican los tipos de los parámetros?
Las funciones son el componente mas básico del como los datos son transferidos a través de JavaScript. TypeScript permite especificar los tipos de los parámetros recibidos así como del tipo de valor retornado.
Cuando se declara una función es posible añadir anotaciones después de cada uno de los parámetros de manera que estos indiquen el tipo de cada uno de estos.

● ¿Cómo se indica el tipo de retorno?
Es posible también definir el tipo de valor que retorna la función.
function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
En el ejemplo anterior hemos utilizado un número base que es 10, este se asigna a la variable numeroBase, de ahí se pasa como argumento a la función elevarAlCuadrado la cual especifica que debe retornar un numero number.

Así como pasa con las variables, en muchas de las ocasiones no es necesario especificar el tipo que una función retorna ya que TypeScript obtiene este desde la propia interpretación del código basado en la instrucción return.

● ¿Qué es un parámetro opcional?
Las funciones en JavaScript usualmente tienen un número de argumentos variable. Por ejemplo el método toFixed del tipo number toma como segundo parámetro un número que indica la cantidad de dígitos a los cuales debe redondear.
Para poder reproducir esta característica dentro de TypeScript utilizamos el signo de interrogación ? que indica que el parámetro es opcional.
Cuando no se envía un argumento a la función este tiene el tipo undefined, esto se debe a que los parámetros no especificados en JavaScript tienen por default el valor undefined.
También es posible asignar un valor por default y omitir el tipo que es inferido desde su asignación.


● ¿Qué es un parámetro por defecto?
TypeScript también permite especificar valores por defecto para los parámetros de una función (esto significa que si no se proporciona un valor para un parámetro, se utilizará el valor por defecto especificado).
Para asignar un valor por defecto a un parámetro, utilizamos el operador de asignación (=) después del tipo de dato.

Tema 5: Interfaces y type
● ¿Qué es una interfaz y para qué sirve?
Las Interface son una herramienta fundamental en la programación orientada a objetos, ya que nos permiten definir la estructura y el comportamiento de un objeto.
Una interfaz en TypeScript nos permite definir la estructura de un objeto, especificando los nombres y los tipos de sus propiedades y métodos.
Posteriormente, las clases pueden implementar este interface (en este caso, deben definir todas las variables y métodos que incluya el interfaz).
● ¿Qué es un type?
El uso de type e interface es muy similar, y en la mayoría de los casos es posible elegir cualquiera de ellos de forma indistinta. Casi todas las características de interface están disponibles en type, la clave para distinguir entre cuando usar una y otra es que una ves que se define un type no se le pueden agregar mas propiedades, mientras que interface es siempre extendible.
Cuando se utiliza type no es posible agregar mas propiedades. Esta es una de las diferencias que existen entre interface vs type.
● ¿Cómo se declara una propiedad opcional?
En TypeScript, una propiedad opcional se declara añadiendo un signo de interrogación (?) inmediatamente después del nombre de la propiedad, antes de los dos puntos (:)
● ¿Cuándo conviene usar cada uno?
Usa interface por defecto cuando estés modelando objetos o clases que necesiten ser extendidos o fusionados.
Usa type cuando necesites trabajar con uniones (union types), tipos primitivos, tuplas o transformaciones avanzadas.

Tema 6: Enums y tipos literales
● ¿Qué es un enum?
Un enum no es solo un tipo: TypeScript lo convierte en un objeto de JavaScript. Funciona con tsx y tsc, pero
no con node src/app.ts
Un enumeración es una característica de TypeScript que permite definir un conjunto de valores constantes bajo un mismo nombre.

● ¿Qué es un tipo literal?
En TypeScript, los tipos literales son tipos que permiten definir variables con valores específicos y prefijados en lugar de tipos amplios como string o number.
El motivo principal es permitirnos un mayor control y seguridad sobre los valores que puede tomar una variable, limitando las opciones disponibles.

● ¿En qué se parecen y en qué se diferencian?
En qué se parecen
• Seguridad de tipos: Ambos evitan errores de escritura en el código. Si intentas asignar un valor fuera de los definidos, TypeScript arrojará un error en tiempo de compilación
• Autocompletado en el IDE: Tanto si usas un enum como un tipo literal, editores como VS Code te sugerirán la lista de opciones válidas de forma inmediata al escribir.
• Documentación del código: Expresan de forma explícita las intenciones de las variables en la lógica del negocio (ej. estados de una petición, roles de usuario, direcciones de movimiento).

En qué se diferencian
1. Presencia en tiempo de ejecución (Runtime) vs. Solo compilación
• Enum: Es una de las poquísimas características de TypeScript que no es solo un tipo, sino una extensión que genera código JavaScript real. Al compilar, un enum se convierte en una función IIFE que inicializa un objeto.
• Literal: Es una estructura nativa del sistema de tipos de TypeScript. Al compilar a JavaScript puro, el tipo desaparece por completo (type erasure), dejando únicamente los valores crudos asignados a las variables.
2. Sintaxis y Experiencia de Uso
• Enum: Te obliga a importar el objeto del enum en cada archivo y usar la notación de punto para acceder a él (RolEnum.Admin).
• Literal: No necesitas importar nada para asignar un valor; simplemente escribes la cadena de texto exacta entre comillas ("ADMIN") y TypeScript sabe si es válida.
3. Mapeo Inverso (Reverse Mapping)
• Enum: Si utilizas enums numéricos por defecto (ej. enum Estado { Activo }, donde Activo vale 0), TypeScript crea automáticamente un mapa inverso. Puedes hacer Estado[0] y te devolverá el string "Activo".
• Literal: Al no existir estructuras de objetos en tiempo de ejecución, no hay forma de recuperar metadatos ni de hacer mapeos inversos de manera nativa.

● ¿En qué situaciones se puede usar cada uno?
La comunidad moderna de TypeScript se inclina fuertemente por los Tipos Literales unidos debido a su ligereza, rendimiento y compatibilidad limpia con el ecosistema de JavaScript estándar.
• Usa Tipos Literales para la inmensa mayoría de casos cotidianos (estados, configuraciones, strings fijos) porque mantienen tu código limpio y no engordan el peso de tu aplicación final.
• Usa Enums si vienes de lenguajes como C# o Java y te resulta imprescindible la estructura clásica de objetos, o si necesitas imperativamente características avanzadas como el mapeo inverso en tiempo de ejecución. Nota: si los usas por rendimiento, considera declararlos como const enum para que no generen el objeto JS.

Bibliografía / Fuentes consultadas

Material de classroom
https://drive.google.com/file/d/1AR0TMOxDbUlrNzbYsJqY7y29ibv3hkzc/view?hl=es

Wikipedia
https://es.wikipedia.org/wiki/TypeScript

Apuntes.de
https://apuntes.de/typescript/#gsc.tab=0

Luis Llamas
https://www.luisllamas.es/curso-typescript/