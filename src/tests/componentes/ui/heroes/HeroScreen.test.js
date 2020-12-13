import { HeroScreen } from "../../../../componentes/ui/heroes/HeroScreen";
import {shallow} from 'enzyme'

describe('Pruebas en <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()

    }

    const wrapper = shallow(<HeroScreen history={historyMock} />);

    test('Debe mostrarse el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    
})
