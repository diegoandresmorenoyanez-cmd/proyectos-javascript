let aprendices = [
  { nombre: "Ana Torres", nota: 8.5 }, { nombre: "Luis Martinez", nota: 4.2 },
  { nombre: "Sofia Ramirez", nota: 9.1 }, { nombre: "Camilo Herrera", nota: 5.8 },
  { nombre: "Valentina Lopez", nota: 3.7 }, { nombre: "Diego Morales", nota: 7.4 },
  { nombre: "Isabella Gomez", nota: 6.0 }, { nombre: "Andres Castro", nota: 2.9 },
  { nombre: "Maria Ruiz", nota: 10.0 }, { nombre: "Sebastian Diaz", nota: 5.0 },
];

function clasificar(nota) {
  switch (true) {
    case nota >= 9: return "Excelente";
    case nota >= 7: return "Bueno";
    case nota >= 6: return "Satisfactorio";
    case nota >= 5: return "Suficiente";
    default: return "Insuficiente";
  }
}

let aprobados = aprendices.filter(function(a) { return a.nota >= 6; });
let reprobados = aprendices.filter(function(a) { return a.nota < 6; });
let suma = aprendices.reduce(function(acc, a) { return acc + a.nota; }, 0);
let promedio = suma / aprendices.length;
let ordenados = aprendices.sort(function(a, b) { return b.nota - a.nota; });
let mensajes = aprendices.map(function(a) { return a.nombre + " => " + clasificar(a.nota); });

console.log("--- Aprobados ---");
aprobados.forEach(function(a) { console.log(a.nombre + " | " + a.nota); });
console.log("\n--- Reprobados ---");
reprobados.forEach(function(a) { console.log(a.nombre + " | " + a.nota); });
console.log("\n--- Promedio general: " + promedio.toFixed(2) + " ---");
console.log("\n--- Ordenados de mayor a menor ---");
let i = 0;
while (i < ordenados.length) {
  console.log((i + 1) + ". " + ordenados[i].nombre + " | " + ordenados[i].nota);
  i++;
}
console.log("\n--- Mensajes ---");
mensajes.forEach(function(m) { console.log(m); });