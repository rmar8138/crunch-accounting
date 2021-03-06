import { isEmail, isPostalCode, isInt } from "validator";
import { anyLocale } from "./../../config/constants";
import { errorMessages } from "./../../config/messages";

export const selectErrorMessage = (name, value) => {
  if (value) {
    switch (name) {
      case "phone":
        if (!isInt(value.split(" ").join("")))
          return errorMessages.invalidPhone;
        break;
      case "email":
        if (!isEmail(value)) return errorMessages.invalidEmail;
        break;
      case "postcode":
        if (!isPostalCode(value, anyLocale))
          return errorMessages.invalidPostcode;
        break;
      default:
        return null;
    }
  }
};

export const selectInputBorder = ({ error, value, theme }) => {
  if (error) {
    return `1px solid ${theme.color.red}`;
  } else if (value) {
    return `1px solid ${theme.color.darkGrey2}`;
  } else {
    return "1px solid transparent";
  }
};
