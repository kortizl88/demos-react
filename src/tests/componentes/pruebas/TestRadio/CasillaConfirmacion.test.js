import React from "react";
import { mount } from "enzyme";
import { CasillaConfirmacion } from "../../../../componentes/pruebas/TestRadio/CasillaConfirmacion";

describe("Pruebas en <CasillaConfirmacion />", () => {
  let propiedades = {
    estado: false,
    eventoCambio: jest.fn(),
    identificador: "id-check",
    texto: "Solo apellido paterno",
  };
  let componente = mount(<CasillaConfirmacion {...propiedades} />);

  test("Debe mostrar correctamente el componente", () => {
    expect(componente).toMatchSnapshot();
    expect(componente.find(".etiqueta").exists()).toBe(true);
    expect(componente.find(".etiqueta.inactivo").exists()).toBe(false);
  });

  test("Debe mostrar inactivo el componente cuando se indique", () => {
    propiedades = {
      estado: false,
      eventoCambio: jest.fn(),
      identificador: "id-check",
      texto: "Solo apellido paterno",
      inactivo: true,
    };
    componente = mount(<CasillaConfirmacion {...propiedades} />);
    expect(componente).toMatchSnapshot();
    expect(componente.find(".etiqueta.inactivo").exists()).toBe(true);
  });

  test("Debe llamarse la funciòn de eventoCambio cuando cambie el componente", () => {
    componente.find('input').simulate("change", {});
    expect(propiedades.eventoCambio).toHaveBeenCalled();
    expect(propiedades.eventoCambio).toHaveBeenCalledWith(!propiedades.estado);
  });
});
