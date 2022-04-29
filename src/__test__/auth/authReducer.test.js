import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {

  it("Debe retornar el estado por defecto", () => {

    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false })

  })

  it("Debe de autenticar y mostrar el nombre del usuario", () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Juan Prieto'
      }
    }

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: "Juan Prieto" })

  })

  it("Debe de borrar el nombre del usuario y cambiar logged a false", () => {

    const action = {
      type: types.logout
    }

    const state = authReducer({ logged: true, name: 'Juan Prieto' }, action)
    expect(state).toEqual({ logged: false })

  })

})