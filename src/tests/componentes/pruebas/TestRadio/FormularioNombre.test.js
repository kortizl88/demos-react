import React from "react";
import { mount } from "enzyme";
import { FormularioNombre } from "../../../../componentes/pruebas/TestRadio/FormularioNombre";

describe("Pruebas en <FormularioNombre />", () => {
  const propiedades = {
    estado: { nombre: "", paterno: "", materno: "" },
    eventoCambio: jest.fn(),
  };
  const componente = mount(<FormularioNombre {...propiedades} />);

  test("Debe mostrar correctamente el componente", () => {
    expect(componente).toMatchSnapshot();
    expect(componente.find('#campo-nombre').props().value).toBe('');
    expect(componente.find('#campo-apellido-paterno').props().value).toBe('');
    expect(componente.find('#campo-apellido-materno').props().value).toBe('');
    expect(componente.find('#contenedor-campo-paterno').hasClass('campo inactivo')).toBe(false);
    expect(componente.find('#contenedor-campo-paterno').hasClass('campo')).toBe(true);
    expect(componente.find('#contenedor-campo-materno').hasClass('campo inactivo')).toBe(false);
    expect(componente.find('#contenedor-campo-materno').hasClass('campo')).toBe(true);
    expect(componente.find('#selector-app').exists()).toBe(true);
    expect(componente.find('#selector-apm').exists()).toBe(true);
    expect(componente.find('#selector-app').props().checked).toBe(false);
    expect(componente.find('#selector-apm').props().checked).toBe(false);

  });


  test('Debe llamarse el cambio de estado cuando cambie el valor de los input', () => {
    componente.find('#campo-nombre').simulate('change', {target: { value: 'JUAN'}});
    expect(propiedades.eventoCambio).toHaveBeenCalled();
    expect(propiedades.eventoCambio).toHaveBeenCalledWith({
      ...propiedades.estado,
      nombre: 'JUAN'
    });

    componente.find('#campo-apellido-paterno').simulate('change', {target: { value: 'ENE'}});
    expect(propiedades.eventoCambio).toHaveBeenCalled();
    expect(propiedades.eventoCambio).toHaveBeenCalledWith({
      ...propiedades.estado,
      paterno: 'ENE'
    });

    componente.find('#campo-apellido-materno').simulate('change', {target: { value: 'EME'}});
    expect(propiedades.eventoCambio).toHaveBeenCalled();
    expect(propiedades.eventoCambio).toHaveBeenCalledWith({
      ...propiedades.estado,
      materno: 'EME'
    });

  });

  test('Debe inhabilitarse el campo si se selecciona solo apellido paterno', () => {
    componente.find('#selector-app').simulate("change", {});
    expect(componente.find('#contenedor-campo-materno').hasClass('campo inactivo')).toBe(true);
    expect(componente.find('#contenedor-campo-paterno').hasClass('campo')).toBe(true);
    expect(propiedades.eventoCambio).toHaveBeenCalled();
    expect(propiedades.eventoCambio).toHaveBeenCalledWith(
      {
        ...propiedades.estado,
        materno: ''
      }
    );
  })

  test('Debe inhabilitarse el campo si se selecciona solo apellido materno', () => {
    componente.find('#selector-apm').simulate("change", {});
    expect(componente.find('#contenedor-campo-paterno').hasClass('campo inactivo')).toBe(true);
    expect(componente.find('#contenedor-campo-materno').hasClass('campo')).toBe(true);
    expect(propiedades.eventoCambio).toHaveBeenCalled();
    expect(propiedades.eventoCambio).toHaveBeenCalledWith(
      {
        ...propiedades.estado,
        paterno: ''
      }
    );
  })
  
});