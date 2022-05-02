import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn() //mock es un keyword para que funcione

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate, //simulamos el useNavigate del react roiter dom por medio de requireActual
}))

describe("Pruebas en <SearchScreen />", () => {
  test("Debe cargarse correctamente", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe(
      "Ningun heroe a buscar!!"
    );
  });

  test("Debe mostrar a batman y el input con el valor del queryString", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find(".form-control").prop("value")).toBe("batman");
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el mensaje de error si no se encuentra el heroe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      "Sin coincidencias para batman123"
    );
  });

  test("Debe de llamar el navigate a la nueva pantalla", () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    //obteniendo el valor del input
    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText', //nombre del input
        value: 'batman' //valor esperado
      }
    })

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}

    })

    expect(mockNavigate).toHaveBeenCalledWith('?q=batman')
  })
});
