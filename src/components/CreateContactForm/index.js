import React, { Component } from "react";
import StyledButton from "../Button";
import {
  CreateContact,
  StyledContactFormPage,
  StyledInputContainer,
  StyledFormHeader,
  StyledButtonContainer,
  StyledTextInput,
  StyledCheckboxInput,
  StyledTextareaInput
} from "./styles";

class CreateContactForm extends Component {
  render() {
    return (
      <>
        <StyledFormHeader>
          <h2>Create Contact</h2>
          <StyledButtonContainer>
            <StyledButton type="secondary">Cancel</StyledButton>
            <StyledButton type="primary">Save</StyledButton>
          </StyledButtonContainer>
        </StyledFormHeader>
      </>
    );
  }
}

export default CreateContactForm;
