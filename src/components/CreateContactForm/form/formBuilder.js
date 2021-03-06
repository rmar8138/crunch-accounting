import React from "react";
import {
  TextInput,
  CheckboxInput,
  TextareaInput,
  DatalistInput,
  SelectTextInput
} from "./components";
import {
  StyledFormContainer,
  StyledForm,
  StyledFormSection,
  StyledFormFields
} from "./../styles";

const formBuilder = (form, handleInputChange, handleInputBlur) => (
  <StyledFormContainer>
    <StyledForm>
      {form.map((formSection, index) => (
        <StyledFormSection key={formSection.heading}>
          <h3>{formSection.heading}</h3>
          <StyledFormFields>
            {formSection.fields.map(field =>
              inputSelector(field, handleInputChange, handleInputBlur, index)
            )}
          </StyledFormFields>
        </StyledFormSection>
      ))}
    </StyledForm>
  </StyledFormContainer>
);

const inputSelector = (field, handleInputChange, handleInputBlur, index) => {
  switch (field.type) {
    case "text":
    case "email":
    case "number":
      return (
        <TextInput
          key={field.name}
          label={field.label}
          name={field.name}
          value={field.value}
          type={field.type}
          placeholder={field.placeholder}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
          formSectionIndex={index}
          error={field.error}
        />
      );
    case "checkbox":
      return (
        <CheckboxInput
          key={field.name}
          label={field.label}
          name={field.name}
          value={field.value}
          handleInputChange={handleInputChange}
          formSectionIndex={index}
          error={field.error}
        />
      );
    case "textarea":
      return (
        <TextareaInput
          key={field.name}
          label={field.label}
          name={field.name}
          value={field.value}
          handleInputChange={handleInputChange}
          formSectionIndex={index}
          error={field.error}
        />
      );
    case "datalist":
      return (
        <DatalistInput
          key={field.name}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          value={field.value}
          options={field.options}
          handleInputChange={handleInputChange}
          formSectionIndex={index}
          error={field.error}
        />
      );
    case "selectText":
      return (
        <SelectTextInput
          key={field.selectName}
          selectName={field.selectName}
          selectValue={field.selectValue}
          options={field.options}
          textLabel={field.textLabel}
          textName={field.textName}
          textValue={field.textValue}
          placeholder={field.placeholder}
          handleInputChange={handleInputChange}
          formSectionIndex={index}
          error={field.error}
        />
      );
    default:
      break;
  }
};

export default formBuilder;
