import { customRenderWithProviders } from "../../testUtils/customRender";
import { screen } from "@testing-library/react";
import UsersList from "./UsersList";
import mockUsers from "../../mocks/usersMocks";

describe("Given a Homepage ocmonent", () => {
  describe("When it is renered and receives the Goblin King data", () => {
    test("Then it should show a users list with Goblin King name in the first heading", () => {
      const expectedName = "Goblin King";
      const mockList = mockUsers;

      customRenderWithProviders(<UsersList />, mockList);
      const title = screen.getByRole("heading", { name: expectedName });

      expect(title).toBeInTheDocument();
    });
  });
});
