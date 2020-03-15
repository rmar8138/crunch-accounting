import React, { Component } from "react";
import Modal from "./../Modal";
import StyledButton from "../Button";
import { StyledFormHeader, StyledButtonContainer } from "./styles";
import defaultForm from "./form/defaultForm";
import formBuilder from "./form/formBuilder";

class CreateContactForm extends Component {
  state = {
    form: defaultForm,
    modalOpen: false
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleInputChange = (formSectionIndex, event) => {
    const { name, value, checked } = event.target;
    this.setState(prevState => ({
      ...prevState, // return modal state
      form: prevState.form.map((formSection, index) => {
        if (index === formSectionIndex) {
          return {
            ...formSection, // return heading
            fields: formSection.fields.map(field => {
              // case for select text dropdown
              if (field.type === "selectText") {
                if (name === "nameTitle") {
                  return {
                    ...field,
                    selectValue: value
                  };
                }

                if (name === "firstName") {
                  return {
                    ...field,
                    textValue: value
                  };
                }
              }

              if (field.name === name) {
                return {
                  ...field, // return other fields
                  value: name === "emailOptOut" ? checked : value
                };
              }

              return field;
            })
          };
        }

        return formSection;
      })
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
      form: defaultForm,
      modalOpen: false
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
    const { form, modalOpen } = this.state;

    return (
      <>
        {modalOpen && (
          <Modal
            data={this.state.form}
            handleCloseModal={this.handleCloseModal}
          />
        )}
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
        {formBuilder(form, this.handleInputChange)}
      </>
    );
  }
}

export default CreateContactForm;
