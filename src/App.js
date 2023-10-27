import React, { useState, useEffect } from "react";

import "./App.css";
import { Helmet } from "react-helmet";
import "./style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "rsuite/styles/index.less";

import Home from "./pages/Home";

import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    // Add an event listener to the window object to disable right-click
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    // Attach the event listener when the component mounts
    window.addEventListener("contextmenu", disableRightClick);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>VersaDex</title>
        <meta name="VersaDex" content="VersaDex" />
      </Helmet>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Router>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
