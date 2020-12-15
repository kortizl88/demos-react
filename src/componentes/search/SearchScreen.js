import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../ui/heroes/HeroCard';
import getHeroesByName from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();

    const { q }  =  queryString.parse( location.search );

    console.log(q);

    const [formValues, handleInputChange, reset] = useForm( {
        textoBusqueda: q
    })

    const { textoBusqueda } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${textoBusqueda}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className='row'>
                <div className='col-5'>
                    <div>Search form</div>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                        type='text'
                        placeholder='busca tu heroe'
                        className='form-control'
                        name='textoBusqueda'
                        autoComplete="off"
                        value={textoBusqueda}
                        onChange={handleInputChange} />

                    <button 
                        type="submit"
                        className='btn m-1 btn-block btn-outline-primary'>
                        Buscar
                    </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero} />
                        ))    
                    }

                </div>

            </div>
        </div>
    )
}
