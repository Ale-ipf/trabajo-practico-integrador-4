//? enum

enum estadoPedido {
  pendiente = "en espera.....",
  enviado = "enviado🚗",
  entregado = "entregado😎",
}

const primerPedido: estadoPedido = estadoPedido.pendiente;
const segundoPedido: estadoPedido = estadoPedido.enviado;
const tercerPedido: estadoPedido = estadoPedido.entregado;
console.log("####ENUM####");

console.log("Estado de tu pedido: ", primerPedido);
console.log("Estado de tu pedido: ", segundoPedido);
console.log("Estado de tu pedido: ", tercerPedido);

//? Tipo literal

type DiscoPC = "100GB" | "128GB" | "250GB";

const capacidad1: DiscoPC = "100GB";
console.log("#####Tipo literal####");
console.log("El Disco elegido que deseas en tu PC: ", capacidad1);