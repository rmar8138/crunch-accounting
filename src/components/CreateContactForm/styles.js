import styled from "styled-components";
import { selectInputBorder } from "./helpers";

export const StyledInputContainer = styled.div`
  width: 50rem;
  margin-bottom: 3rem;
  display: flex;
  flex-flow: row wrap;
`;

export const StyledFormHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.color.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.sm}`};

    h2 {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`;

export const StyledButtonContainer = styled.div`
  button:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

export const StyledFormContainer = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey1};
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.sm}`};
  }
`;

export const StyledForm = styled.form`
  max-width: 40rem;
`;

export const StyledFormSection = styled.div`
  min-width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StyledFormFields = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledTextDropdownInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input#firstName {
    flex: 1;
    border-top: ${({ error, value, theme }) =>
      selectInputBorder({ error, value, theme })};
    border-right: ${({ error, value, theme }) =>
      selectInputBorder({ error, value, theme })};
    border-bottom: ${({ error, value, theme }) =>
      selectInputBorder({ error, value, theme })};
    border-left: ${({ error, theme }) =>
      error
        ? `1px solid ${theme.color.red}`
        : `1px solid ${theme.color.lightGrey2}`};
    border-radius: 0 2px 2px 0;

    &:focus,
    &:-webkit-autofill:focus {
      outline: none;
      border: ${({ theme }) => `1px solid ${theme.color.black}`};
      /* border-top: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
      border-bottom: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`}; */
    }
  }
`;

export const StyledSelect = styled.select`
  flex: 0 0 25%;
  background-color: ${({ theme }) => theme.color.white};
  align-self: stretch;
  color: ${({ defaultValue, theme }) =>
    defaultValue === "" ? theme.color.lightGrey2 : theme.color.black};
  border-top: ${({ error, value, theme }) =>
    selectInputBorder({ error, value, theme })};
  border-left: ${({ error, value, theme }) =>
    selectInputBorder({ error, value, theme })};
  border-bottom: ${({ error, value, theme }) =>
    selectInputBorder({ error, value, theme })};
  border-radius: 2px 0 0 2px;

  &:focus + input {
    border-left: 1px solid transparent !important;
  }

  &:focus,
  &:-webkit-autofill:focus {
    outline: none;
    border-left: ${({ theme }) => `1px solid ${theme.color.black}`};
    border-top: ${({ theme }) => `1px solid ${theme.color.black}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.color.black}`};
  }
`;

export const StyledTextInput = styled.div`
  width: ${({ theme }) => `calc(50% - ${theme.spacing.xs})`};
  padding: ${({ theme }) => `${theme.spacing.xs} 0`};
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  input {
    border: ${({ error, value, theme }) =>
      selectInputBorder({ error, theme, value })};
  }

  span {
    color: ${({ theme }) => theme.color.red};
    margin-top: ${({ theme }) => theme.spacing.xs};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 100%;
  }
`;

export const StyledCheckboxInput = styled.div`
  width: ${({ theme }) => `calc(50% - ${theme.spacing.xs})`};
  padding: ${({ theme }) => `${theme.spacing.xs} 0`};
  display: flex;

  label {
    margin-right: ${({ theme }) => theme.spacing.md};
  }

  input {
    margin-top: 2px;
  }
`;

export const StyledTextareaInput = styled.div`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xs} 0`};
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  textarea {
    width: 100%;
    height: 12.5rem;
    border: ${({ error, theme }) =>
      error ? `1px solid ${theme.color.red}` : "1px solid transparent"};

    &:focus {
      outline: none;
    }
  }

  span {
    color: ${({ theme }) => theme.color.red};
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;
