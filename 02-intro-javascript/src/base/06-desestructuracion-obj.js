// Desestructuracion o Asignacion Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaObjeto = ({ nombre, edad, clave, rango = "Capitan" }) => {
  //   console.log(nombre, edad, clave, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latLng: {
      lat: 14.5544,
      lng: -12.4354,
    },
  };
};

const { nombreClave, anios, latLng:{ lat, lng } } = retornaObjeto(persona);
console.log(nombreClave, anios);
console.log( lat, lng );
