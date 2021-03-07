import { mount } from "enzyme"
import { InputNumerico } from "../../../../componentes/pruebas/TestRadio/InputNumerico";
import {act} from '@testing-library/react'

describe('Prueba en InputNumerico', () => {
    
    const componente = mount(<InputNumerico />);

    test('Debe mostrarse correctamente', () => {
        expect(componente).toMatchSnapshot();
        expect(componente.find('NumberFormat.monto').instance().props.value).toBe(1500);
        expect(componente.find('NumberFormat.monto').instance().props.thousandSeparator).toBe(true);
        expect(componente.find('NumberFormat.monto').instance().props.prefix).toBe('$');

        expect(componente.find('NumberFormat.porcentaje').instance().props.value).toBe(19);
        expect(componente.find('NumberFormat.porcentaje').instance().props.suffix).toBe('%');
    });

    test('Debe actualizar el valor del input monto', () => {
        act(() => {
            componente.find('NumberFormat.monto').instance().props.onChange(
                 { target: { value: 4000 } });
        });
        expect(componente.find('NumberFormat.monto').instance().props.value).toBe(4000);
    });

    test('Debe actualizar el valor del input porcentaje', () => {
        act(() => {
            componente.find('NumberFormat.porcentaje').instance().props.onChange(
                 { target: { value: 50 } });
        });
        expect(componente.find('NumberFormat.porcentaje').instance().props.value).toBe(50);
    });
    

    test('Debe cambiar el valor del porcentaje cuando cambie el monto', () => {
        act(() => {
            componente.find('NumberFormat.monto').instance().props.onKeyPress(
                 { key: "Enter", target: { value: '$5,000' } });
        });
        expect(componente.find('NumberFormat.monto').instance().props.value).toBe(5000);
        expect(componente.find('NumberFormat.porcentaje').instance().props.value).toBe(63);
    })

    test('Debe cambiar el valor del monto cuando cambie el porcentaje', () => {
        act(() => {
            componente.find('NumberFormat.porcentaje').instance().props.onKeyPress(
                 { key: "Enter", target: { value: '50%' } });
        });
        expect(componente.find('NumberFormat.monto').instance().props.value).toBe(3933);
        expect(componente.find('NumberFormat.porcentaje').instance().props.value).toBe(50);
    })

    test('NO Debe cambiar el valor del monto cuando cambie el porcentaje', () => {
        act(() => {
            componente.find('NumberFormat.porcentaje').instance().props.onKeyPress(
                 { key: "Otro", target: { value: '$10' } });
        });
        expect(componente.find('NumberFormat.monto').instance().props.value).toBe(3933);
        expect(componente.find('NumberFormat.porcentaje').instance().props.value).toBe(50);
    })
    
    
})
