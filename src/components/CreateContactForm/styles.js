import styled from "styled-components";

export const CreateContact = styled.div`
  display: flex;
  padding: 3rem;
`;

export const StyledContactFormPage = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  justify-self: flex-start;
`;

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
    margin-right: 0.75rem;
  }
`;

export const StyledTextInput = styled.div`
  width: calc(50% - 1rem);
  margin-right: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.75rem;
  }
`;

export const StyledCheckboxInput = styled.div`
  width: calc(50% - 1rem);
  padding: 1rem 0;

  label {
    margin-right: 1.5rem;
    box-shadow: none;
  }
`;

export const StyledTextareaInput = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.75rem;
  }

  textarea {
    width: 100%;
    height: 15rem;

    &:focus {
      outline: none;
    }
  }
`;
