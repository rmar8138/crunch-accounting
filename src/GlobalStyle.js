import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  color: ${({ theme }) => theme.color.black};
  font-family: "Lato", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 300;
}

h2 {
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 300;
  color: ${({ theme }) => theme.color.white};
}

h3 {
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.orange};
  margin-bottom: ${({ theme }) => theme.spacing.md};
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.md}`};
  border: none;
  border-radius: 1px;
  cursor: pointer;
}

li {
  list-style: none;
}

label {
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.sm};
}

input,
textarea {
  font-size: ${({ theme }) => theme.fontSize.sm};
  border: 1px solid transparent;
  border-radius: 1px;

  &:focus,
  &:-webkit-autofill:focus {
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.lightGrey2};
  }
}

input {
  padding: ${({ theme }) => theme.spacing.xs};
}

textarea {
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xs}`};
}
`;

export default GlobalStyle;
