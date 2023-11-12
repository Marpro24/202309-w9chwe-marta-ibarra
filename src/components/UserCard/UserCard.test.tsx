import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import UserCard from "./UserCard";
import mainTheme from "../../styles/mainTheme";
import mockUser from "../../mocks/userMock";

describe("Given a UserCard component", () => {
  describe("When it receives Goblin King card", () => {
    test("Then it should show Goblin King in a heading", () => {
      const userNameCard = "Goblin King";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <UserCard user={mockUser} />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const userName = screen.getByRole("heading", {
        name: userNameCard,
      });
      expect(userName).toBeInTheDocument;
    });
  });
});
