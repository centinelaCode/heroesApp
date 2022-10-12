import { Navigate, useParams } from 'react-router-dom'
import { getHeroById} from '../helpers'

export const HeroPage = () => {

  // obtenemos el id medinate los params que viene en la url
  const { id } = useParams();
  
  // buscamos el hero en base al id
  const hero = getHeroById(id);

  // si no existe el hero nos saca de esa route (en caso de que alteren manuelmente la url)
  if(!hero) {
    return <Navigate to="/marvel" />
  }
  

  return (
    <>
      <h1>Hero by ID</h1>
    </>
  )
}
