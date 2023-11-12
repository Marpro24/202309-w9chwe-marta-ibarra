import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import UsersList from "./UsersList";

describe("Given a Homepage ocmonent", () => {
  describe("When it is renered and receives a list of people", () => {
    test("Then it should show a users list with Goblin King name in the first heading", () => {
      const expectedName = "Goblin King";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <UsersList />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", { name: expectedName });

      expect(title).toBeInTheDocument();
    });
  });
});
