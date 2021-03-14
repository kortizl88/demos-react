import React, {useState, useEffect} from 'react'
import NumberFormat from 'react-number-format';
import { Selector } from './Selector';

export const InputNumerico = () => {
    const totalVenta = 7867;
    const [enganche, setEnganche] = useState({
        monto: 1500,
        porcentaje: parseInt(( 1500 / totalVenta ) * 100)
    })

    const opciones = [{valor: '1', texto: 'valor 1' },
    {valor: '2', texto: 'valor 2' },
    {valor: '3', texto: 'valor 3' },
    {valor: '4', texto: 'valor 4' }];

    const calcular = (e, tipo) => {
        if(e.key === 'Enter'){
            let valor = e.target.value.toString();
            valor = Number(valor.replace(/[^0-9.-]/g,""))
            if(tipo === 1){
                setEnganche({
                    monto: valor,
                    porcentaje: parseInt(( valor / totalVenta ) * 100 )
                })
            }else{
                setEnganche({
                    monto: parseInt(( totalVenta * valor ) / 100) ,
                    porcentaje : valor
                })
            }
        }
    }

    return (
        <div>
            <p>Numero</p>
            <NumberFormat
                className='monto' 
                value={enganche.monto}
                onChange={e => setEnganche( { ...enganche,  monto: e.target.value } ) }
                onKeyPress={(e) => calcular(e, 1)}
                thousandSeparator={true}
                prefix={'$'} />
            <p>Porcentaje</p>
            <NumberFormat
                className='porcentaje'
                value={enganche.porcentaje}
                onChange={ e => setEnganche( { ...enganche, porcentaje: e.target.value  } ) }
                onKeyPress={(e) => calcular(e, 2)}
                suffix={'%'} />   



                <br/>
                <br/>
                <br/>

                <Selector titulo='Periodicdad:' textoAyuda='Periodicidad' listaOpciones={opciones} eventoCambio={(opcion) => console.log({opcion})}/>         
                <br/>
                <Selector titulo='Periodicdad:' textoAyuda='Periodicidad' listaOpciones={opciones} eventoCambio={(opcion) => console.log({opcion})}/>         
                <br/>
                <Selector titulo='Periodicdad:' textoAyuda='Periodicidad' listaOpciones={opciones} eventoCambio={(opcion) => console.log({opcion})}/>         
        </div>
    )
}
