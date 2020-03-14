import React, { Component } from "react";
import StyledButton from "../Button";
import {
  StyledFormHeader,
  StyledButtonContainer,
  StyledFormContainer,
  StyledForm,
  StyledFormSection,
  StyledFormFields,
  StyledTextDropdownInput,
  StyledSelect,
  StyledTextInput,
  StyledCheckboxInput,
  StyledTextareaInput
} from "./styles";

class CreateContactForm extends Component {
  state = {
    nameTitle: "",
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
      nameTitle,
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
                  <StyledTextDropdownInput>
                    <StyledSelect
                      name="nameTitle"
                      id="nameTitle"
                      value={nameTitle}
                      onChange={this.handleInputChange}
                    >
                      <option value="" id="default" selected>
                        - None
                      </option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof">Prof</option>
                      <option value="Sir">Sir</option>
                    </StyledSelect>
                    <input
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      placeholder="John"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </StyledTextDropdownInput>
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
                    placeholder="sample@email.com"
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
            <StyledFormSection>
              <h3>Address Information</h3>
              <StyledFormFields>
                <StyledTextInput>
                  <label htmlFor="street">Street No. & Street</label>
                  <input
                    id="street"
                    name="street"
                    value={street}
                    placeholder="1. Elizabeth Street"
                    type="text"
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    value={city}
                    placeholder="Sydney"
                    type="text"
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="state">State</label>
                  <input
                    list="state"
                    name="state"
                    placeholder="Search Territory or State"
                  />
                  <datalist id="state">
                    <option value="New South Wales">New South Wales</option>
                    <option value="Victoria">Victoria</option>
                    <option value="Queensland">Queensland</option>
                    <option value="Western Australia">Western Australia</option>
                    <option value="South Australia">South Australia</option>
                    <option value="Tasmania">Tasmania</option>
                  </datalist>
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="postcode">Postcode</label>
                  <input
                    id="postcode"
                    name="postcode"
                    value={postcode}
                    placeholder="2000"
                    type="text"
                  />
                </StyledTextInput>
              </StyledFormFields>
            </StyledFormSection>
            <StyledFormSection>
              <h3>Description Information</h3>
              <StyledFormFields>
                <StyledTextareaInput>
                  <label htmlFor="description">Description</label>
                  <textarea name="description" id="description">
                    {description}
                  </textarea>
                </StyledTextareaInput>
              </StyledFormFields>
            </StyledFormSection>
          </StyledForm>
        </StyledFormContainer>
      </>
    );
  }
}

export default CreateContactForm;
