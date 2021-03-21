import React from "react";
import { mount } from "enzyme";
import { Menu } from "../../../../componentes/pruebas/TestRadio/Menu";

describe('Pruebas en <Menu />', () => {
    const componente = mount(<Menu/>);

    test('Debe mostrar el menu', () => {
        expect(componente).toMatchSnapshot();
        console.log(componente.html());
        console.log(componente.findWhere(elemento => { console.log(elemento.props()); return elemento.props().nivel === '1' } ));
        expect(componente.findWhere(elemento =>  elemento.props().nivel === 1 && elemento.props().idPadre === 0 ).length).toBe(4);
        expect(componente.find('div.opcion').at(0).props().nivel === 1 && componente.find('div.opcion').at(0).props().idPadre === 0).toBe(true);
        expect(componente.find('div.opcion').at(0).props().nivel === 0 && componente.find('div.opcion').at(0).props().idPadre === 0).toBe(false);
        expect(componente.find('div.opcion').length).toBe(4);
        /*expect(componente.findWhere(elemento =>  elemento.props().nivel === 1 && elemento.props().idPadre === 1 ).exists()).toBe(false);
        expect(componente.findWhere(elemento =>  elemento.props().nivel === 0 && elemento.props().idPadre === 0).exists()).toBe(false);*/
    });


    
})
