import { AppRoutes } from "../../routes/AppRoutes";
import { mount } from 'enzyme'
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en <AppRoutes />', () => {

 

  it("Debe de mostrar el login si el usuario no esta autenticado", () => {

    const contextValue = {
      user: {
        logged: false
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRoutes />
      </AuthContext.Provider>
    )
   
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login')

  })

  it("Debe de mostrar el componente de marvel cuando el usuario esta autenticado", () => {

    const contextValue = {
      user: {
        logged: true,
        name: 'Juan Prieto'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRoutes />
      </AuthContext.Provider>
    )
   
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.navbar').exists()).toBe(true)

  })

})