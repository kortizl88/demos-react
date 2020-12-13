import {mount} from 'enzyme'
import { Navbar } from '../../../componentes/ui/Navbar';
import { AuthContext } from '../../../auth/AuthContext';
import {MemoryRouter, Router} from 'react-router-dom';
import types from '../../../types/types';

describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }

    const contextValue = {
        dispatch : jest.fn(),
        user: {
            logged: true,
            name: "kris"
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value = {contextValue} >
            <MemoryRouter>
                <Router history={historyMock} >
                    <Navbar />
                </Router>
             </MemoryRouter>
        </AuthContext.Provider>
    );


    test('Debe mostrarse el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect ( wrapper.find('.text-info').text().trim()).toBe("kris")
        
    })

    test('Debe de llamar el logout y usar el history', () => {
      
        wrapper.find('button').prop("onClick")();

        expect( contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })
        expect( historyMock.replace ).toHaveBeenCalledWith("/login");
    })
    
    
})
