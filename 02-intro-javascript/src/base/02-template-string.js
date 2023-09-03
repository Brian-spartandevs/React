const nombre = "Brian";
const apellido = "Arrieta";

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre}
${apellido}
${1 + 1}`;

console.log(nombreCompleto);

const getSaludo = (nombre) => {
  return "Hola " + nombre;
};

console.log(`Este es un texto: ${getSaludo(nombre)}`);
