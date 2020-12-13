import { PrivateRoute } from "../../routers/PrivateRoute";
import { mount } from 'enzyme'
import {MemoryRouter} from 'react-router-dom';

describe('Pruebas en el componente PrivateRoutes', () => {
    
    const props = {
        location:{
            pathname: "/marvel"
        }
    }

    Storage.prototype.setItem= jest.fn();

    test('Debe mostrar el componente si esta autenticado y guardar el localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAutenticated={true}
                    component={ () => <span>listo</span> }
                    {...props}
                />
            </MemoryRouter>
        )

        expect( wrapper.find('span').exists() ).toBe(true);

        expect( localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel")
        
    })

    test('Debe de bloquear el componente si no esta autenticado', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAutenticated={false}
                    component={ () => <span>listo</span> }
                    {...props}
                />
            </MemoryRouter>
        )

        expect( wrapper.find('span').exists() ).toBe(false);

        expect( localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel")


        
    })
    
    
    
})
