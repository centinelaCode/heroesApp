import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById} from '../helpers'

export const HeroPage = () => {

  // obtenemos el id medinate los params que viene en la url
  const { id } = useParams();
  
  // buscamos el hero en base al id
  const hero = useMemo(() => getHeroById(id), [ id ]);

  // extraemos navigate del hook useNavigate()
  const navigate = useNavigate();

  // creamos la base de la url para regresar a marvel o dc segun sea el hero que se abrio
  let base;
  // preparamos la url para regresar a maverl o dc
  if (id[0] === 'd'){
    // back dc
    base = id.substring(0, 2)   
  } else {
    // back marvel
    base = id.substring(0, 6)    
  }

  // con navigate(-1) tambien regresa a la url anterior
  const onNavigateBack = () => {
    navigate(`/${base}`)
  }

  // si no existe el hero nos saca de esa route (en caso de que alteren manuelmente la url)
  if(!hero) {
    return <Navigate to="/marvel" />
  }
  

  return (
    <>
      <div className="row mt-5">
        {/* animate__pulse */}
        <div className="col-4 animate__animated animate__slideInLeft">
          <img 
            src={`/assets/heroes/${ hero.id }.jpg`} 
            alt={ hero.superhero}
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego: </b>{hero.alter_ego}</li>
            <li className="list-group-item"> <b>Publisher: </b>{hero.publisher}</li>
            <li className="list-group-item"> <b>First appearance: </b>{hero.first_appearance}</li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{ hero.characters }</p>

          <button 
            className="btn btn-outline-primary btn-lg"
            onClick={ onNavigateBack }
          >
            Back List {`${base.toUpperCase()}`}
          </button>
        </div>
      </div>
    </>
  )
}
