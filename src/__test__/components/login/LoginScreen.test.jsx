import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate, 
}))


describe('Pruebas en <Navbar />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={ ['/login'] }>
        <Routes>
          <Route path="/login" element={ <LoginScreen /> }/>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  it('Debe mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').text().trim()).toBe('Login')

  })

  it("Debe de realizar el dispatch y la navegacion", () => {

    //obteniendo el valor del input
    wrapper.find('input').simulate('change', {
      target: {
        name: 'userName',
        value: 'Juan Prieto'
      }
    })

    const handleClick = wrapper.find('button').prop('onClick')
    handleClick()
   
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Juan Prieto"
      }
    })

    expect(mockNavigate).toHaveBeenCalledWith( "/marvel", {replace: true} )
    localStorage.setItem('lastPath', '/dc')

    handleClick()
    expect(mockNavigate).toHaveBeenCalledWith( "/dc", {replace: true} )
    
  })

})
