import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoutes } from "../../routes/PrivateRoutes";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>Saliendo</span>
}))

describe('Pruebas en <PrivateRoutes />', () => {

  //permite saber si el localStorage fue llamado y con que argumentos
  Storage.prototype.setItem = jest.fn()

  test('Debe de mostrar el componente si esta autenticado y guardar en el localStorage', () => {

    const contextValue = {
      user: {
        logged: true,
        name: "Juan Prieto"
      }
    }
  
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={ ['/'] }>
          <PrivateRoutes>
            <h1>Este es un children de PrivateRoute</h1> 
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper.text()).toBe('Este es un children de PrivateRoute')
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
  })

  test('Debe de bloquear el componente si no esta autenticado', () => {
    const contextValue = {
      user: {
        logged: false,
      }
    }
  
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={ ['/'] }>
          <PrivateRoutes>
            <h1>Este es un children de PrivateRoute</h1> 
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper.find('span').text()).toBe('Saliendo')
  })

})