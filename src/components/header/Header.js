import React from "react";
import "./Header.css";
import {
  TextField,
  ThemeProvider,
  createTheme,
  MenuItem,
} from "@material-ui/core";

const Header = () => {
  // Material UI Dark Theme
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        {/* Material UI Theme Provider Component */}
        <ThemeProvider theme={darkTheme}>
          {/* Material UI TextField Component */}
          <TextField id="standard-basic" label="Enter a word" />
          <TextField id="standard-select-currency" label="Select">
            <MenuItem>English</MenuItem>
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
