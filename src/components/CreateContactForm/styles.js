import styled from "styled-components";

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
    border-top: ${({ error, theme }) =>
      error ? `1px solid ${theme.color.red}` : "1px solid transparent"};
    border-right: ${({ error, theme }) =>
      error ? `1px solid ${theme.color.red}` : "1px solid transparent"};
    border-bottom: ${({ error, theme }) =>
      error ? `1px solid ${theme.color.red}` : "1px solid transparent"};
    border-left: ${({ error, theme }) =>
      error
        ? `1px solid ${theme.color.red}`
        : `1px solid ${theme.color.lightGrey2}`};

    &:focus,
    &:-webkit-autofill:focus {
      outline: none;
      border: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
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
  border: ${({ error, theme }) =>
    error ? `1px solid ${theme.color.red}` : "1px solid transparent"};

  &:focus + input {
    border-left: 1px solid transparent !important;
  }

  &:focus,
  &:-webkit-autofill:focus {
    outline: none;
    border-left: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
    border-top: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
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
    border: ${({ error, theme }) =>
      error ? `1px solid ${theme.color.red}` : "1px solid transparent"};
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
