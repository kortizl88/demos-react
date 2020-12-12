import React, {useMemo} from 'react'
import getHeroesByPublisher from '../../../selectors/getHeroeByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='card-columns'>
            {
                heroes.map( hero => (
                    <HeroCard 
                    key={hero.id}
                    {...hero} />
                ))
            }
        </div>
    )
}
