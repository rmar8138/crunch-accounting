import React from "react";
import {
  StyledSelect,
  StyledTextInput,
  StyledCheckboxInput,
  StyledTextareaInput
} from "./../styles";

export const TextInput = ({
  label,
  name,
  value,
  placeholder,
  handleInputChange,
  error
}) => (
  <StyledTextInput>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      type="text"
      onChange={handleInputChange}
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
  error
}) => (
  <StyledTextInput>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      type="email"
      onChange={handleInputChange}
    />
    {error && <span>{error}</span>}
  </StyledTextInput>
);

export const CheckboxInput = ({
  label,
  name,
  value,
  handleInputChange,
  error
}) => (
  <StyledCheckboxInput>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      checked={value}
      type="checkbox"
      onChange={handleInputChange}
    />
    {error && <span>{error}</span>}
  </StyledCheckboxInput>
);

export const TextareaInput = ({
  label,
  name,
  value,
  handleInputChange,
  error
}) => (
  <StyledTextareaInput>
    <label htmlFor={name}>{label}</label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={handleInputChange}
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
  error
}) => (
  <StyledTextInput>
    <label htmlFor={name}>{label}</label>
    <input
      list={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
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

export const SelectInput = ({
  name,
  value,
  options,
  handleInputChange,
  error
}) => (
  <StyledSelect
    name={name}
    id={name}
    defaultValue={value}
    onChange={handleInputChange}
  >
    {options.map((option, index) => {
      if (index === 1) {
        return (
          <option value="" id="default">
            {option}
          </option>
        );
      }

      return <option value={option}>{option}</option>;
    })}
    {error && <span>{error}</span>}
  </StyledSelect>
);
