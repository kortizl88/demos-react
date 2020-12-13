import React, { Fragment } from 'react'
import { Redirect, Route } from "react-router-dom";
import { Switch } from 'react-router-dom'
import { DcScreen } from '../componentes/dc/DcScreen'
import { MarvelScreen } from '../componentes/marvel/MarvelScreen'
import { SearchScreen } from '../componentes/search/SearchScreen';
import { HeroScreen } from '../componentes/ui/heroes/HeroScreen'
import { Navbar } from '../componentes/ui/Navbar'

export const DashBoardRoutes = ({history}) => {
    return (
        <Fragment>
            <Navbar/>
            <div className='container mt-2'>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/buscar" component={SearchScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </Fragment>
    )
}
