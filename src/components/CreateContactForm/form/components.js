import React from "react";
import {
  StyledSelect,
  StyledTextInput,
  StyledTextDropdownInput,
  StyledCheckboxInput,
  StyledTextareaInput
} from "./../styles";

export const TextInput = ({
  label,
  name,
  value,
  placeholder,
  handleInputChange,
  handleInputBlur,
  error,
  formSectionIndex
}) => (
  <StyledTextInput error={error}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      type="text"
      onChange={event => handleInputChange(formSectionIndex, event)}
      onBlur={event => handleInputBlur(formSectionIndex, event)}
    />
    {error && <span>{error}</span>}
  </StyledTextInput>
);

export const EmailInput = ({
  label,
  name,
  value,
  placeholder,
  handleInputChange,
  handleInputBlur,
  error,
  formSectionIndex
}) => (
  <StyledTextInput error={error}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      type="email"
      onChange={event => handleInputChange(formSectionIndex, event)}
      onBlur={event => handleInputBlur(formSectionIndex, event)}
    />
    {error && <span>{error}</span>}
  </StyledTextInput>
);

export const CheckboxInput = ({
  label,
  name,
  value,
  handleInputChange,
  error,
  formSectionIndex
}) => (
  <StyledCheckboxInput>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      checked={value}
      type="checkbox"
      onChange={event => handleInputChange(formSectionIndex, event)}
    />
    {error && <span>{error}</span>}
  </StyledCheckboxInput>
);

export const TextareaInput = ({
  label,
  name,
  value,
  handleInputChange,
  error,
  formSectionIndex
}) => (
  <StyledTextareaInput error={error}>
    <label htmlFor={name}>{label}</label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={event => handleInputChange(formSectionIndex, event)}
    />
    {error && <span>{error}</span>}
  </StyledTextareaInput>
);

export const DatalistInput = ({
  label,
  name,
  placeholder,
  value,
  options,
  handleInputChange,
  error,
  formSectionIndex
}) => (
  <StyledTextInput error={error}>
    <label htmlFor={name}>{label}</label>
    <input
      list={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={event => handleInputChange(formSectionIndex, event)}
    />
    <datalist id={name}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </datalist>
    {error && <span>{error}</span>}
  </StyledTextInput>
);

export const SelectTextInput = ({
  selectName,
  selectValue,
  options,
  textLabel,
  textName,
  textValue,
  placeholder,
  handleInputChange,
  error,
  formSectionIndex
}) => (
  <StyledTextInput>
    <label htmlFor={textName}>{textLabel}</label>
    <StyledTextDropdownInput>
      <StyledSelect
        name={selectName}
        id={selectName}
        defaultValue={selectValue}
        onChange={event => handleInputChange(formSectionIndex, event)}
      >
        {options.map((option, index) => {
          if (index === 0) {
            return (
              <option key={option} value="" id="default">
                {option}
              </option>
            );
          }

          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </StyledSelect>
      <input
        id={textName}
        name={textName}
        value={textValue}
        placeholder={placeholder}
        type="text"
        onChange={event => handleInputChange(formSectionIndex, event)}
      />
    </StyledTextDropdownInput>
    {error && <span>{error}</span>}
  </StyledTextInput>
);
