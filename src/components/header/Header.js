import React from "react";
import "./Header.css";
import { TextField } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <TextField id="standard-basic" label="Enter a word" />
      </div>
    </div>
  );
};

export default Header;
