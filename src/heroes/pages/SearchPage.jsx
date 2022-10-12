import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../components'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  // obtenemos el navigate
  const navigate = useNavigate();  

  // obtenesmo la localizacion (url) donde nos encontamos
  const location = useLocation();    // nos interea la propiedad location.search (son los params)
  // console.log(location)
  
  // usamos la libreia query-strin para obtener los parametros
  const { q = '' } = queryString.parse( location.search ) // en ?q=batman retornaria => {q: 'batman'}
  // console.log(query)

  // hacemos la busqueda de de los heroes en base a lo que se captura en el input
  const heroes = getHeroesByName(q);
  // console.log(heroes)

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  // usamos nuestro custum hook useForm
  const { searchText, onInputChange } = useForm({
    searchText: q
  });




  // funcion onHeadlerSubmit
  const onSearchSubmit = (e) => {
    e.preventDefault();

    // validamos que si lo que ingresamos en el input es un espacio no haga nada
    // if( searchText.trim().length < 1 ) return

    // con navigate vamos a la url q= y lo que ingresamos en la caja de texto
    navigate(`?q=${ searchText }`)

    // console.log( {searchText} )
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form
            onSubmit={ onSearchSubmit }
          >
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button
              className="btn btn-outline-primary btn-lg mt-3"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* Forma 1 una de ocultar/mostrar alertas */}
          {/* {
            ( q === '' )
            ? <div className="alert alert-primary">Search a Hero</div>
            : ( heroes.length === 0 ) && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
          } */}

          {/* Forma 2 una de ocultar/mostrar alertas */}
          <div 
            className="alert alert-primary col animate__animated animate__fadeIn" 
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a Hero
          </div>
          

          <div 
            className="alert alert-danger col animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroeCard 
                key={ hero.id }
                { ...hero }
              />
            ))
          }

        </div>
      </div>
    </>
  )
}
