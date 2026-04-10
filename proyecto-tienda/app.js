const productos = [
  { id: 1, nombre: "Mouse",    categoria: "Periferico", precio: 50000,  stock: 10, ventas: 12 },
  { id: 2, nombre: "Teclado",  categoria: "Periferico", precio: 120000, stock: 5,  ventas: 7  },
  { id: 3, nombre: "Monitor",  categoria: "Pantalla",   precio: 800000, stock: 2,  ventas: 4  },
  { id: 4, nombre: "USB",      categoria: "Accesorio",  precio: 30000,  stock: 0,  ventas: 15 },
  { id: 5, nombre: "Diadema",  categoria: "Audio",      precio: 90000,  stock: 8,  ventas: 6  },
];

// clasificar precio con switch
function clasificarPrecio(precio) {
  switch (true) {
    case precio <= 40000:  return "Economico";
    case precio <= 100000: return "Medio";
    case precio <= 500000: return "Alto";
    default:               return "Premium";
  }
}

// 14 - mostrar todos los productos
function verTodos() {
  console.log("\n--- Todos los productos ---");
  productos.forEach(function(p) {
    console.log("ID:" + p.id + " | " + p.nombre + " | $" + p.precio + " | Stock:" + p.stock + " | Ventas:" + p.ventas);
  });
}

// 15 - filtrar stock bajo (menor a 5)
function stockBajo() {
  console.log("\n--- Productos con stock menor a 5 ---");
  let resultado = productos.filter(function(p) { return p.stock < 5; });
  resultado.forEach(function(p) { console.log(p.nombre + " | Stock: " + p.stock); });
}

// 16 - filtrar agotados (stock = 0)
function verAgotados() {
  console.log("\n--- Productos agotados ---");
  let agotados = productos.filter(function(p) { return p.stock === 0; });
  if (agotados.length === 0) {
    console.log("No hay productos agotados");
  } else {
    agotados.forEach(function(p) { console.log(p.nombre + " | Ventas: " + p.ventas); });
  }
}

// 17 - lista de nombres y precios con map + mensajes de reabastecimiento
function listaPrecios() {
  console.log("\n--- Lista de precios ---");
  let lista = productos.map(function(p) {
    let msg = p.stock === 0 ? " *** REABASTECER ***" : "";
    return p.nombre + " => $" + p.precio + msg;
  });
  lista.forEach(function(l) { console.log(l); });
}

// 18 - valor total del inventario con reduce (precio * stock)
function calcularInventario() {
  let total = productos.reduce(function(acc, p) { return acc + (p.precio * p.stock); }, 0);
  console.log("\n--- Valor total del inventario ---");
  console.log("$" + total.toLocaleString());
}

// 19 - total de ventas acumuladas con reduce
function totalVentas() {
  let total = productos.reduce(function(acc, p) { return acc + p.ventas; }, 0);
  console.log("\n--- Total de unidades vendidas ---");
  console.log(total + " unidades");
}

// 20 - ordenar por precio o por ventas
function ordenarPorPrecio() {
  console.log("\n--- Productos ordenados por precio (mayor a menor) ---");
  [...productos].sort(function(a, b) { return b.precio - a.precio; })
    .forEach(function(p) { console.log(p.nombre + " | $" + p.precio); });
}

function ordenarPorVentas() {
  console.log("\n--- Productos ordenados por ventas (mayor a menor) ---");
  [...productos].sort(function(a, b) { return b.ventas - a.ventas; })
    .forEach(function(p) { console.log(p.nombre + " | Ventas: " + p.ventas); });
}

// 21 - buscar producto por nombre con find
function buscarProducto(termino) {
  let resultado = productos.find(function(p) {
    return p.nombre.toLowerCase() === termino.toLowerCase() || p.id === parseInt(termino);
  });
  console.log("\n--- Buscar producto ---");
  if (resultado) {
    console.log("Encontrado: " + resultado.nombre + " | $" + resultado.precio + " | Stock: " + resultado.stock);
  } else {
    console.log("Producto no encontrado");
  }
}

// 22 - some y every
function validarStock() {
  console.log("\n--- Validacion de stock ---");
  let hayAgotado  = productos.some(function(p)  { return p.stock === 0; });
  let todosConStock = productos.every(function(p) { return p.stock > 0; });
  console.log("Hay al menos un agotado: " + hayAgotado);
  console.log("Todos tienen stock: " + todosConStock);
}

// 23 - clasificar todos por rango de precio con switch
function clasificarTodos() {
  console.log("\n--- Clasificacion por precio ---");
  productos.forEach(function(p) {
    console.log(p.nombre + " => " + clasificarPrecio(p.precio));
  });
}

// reporte final
function verReporte() {
  console.log("\n===== REPORTE FINAL =====");
  let masCaro    = productos.reduce(function(max, p) { return p.precio > max.precio ? p : max; });
  let masBarato  = productos.reduce(function(min, p) { return p.precio < min.precio ? p : min; });
  let masVendido = productos.reduce(function(max, p) { return p.ventas > max.ventas ? p : max; });
  let valorInv   = productos.reduce(function(acc, p) { return acc + (p.precio * p.stock); }, 0);
  let totalUnd   = productos.reduce(function(acc, p) { return acc + p.ventas; }, 0);
  let agotados   = productos.filter(function(p) { return p.stock === 0; }).length;

  console.log("Producto mas caro:    " + masCaro.nombre + " ($" + masCaro.precio + ")");
  console.log("Producto mas barato:  " + masBarato.nombre + " ($" + masBarato.precio + ")");
  console.log("Producto mas vendido: " + masVendido.nombre + " (" + masVendido.ventas + " ventas)");
  console.log("Valor del inventario: $" + valorInv.toLocaleString());
  console.log("Total unidades vend.: " + totalUnd);
  console.log("Productos agotados:   " + agotados);
}

// menu con while
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let salir = false;

function menu() {
  console.log("\n==== TIENDA TECNOLOGICA ====");
  console.log("1-Ver todos      2-Stock bajo     3-Agotados");
  console.log("4-Lista precios  5-Inventario     6-Total ventas");
  console.log("7-Ord. precio    8-Ord. ventas    9-Buscar");
  console.log("10-Validar stock 11-Clasificar    12-Reporte");
  console.log("0-Salir");

  rl.question("Opcion: ", function(op) {
    switch (op) {
      case "1":  verTodos(); break;
      case "2":  stockBajo(); break;
      case "3":  verAgotados(); break;
      case "4":  listaPrecios(); break;
      case "5":  calcularInventario(); break;
      case "6":  totalVentas(); break;
      case "7":  ordenarPorPrecio(); break;
      case "8":  ordenarPorVentas(); break;
      case "9":
        rl.question("Nombre o ID del producto: ", function(termino) {
          buscarProducto(termino);
          if (salir == false) { menu(); }
        });
        return;
      case "10": validarStock(); break;
      case "11": clasificarTodos(); break;
      case "12": verReporte(); break;
      case "0":  salir = true; rl.close(); console.log("\nHasta luego!"); break;
      default:   console.log("Opcion invalida"); break;
    }
    if (salir == false) { menu(); }
  });
}

menu();