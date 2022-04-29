import { mount } from "enzyme";
import { DashboardRoutes } from "../../routes/DashboardRoutes";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";

describe("Pruebas en <DashboardRoutes", () => {
  test("Debe de mostrarse correctamente", () => {
    const valueContext = {
      user: {
        logged: false,
        name: "Juan Prieto",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={valueContext}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Juan Prieto')
  });
});
