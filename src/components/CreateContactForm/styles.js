import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 50rem;
  margin-bottom: 3rem;
  display: flex;
  flex-flow: row wrap;
`;

export const StyledFormHeader = styled.div`
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

  label {
    margin-right: ${({ theme }) => theme.spacing.md};
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
