// Funciones en JS
// const saludar = function (nombre) {
//   return `Hola, ${nombre}`;
// };

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;
// console.log(saludar("Brian"));

console.log(saludar2("Esteban"));
console.log(saludar3("Brian"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "Dante_22",
});

const user = getUser();
console.log(user);

// Tarea
// 1. transformar a una funcion de flecha
// 2. tiene que retornar un objeto implicito
// 3. pruebas

const getUsuarioActivo = (nombre) => ({
  uid: "ABC456",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Brian");
console.log(usuarioActivo);
