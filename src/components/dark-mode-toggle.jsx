import React, { useEffect } from "react";
import { Switch } from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    const localDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (localDarkMode !== null) {
      setDarkMode(localDarkMode);
    }
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  const toggleText = darkMode ? " Dark Mode" : " Light Mode";

  return (
    <div>

      <Switch checked={darkMode} onClick={toggleDarkMode} />
   
    </div>
  );
};

export default DarkModeToggle;
