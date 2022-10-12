import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {
  // convertimos e minusculas y quitamos espacios al inicio y al final
  name = name.toLocaleLowerCase().trim();

  //no existe termino de busqueda
  if( name.length === 0) return [];
  
  // y filtramos lo que hacen match con la busqueda
  return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name) );  
}