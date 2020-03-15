import React, { Component } from "react";
import Modal from "./../Modal";
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

const defaultState = {
  form: {
    nameTitle: {
      value: "",
      isRequired: true,
      error: null
    },
    firstName: {
      value: "",
      isRequired: true,
      error: null
    },
    lastName: {
      value: "",
      isRequired: true,
      error: null
    },
    accountName: {
      value: "",
      isRequired: true,
      error: null
    },
    companyName: {
      value: "",
      isRequired: false,
      error: null
    },
    phone: {
      value: "",
      isRequired: true,
      error: null
    },
    fax: {
      value: "",
      isRequired: false,
      error: null
    },
    title: {
      value: "",
      isRequired: false,
      error: null
    },
    email: {
      value: "",
      isRequired: true,
      error: null
    },
    emailOptOut: {
      value: false,
      isRequired: false,
      error: null
    },
    street: {
      value: "",
      isRequired: true,
      error: null
    },
    city: {
      value: "",
      isRequired: true,
      error: null
    },
    state: {
      value: "",
      isRequired: true,
      error: null
    },
    postcode: {
      value: "",
      isRequired: true,
      error: null
    },
    description: {
      value: "",
      isRequired: true,
      error: null
    }
  },
  modalOpen: false
};

class CreateContactForm extends Component {
  state = defaultState;

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleInputChange = event => {
    const { name, value, checked } = event.target;
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: {
          ...prevState.form[name],
          value: name === "emailOptOut" ? checked : value,
          error: null
        }
      }
    }));
  };

  handleFormSubmit = () => {
    // const hasNoErrors = this.validateForm();

    // if (hasNoErrors) {
    //   console.log(JSON.stringify(this.state, null, 2));
    // }
    this.setState({ modalOpen: true });
  };

  handleFormReset = () => {
    this.setState({
      ...defaultState
    });
  };

  validateForm = () => {
    let isValidForm = true;
    const { form } = this.state;
    const formFields = Object.keys(form);

    // validate required form fields

    formFields.forEach(async field => {
      if (!form[field].value) {
        if (form[field].isRequired) {
          isValidForm = false;
          await this.setState(prevState => ({
            ...prevState,
            form: {
              ...prevState.form,
              [field]: {
                ...prevState.form[field],
                error: "Required field"
              }
            }
          }));
        }
      }
    });

    return isValidForm;
  };

  render() {
    const { modalOpen } = this.state;
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
    } = this.state.form;

    return (
      <>
        <Modal
          data={this.state.form}
          handleCloseModal={this.handleCloseModal}
        />
        <StyledFormHeader>
          <h2>Create Contact</h2>
          <StyledButtonContainer>
            <StyledButton type="secondary" onClick={this.handleFormReset}>
              Cancel
            </StyledButton>
            <StyledButton type="primary" onClick={this.handleFormSubmit}>
              Save
            </StyledButton>
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
                      defaultValue={nameTitle.value}
                      onChange={this.handleInputChange}
                    >
                      <option value="" id="default">
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
                      value={firstName.value}
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
                    value={lastName.value}
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
                    value={accountName.value}
                    placeholder="John's Joinery"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="companyName">Company Name (optional)</label>
                  <input
                    id="companyName"
                    name="companyName"
                    value={companyName.value}
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={phone.value}
                    placeholder="02 123 456 78"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="fax">Fax (optional)</label>
                  <input
                    id="fax"
                    name="fax"
                    value={fax.value}
                    placeholder="John's Joinery"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="title">Title (optional)</label>
                  <input
                    id="title"
                    name="title"
                    value={title.value}
                    placeholder="Owner"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={email.value}
                    placeholder="sample@email.com"
                    type="email"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledCheckboxInput>
                  <label htmlFor="emailOptOut">Email Opt Out</label>
                  <input
                    id="emailOptOut"
                    name="emailOptOut"
                    checked={emailOptOut.value}
                    type="checkbox"
                    onChange={this.handleInputChange}
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
                    value={street.value}
                    placeholder="1, Elizabeth Street"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    value={city.value}
                    placeholder="Sydney"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
                <StyledTextInput>
                  <label htmlFor="state">State</label>
                  <input
                    list="state"
                    name="state"
                    placeholder="Search Territory or State"
                    value={state.value}
                    onChange={this.handleInputChange}
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
                    value={postcode.value}
                    placeholder="2000"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </StyledTextInput>
              </StyledFormFields>
            </StyledFormSection>
            <StyledFormSection>
              <h3>Description Information</h3>
              <StyledFormFields>
                <StyledTextareaInput>
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    onChange={this.handleInputChange}
                    value={description.value}
                  />
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
