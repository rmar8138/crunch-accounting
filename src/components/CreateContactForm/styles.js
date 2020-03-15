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
`;

export const StyledButtonContainer = styled.div`
  button:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

export const StyledFormContainer = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey1};
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
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

  input {
    flex: 1;
    border-left: ${({ theme }) => `1px solid ${theme.color.lightGrey2}`};

    &:focus,
    &:-webkit-autofill:focus {
      border-right: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
    }
  }

  input {
    &:focus,
    &:-webkit-autofill:focus {
      outline: none;
      border-top: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
      border-bottom: ${({ theme }) => `1px solid ${theme.color.darkGrey2}`};
    }
  }
`;

export const StyledSelect = styled.select`
  flex: 0 0 25%;
  background-color: ${({ theme }) => theme.color.white};
  align-self: stretch;
  color: ${({ value, theme }) =>
    value === "" ? theme.color.lightGrey2 : theme.color.black};

  &:focus + input {
    border-left: 1px solid transparent;
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

    &:focus {
      outline: none;
    }
  }
`;
