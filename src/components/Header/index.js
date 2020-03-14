import React from "react";
import logo from "./../../assets/images/logo.png";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Crunch Accounting logo" />
    </StyledHeader>
  );
};

export default Header;
