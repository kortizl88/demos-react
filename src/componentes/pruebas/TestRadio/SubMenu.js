import React from 'react'

export const SubMenu = ({opciones}) => {
    return (
        <div>
            {
                opciones.map( opcion => <div className='opcion' nivel={opcion.nivel} idPadre={opcion.idPadre} >{opcion.descripcion}</div>)
            }
        </div>
    )
}
