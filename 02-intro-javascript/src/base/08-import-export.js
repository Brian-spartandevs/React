// import { heroes } from "../data/heroes";
// import { heroes } from "../data/heroes";

import heroes, { owners } from "../data/heroes";

console.log(owners);

const getHeroeById = (id) => {
  return heroes.find((element) => element.id === id);
};

console.log(getHeroeById(2));

// find?, filter
const getHeroeByOwner = (owner) => {
  return heroes.filter((element) => element.owner === owner);
};

console.log(getHeroeByOwner("Marvel"));
