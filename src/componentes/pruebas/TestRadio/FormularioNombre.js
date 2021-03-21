import React, {useState} from 'react';
import './FormularioNombre.scss';
import { CasillaConfirmacion } from './CasillaConfirmacion';

export const FormularioNombre = ({estado, eventoCambio}) => {
    const [controlApellidos, setControlApellidos] = useState({paterno:false, materno:false});

    const cambioApellidoPaterno = (valor) =>{
        setControlApellidos({
            ...controlApellidos,
            paterno: valor
        });

        eventoCambio({
            ...estado,
            materno: ''
        });
    };

    const cambioApellidoMaterno = (valor) =>{
        setControlApellidos({
            ...controlApellidos,
            materno: valor
        });

        eventoCambio({
            ...estado,
            paterno: ''
        });
    };

    const claseCampoInactivo = valor => {
        if(valor){
            return 'campo inactivo';
        }else{
            return 'campo';
        }

    }

    return (
        <div className='formulario-nombre'>
            <div id='contenedor-campo-nombre' className='campo'>
                <input
                    id='campo-nombre' 
                    type='text'
                    placeholder='¿cuál es tu nombre?'
                    value={estado.nombre}
                    onChange={ e => eventoCambio({
                        ...estado,
                        nombre: e.target.value
                    })}/>
                <div className='borde-inferior'/>
                <div className='verificador'>
                    Nombre
                </div>
            </div>
            <div id='contenedor-campo-paterno' className={claseCampoInactivo(controlApellidos.materno)}>
                <input 
                    id='campo-apellido-paterno' 
                    type='text'
                    placeholder='¿cuál es tu apellido paterno?'
                    value={estado.paterno}
                    disabled={controlApellidos.materno}
                    onChange={ e => eventoCambio({
                        ...estado,
                        paterno: e.target.value
                    })}/>
                <div className='borde-inferior'/>
                <div className='verificador'>
                    <CasillaConfirmacion 
                        estado={controlApellidos.paterno}
                        eventoCambio={cambioApellidoPaterno}
                        identificador={'selector-app'}
                        texto='Solo apellido paterno'
                        inactivo={controlApellidos.materno} />
                </div>   
            </div>
            <div id='contenedor-campo-materno' className={claseCampoInactivo(controlApellidos.paterno)}>
                <input
                    id='campo-apellido-materno'  
                    type='text'
                    placeholder='¿cuál es tu apellido materno?'
                    value={estado.materno}
                    disabled={controlApellidos.paterno}
                    onChange={ e => eventoCambio({
                        ...estado,
                        materno: e.target.value
                        })}/>
                <div className='borde-inferior'/>
                <div className='verificador'>
                    <CasillaConfirmacion 
                        estado={controlApellidos.materno}
                        eventoCambio={cambioApellidoMaterno}
                        identificador={'selector-apm'}
                        texto='Solo apellido materno'
                        inactivo={controlApellidos.paterno} />
                </div>  
            </div>
        </div>
    )
}
