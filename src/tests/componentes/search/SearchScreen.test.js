import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { SearchScreen } from "../../../componentes/search/SearchScreen"

describe('Pruebas en el componente <SearchScreen />', () => {

    test('debe mostrarse el componente con valores por defecto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/buscar"]}>
                <Route path='/buscar' component={SearchScreen} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();

        expect( wrapper.find(".row").exists()).toBe(true);
        
    })

    test('debe de mostrar a batman y el input con el valor del query string', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/buscar?q=batman"]}>
                <Route path='/buscar' component={SearchScreen} />
            </MemoryRouter>
        )

        expect( wrapper.find("input").prop('value') ).toBe("batman");
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar un error si no se encuentra el hero', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/buscar?q=batmanasdasd"]}>
                <Route path='/buscar' component={SearchScreen} />
            </MemoryRouter>
        )

        expect( wrapper.find('HeroCard').exists() ).toBe(false);
        
    })

    test('debe de llamar el push del history', () => {

        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={["/buscar"]}>
                <Route path='/buscar' component={ ()=> <SearchScreen history={history} /> } />
            </MemoryRouter>
        )

        wrapper.find('input').simulate("change", {
            target: {
                "name": "textoBusqueda",
                "value": "batman"
            }
        })

        wrapper.find('form').prop("onSubmit")({
            preventDefault(){}
        });

        expect(history.push).toHaveBeenCalledWith("?q=batman")

    })
    
    
    
    
    
})
