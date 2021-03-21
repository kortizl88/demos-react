import React from 'react'
import './CasillaConfirmacion.scss';

export const CasillaConfirmacion = ({estado, eventoCambio, identificador, texto, inactivo=false }) => {
    
    const estiloEtiqueta = () => {
        if(inactivo){
            return 'etiqueta inactivo'
        }else{
            return 'etiqueta';
        }
    };

    return (
        <div className='casilla-confirmacion'>
            <label className={estiloEtiqueta()} htmlFor={identificador} >{texto}
                <input 
                    className='control' 
                    type="checkbox" 
                    id={identificador}
                    disabled={inactivo}
                    checked={estado}
                    onChange={()=> eventoCambio(!estado)}/>
                <span className="indicador"/>
            </label>
        </div>
    )
}
