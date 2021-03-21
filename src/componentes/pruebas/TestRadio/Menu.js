import React from 'react'
import { menuCat } from './datosPrueba';
import { SubMenu } from './SubMenu';

export const Menu = () => {
    const menu = menuCat;
    
    const opciones = (nivel, idPadre) => menu.filter( opcion =>  opcion.nivel === nivel && opcion.idPadre === idPadre );

    return (
        <div>
            {
                opciones(1,0).map( opcion => <div className='opcion' nivel={opcion.nivel} idPadre={opcion.idPadre} >{opcion.descripcion}</div>)
            }
        </div>
    )
}
