import { HeroeCard } from './HeroeCard';
import { getHeroesByPublisher } from '../helpers';

export const HeroeList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );
  // console.log(heroes);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map( heroe => (
          <HeroeCard 
            key={heroe.id}
            { ...heroe }
          />
        ))
      }
    </div>
  )
}
