import { mount } from "enzyme";
import { DashboardRoutes } from "../../routes/DashboardRoutes";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";

describe("Pruebas en <DashboardRoutes", () => {

  const valueContext = {
    user: {
      logged: false,
      name: "Juan Prieto",
    },
  };

  test("Debe de mostrarse correctamente - Marvel", () => {
    const wrapper = mount(
      <AuthContext.Provider value={valueContext}>
        <MemoryRouter initialEntries={ ['/'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Juan Prieto')
  });

  test("Debe mostrarse correctamente - DC", () => {

    const wrapper = mount(
      <AuthContext.Provider value={valueContext}>
        <MemoryRouter initialEntries={ ['/dc'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('DC Heroes')

  })

});
