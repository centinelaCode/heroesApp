import { getHeroesByPublisher } from '../helpers';

export const HeroeList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );
  // console.log(heroes);

  return (
    <ul>
      {
        heroes.map( heroe => (
          <li key={heroe.id}>
            {heroe.superhero}
          </li>
        ))
      }
    </ul>
  )
}
