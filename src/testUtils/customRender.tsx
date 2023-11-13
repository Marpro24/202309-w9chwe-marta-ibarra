import { BrowserRouter } from "react-router-dom";
import { usersReducer } from "../store/features/userSlice/usersSlice";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { User } from "../store/types";

export const customRender = (children: React.ReactElement) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </BrowserRouter>,
  );

export const customRenderWithProviders = (
  children: React.ReactElement,
  mockData: User[],
) => {
  const mockStore = configureStore({
    reducer: {
      userState: usersReducer,
    },
    preloadedState: { userState: { user: mockData } },
  });

  render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
