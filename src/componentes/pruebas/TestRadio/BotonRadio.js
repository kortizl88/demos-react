import React from 'react'

export const BotonRadio = ({leyenda, inactivo=false, valor, estado, eventoCambioEstado}) => {
    return (
        <>
            <label>{leyenda}</label>
            <input type="radio"
                    checked={ estado === valor }
                    disabled={inactivo}
                    value={valor}
                    onChange={(e) => eventoCambioEstado(e.target.value)}
                    />  
        </>
    )
}
