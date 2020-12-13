import authReducer from "../../auth/authReducer";
import types from "../../types/types";

describe('Pruebas en authReducer', () => {

 test('Debe de retornar el estado por defecto', () => {

    const state = authReducer({logged: false}, {})

    expect( state ).toEqual({logged: false})
     
 })

 test('Debe de autenticar y colocar el nombre del usuario', () => {

    const action = {
        type: types.login,
        payload: {
            name: "kris"
        }
    } 

    const state = authReducer({logged: false}, action)

    expect( state ).toEqual({logged: true, name: "kris"})
     
 })

 test('Debe de borrar el nombre del usuario y ponner el logged en false', () => {

    const action = {
        type: types.logout
    } 

    const state = authReducer({logged: false}, action)

    expect( state ).toEqual({logged: false}) 
     
 })
 
 
  
})
