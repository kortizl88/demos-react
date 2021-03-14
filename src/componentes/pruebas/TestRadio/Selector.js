import React, {useState} from 'react'
import './Selector.css'

export const Selector = ({identificador, listaOpciones, titulo, textoAyuda, eventoCambio}) => {
    const [abierto, setAbierto] = useState(false);
    const [opciones, setOpciones] = useState(listaOpciones);
    const seleccionado = listaOpciones.find( opc => opc.seleccionado) || {};
    const [seleccion, setSeleccion] = useState(seleccionado);
    return (
        <div className='selector'>
            {titulo && <div className='titulo'>{titulo}</div>}
            <div className='control'>
                <div className='opcion-seleccionada' onClick={() => setAbierto(!abierto)} >
                    { seleccion.texto ? seleccion.texto : textoAyuda }
                </div>
                <div> <img src={'./assets/chevron.png'} className='flechita'/> </div>
            </div>
            <div className='borde-inferior'/>
            {abierto && 
            <div className='opciones'>
                {opciones.map(opc => <div key={`selector-${identificador}-opc${opc.valor}`}
                                        className={`opcion ${opc===seleccion ? 'marcada': ''}`} 
                                        onClick={() => { setSeleccion(opc); 
                                                         setAbierto(false);
                                                         eventoCambio(opc)} }>
                                        {opc.texto}
                                    </div>)
                }
            </div>}
            {
                !abierto && seleccion.valor &&
                <div>{textoAyuda}</div>
            }
        </div>
    )
}
