import React from "react";
import { StyledFooter } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2020 Crunch Accounting. All rights reserved</p>
      <ul>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Terms of Service</a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
