import React from 'react'

export const BotonDeslizable = ({ leyenda, inactivo = false, estado,  eventoCambioEstado }) => {
    return (
        <>
            <label>{leyenda}</label>
            <input 
                type='checkbox'
                checked={estado}
                disabled={inactivo}
                onChange={(e) => eventoCambioEstado(e.target.checked)}
            />
        </>
    )
}
