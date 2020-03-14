import React, { Component } from "react";
import StyledButton from "../Button";
import {
  StyledFormHeader,
  StyledButtonContainer,
  StyledFormContainer,
  StyledForm,
  StyledFormSection,
  StyledFormFields,
  StyledTextInput,
  StyledCheckboxInput
} from "./styles";

class CreateContactForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    accountName: "",
    companyName: "",
    phone: "",
    fax: "",
    title: "",
    email: "",
    emailOptOut: true,
    street: "",
    city: "",
    state: "",
    postcode: "",
    description: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      firstName,
      lastName,
      accountName,
      companyName,
      phone,
      fax,
      title,
      email,
      emailOptOut,
      street,
      city,
      state,
      postcode,
      description
    } = this.state;

    return (
      <>
        <StyledFormHeader>
          <h2>Create Contact</h2>
          <StyledButtonContainer>
            <StyledButton type="secondary">Cancel</StyledButton>
            <StyledButton type="primary">Save</StyledButton>
          </StyledButtonContainer>
        </StyledFormHeader>
        <StyledFormContainer>
          <StyledForm>
            <StyledFormSection>
              <h3>Contact Information</h3>
              <StyledFormFields>
                <StyledTextInput>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    placeholder="John"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    placeholder="Smith"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="accountName">Account Name</label>
                  <input
                    id="accountName"
                    name="accountName"
                    value={accountName}
                    placeholder="John's Joinery"
                    type="text"
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="companyName">Company Name (optional)</label>
                  <input
                    id="companyName"
                    name="companyName"
                    value={companyName}
                    type="text"
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder="02 123 456 78"
                    type="text"
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="fax">Fax (optional)</label>
                  <input
                    id="fax"
                    name="fax"
                    value={fax}
                    placeholder="John's Joinery"
                    type="text"
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="title">Title (optional)</label>
                  <input
                    id="title"
                    name="title"
                    value={title}
                    placeholder="Owner"
                    type="text"
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    placeholder="samle@email.com"
                    type="email"
                  />
                </StyledTextInput>
                <StyledCheckboxInput>
                  <label htmlFor="emailOptOut">Email Opt Out</label>
                  <input
                    id="emailOptOut"
                    name="emailOptOut"
                    value={emailOptOut}
                    type="checkbox"
                  />
                </StyledCheckboxInput>
              </StyledFormFields>
            </StyledFormSection>
          </StyledForm>
        </StyledFormContainer>
      </>
    );
  }
}

export default CreateContactForm;
