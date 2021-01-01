import React, {useState} from 'react'
import { BotonDeslizable } from './BotonDeslizable';
import { BotonRadio } from './BotonRadio';
import './botones.css'

export const TestRadio = () => {

    
    const [isChecked, setIsChecked] = useState(false);
    const [radio, setRadio] = useState();

    return (
        <div>
            <h1>Pruebas de radios con useState</h1>

            <h2>Check esta checado? : { isChecked ? 'true' : 'false' } </h2>

            <h2>Radio seleccionado : { radio } </h2>

            <form>
                <h3>Check</h3>
                <BotonDeslizable 
                    leyenda='mi check personalizado'
                    estado={isChecked}
                    eventoCambioEstado={setIsChecked}
                    />

                <br/>
                <h3>Radios</h3>
                <BotonRadio 
                    leyenda="Manzana"
                    valor='manzana'
                    estado={radio}
                    eventoCambioEstado={setRadio} />
                <br/>
                <BotonRadio 
                    leyenda="Pera"
                    valor='pera'
                    estado={radio}
                    eventoCambioEstado={setRadio} />
                <br/>
                <BotonRadio 
                    leyenda="Platano"
                    valor='platano'
                    estado={radio}
                    eventoCambioEstado={setRadio} />

                    <br/>
                    <br/>
                    <br/>
                    <div class="control-group">
                        <label class="control control-radio">
                            First radio
                            <input type="radio" name="radio" checked="checked" />
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-radio">
                            Second radio
                            <input type="radio" name="radio" />
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-radio">
                            Disabled
                            <input type="radio" name="radio2" disabled="disabled" />
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-radio">
                            Disabled & checked
                            <input type="radio" name="radio2" disabled="disabled" checked="checked" />
                            <div class="control_indicator"></div>
                        </label>
                    </div>

            </form>
        </div>
    )
}
