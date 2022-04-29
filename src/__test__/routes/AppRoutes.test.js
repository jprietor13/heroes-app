import { AppRoutes } from "../../routes/AppRoutes";
import { mount } from 'enzyme'
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en <AppRoutes />', () => {

  const contextValue = {
    user: {
      logged: false
    }
  }

  it("Debe de mostrar el login si el usuario no esta autenticado", () => {

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRoutes />
      </AuthContext.Provider>
    )
   
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login')

  })

})