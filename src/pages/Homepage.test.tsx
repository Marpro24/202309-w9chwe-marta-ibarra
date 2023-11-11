import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import mainTheme from "../styles/mainTheme";
import Homepage from "./Homepage";

describe("Given a Homepage component", () => {
  describe("When it is rendered ", () => {
    test("Then it should show 'Welcome to the Labyrinth'", () => {
      const expectedTitle = "Welcome to the Labyrinth";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Homepage />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", {
        name: expectedTitle,
        hidden: true,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
