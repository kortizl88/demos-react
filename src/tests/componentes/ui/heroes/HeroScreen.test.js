import { HeroScreen } from "../../../../componentes/ui/heroes/HeroScreen";
import {mount} from 'enzyme'
import { MemoryRouter, Route } from "react-router-dom";

describe('Pruebas en <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()

    }

    

    test('Debe mostrarse el componente redirect si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock} /> 
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBe(true);
    })

    test('debe mostrar el componente si el parametro hero existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={HeroScreen}/>
            </MemoryRouter>
        );
        expect( wrapper.find('.row').exists()).toBe(true);
    })

    test('debe de regresar a la pantalla anterior con push', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
    
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ (props) => <HeroScreen history={history} />}/>
            </MemoryRouter>
        );
        
        wrapper.find('button').prop("onClick").apply();

        expect( history.push ).toHaveBeenCalledWith("/");
        expect( history.goBack ).not.toHaveBeenCalledWith();
    })

    test('debe regresar a la pantalla anterior con goBack', () => {

        const history = {
            length: 5,
            push: jest.fn(),
            goBack: jest.fn()
    
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ (props) => <HeroScreen history={history} />}/>
            </MemoryRouter>
        );
        
        wrapper.find('button').prop("onClick").apply();

        expect( history.goBack ).toHaveBeenCalled();
        expect( history.push ).not.toHaveBeenCalledWith();
        
    })


    test('debe llamar el redirect si el heroe no existe', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
    
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider5454654']}>
                <Route path="/hero/:heroId" component={ (props) => <HeroScreen history={history} />}/>
            </MemoryRouter>
        );
        
        expect( wrapper.text() ).toBe("");

    })
    
    
    
    
    
    
})
