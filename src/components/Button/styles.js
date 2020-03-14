import styled from "styled-components";

const buttonBackgroundColour = (type, theme) => {
  switch (type) {
    case "primary":
      return theme.color.orange;
    case "secondary":
      return theme.color.white;
    default:
      break;
  }
};

const buttonColour = (type, theme) => {
  switch (type) {
    case "primary":
      return theme.color.white;
    case "secondary":
      return theme.color.orange;
    default:
      break;
  }
};

export const StyledButton = styled.button`
  background-color: ${({ type, theme }) => buttonBackgroundColour(type, theme)};
  color: ${({ type, theme }) => buttonColour(type, theme)};
`;
