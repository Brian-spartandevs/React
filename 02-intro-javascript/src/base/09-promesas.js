//promesas

import { getHeroeById } from "./base/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//   // tarea
//   // importar getHeroeById
//   setTimeout(() => {
//     const p1 = getHeroeById(2);
//     resolve(p1);
//     // reject("no se pudo encontrar el Heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {
    // tarea
    // importar getHeroeById
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("no se pudo encontrar el Heroe");
      }
    }, 2000);
    
  });

};

getHeroeByIdAsync(4)
.then(console.log)
.catch(console.warn);
