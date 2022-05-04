import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate, 
}))

describe("Pruebas en <HeroScreen />", () => {

  const wrapper = mount(
    <MemoryRouter initialEntries={ ['/hero'] }>
      <Routes>
        <Route path="/hero" element={ <HeroScreen /> } />
        <Route path="/" element={ <h1>Hero Not Found</h1> } />
      </Routes>
    </MemoryRouter>
  )

  it("Debe cargarse corretamente", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('No debe de mostrar el HeroScreen si no hay un heroe en la URL', () => {
    expect(wrapper.find('h1').text().trim()).toBe('Hero Not Found')
  })

  it('Debe de mostrar un heroe si el parametros existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
        <Routes>
          <Route path="/hero/:idHero" element={ <HeroScreen /> } />
          <Route path="/hero" element={ <h1>Hero Not Found</h1> } />
        </Routes>
      </MemoryRouter>
    )
 
    expect(wrapper.find('h3').exists()).toBe(true)
  })

  it('Debe retornar a la vista anterior', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
        <Routes>
          <Route path="/hero/:idHero" element={ <HeroScreen /> } />
        </Routes>
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')()
    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })

  it('Debe de mostrar el No Hero Page si no se tiene un heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider23546'] }>
        <Routes>
          <Route path="/hero/:idHero" element={ <HeroScreen /> } />
          <Route path="/" element={ <h1>Hero Not Found</h1> } />
        </Routes>
      </MemoryRouter>
    )
    
    expect(wrapper.text()).toBe('Hero Not Found')  

  })

})