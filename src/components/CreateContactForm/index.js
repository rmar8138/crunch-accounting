import React, { Component } from "react";
import Modal from "./../Modal";
import StyledButton from "../Button";
import { StyledFormHeader, StyledButtonContainer } from "./styles";
import defaultForm from "./form/defaultForm";
import formBuilder from "./form/formBuilder";
import { selectErrorMessage } from "./helpers";
import { errorMessages } from "./../../config/messages";

class CreateContactForm extends Component {
  state = {
    form: defaultForm,
    modalOpen: false
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
    this.handleFormReset();
  };

  handleInputChange = (formSectionIndex, event) => {
    const { name, value, checked } = event.target;
    this.setState(prevState => ({
      ...prevState, // return modal state
      form: prevState.form.map((formSection, prevFormSectionIndex) => {
        if (prevFormSectionIndex === formSectionIndex) {
          return {
            ...formSection, // return heading
            fields: formSection.fields.map(field => {
              // case for select text dropdown
              if (field.type === "selectText") {
                if (name === "nameTitle") {
                  return {
                    ...field,
                    selectValue: value,
                    error: null
                  };
                }

                if (name === "firstName") {
                  return {
                    ...field,
                    textValue: value,
                    error: null
                  };
                }
              }

              if (field.name === name) {
                return {
                  ...field, // return other fields
                  value: name === "emailOptOut" ? checked : value,
                  error: null
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
    const hasNoErrors = this.validateForm();

    if (hasNoErrors) {
      this.setState({ modalOpen: true });
    }
  };

  handleFormReset = () => {
    this.setState({
      form: defaultForm,
      modalOpen: false
    });
  };

  handleInputBlur = (formSectionIndex, event) => {
    const { name, value } = event.target;
    const error = selectErrorMessage(name, value);

    if (error) {
      this.setState(prevState => ({
        ...prevState,
        form: prevState.form.map((formSection, prevFormSectionIndex) => {
          if (prevFormSectionIndex === formSectionIndex) {
            return {
              ...formSection,
              fields: formSection.fields.map(field => {
                if (field.name === name) {
                  return {
                    ...field,
                    error
                  };
                }

                return field;
              })
            };
          }

          return formSection;
        })
      }));
    }
  };

  validateForm = () => {
    let isValidForm = true;
    const { form } = this.state;

    form.forEach((formSection, currentFormSection) => {
      formSection.fields.forEach(async (field, currentFieldIndex) => {
        if (field.selectValue || field.textValue || field.value) {
          return;
        }

        if (field.isRequired) {
          isValidForm = false;
          await this.setState(prevState => ({
            ...prevState,
            form: prevState.form.map((formSection, prevFormSection) => {
              if (prevFormSection === currentFormSection) {
                return {
                  ...formSection,
                  fields: formSection.fields.map((field, prevFieldIndex) => {
                    if (prevFieldIndex === currentFieldIndex && !field.error) {
                      return {
                        ...field,
                        error: errorMessages.requiredField
                      };
                    }

                    return field;
                  })
                };
              }

              return formSection;
            })
          }));
        }
      });
    });

    return isValidForm;
  };

  render() {
    const { form, modalOpen } = this.state;

    return (
      <>
        {modalOpen && (
          <Modal formData={form} handleCloseModal={this.handleCloseModal} />
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
        {formBuilder(form, this.handleInputChange, this.handleInputBlur)}
      </>
    );
  }
}

export default CreateContactForm;
