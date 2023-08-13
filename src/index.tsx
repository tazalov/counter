import React, { FC, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, ThemeT } from "./styles/Theme";

export const Index: FC = () => {
  const [theme, setTheme] = useState<ThemeT>(lightTheme);
  const toggleTheme = () =>
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App toggleTheme={toggleTheme} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
