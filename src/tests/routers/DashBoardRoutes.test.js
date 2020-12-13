import {mount} from 'enzyme'
import { AuthContext } from '../../auth/AuthContext';
import { DashBoardRoutes } from "../../routers/DashBoardRoutes";
import {MemoryRouter} from 'react-router-dom';

describe('Pruebas en DashBoardRouter', () => {

    const contextValue = {
        dispatch : jest.fn(),
        user: {
            logged: true,
            name: "kris"
        }
    }

    test('Debe mostrarse correctamente', () => {

        const wrapper = mount(
            <AuthContext.Provider value = {contextValue} >
                <MemoryRouter>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect ( wrapper.find('.text-info').text().trim()).toBe("kris")
    })
    
    
})
