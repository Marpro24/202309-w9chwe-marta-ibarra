import { screen } from "@testing-library/react";
import { customRenderWithProviders } from "../../testUtils/customRender";
import mockUsers from "../../mocks/usersMocks";
import Homepage from "./Homepage";

describe("Given a Homepage component", () => {
  describe("When it is rendered ", () => {
    test("Then it should show 'Welcome to the Labyrinth'", () => {
      const expectedTitle = "Welcome to the Labyrinth";
      const mockData = mockUsers;

      customRenderWithProviders(<Homepage />, mockData);
      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
