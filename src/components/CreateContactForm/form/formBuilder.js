import React from "react";
import {
  TextInput,
  EmailInput,
  CheckboxInput,
  TextareaInput,
  DatalistInput,
  SelectInput
} from "./components";
import {
  StyledFormContainer,
  StyledForm,
  StyledFormSection,
  StyledFormFields
} from "./../styles";

/*
<div>
  {formBuilder(this.state.form, this.handleInputChange)}
</div>
*/

const formBuilder = (form, handleInputChange) => (
  <StyledFormContainer>
    <StyledForm>
      {form.map(((formSection, index)) => (
        <StyledFormSection>
          <h3>{formSection.heading}</h3>
          <StyledFormFields>
            {formSection.fields.map(field =>
              inputSelector(field, handleInputChange, index)
            )}
          </StyledFormFields>
        </StyledFormSection>
      ))}
    </StyledForm>
  </StyledFormContainer>
);

const inputSelector = (field, handleInputChange, index) => {
  switch (field.type) {
    case "text":
      return (
        <TextInput
          label={field.label}
          name={field.name}
          value={field.value}
          placeholder={field.placeholder}
          handleInputChange={() => handleInputChange(index)}
          error={field.error}
        />
      );
    case "email":
      return (
        <EmailInput
          label={field.label}
          name={field.name}
          value={field.value}
          placeholder={field.placeholder}
          handleInputChange={() => handleInputChange(index)}
          error={field.error}
        />
      );
    case "checkbox":
      return (
        <CheckboxInput
          label={field.label}
          name={field.name}
          value={field.value}
          handleInputChange={() => handleInputChange(index)}
          error={field.error}
        />
      );
    case "textarea":
      return (
        <TextareaInput
          label={field.label}
          name={field.name}
          value={field.value}
          handleInputChange={() => handleInputChange(index)}
          error={field.error}
        />
      );
    case "datalist":
      return (
        <DatalistInput
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          value={field.value}
          options={field.options}
          handleInputChange={() => handleInputChange(index)}
          error={field.error}
        />
      );
    case "select":
      return (
        <SelectInput
          name={field.name}
          value={field.value}
          options={field.options}
          handleInputChange={() => handleInputChange(index)}
          error={field.error}
        />
      );
    default:
      break;
  }
};

export default formBuilder;
