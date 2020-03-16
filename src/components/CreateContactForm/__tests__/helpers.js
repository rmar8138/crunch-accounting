import { selectErrorMessage, selectInputBorder } from "./../helpers";
import { errorMessages } from "./../../../config/messages";
import theme from "./../../../theme";

describe("test selectErrorMessage function", () => {
  it("should return correct error message for invalid phone input", () => {
    const name = "phone";
    const value = "abcdefg";
    const result = selectErrorMessage(name, value);

    expect(result).toBe(errorMessages.invalidPhone);
  });

  it("should not return error message when phone value contains white space", () => {
    const name = "phone";
    const value = "098 765 432";
    const result = selectErrorMessage(name, value);

    expect(result).toBe(undefined);
  });

  it("should return correct error message for invalid email", () => {
    const name = "email";
    const value = "test";
    const result = selectErrorMessage(name, value);

    expect(result).toBe(errorMessages.invalidEmail);
  });

  it("should return correct error message for invalid postcode", () => {
    const name = "postcode";
    const value = "abcdefg";
    const result = selectErrorMessage(name, value);

    expect(result).toBe(errorMessages.invalidPostcode);
  });
});

describe("test selectInputBorder function", () => {
  it("should return red with error message", () => {
    const args = {
      error: "Required field",
      value: "",
      theme
    };
    const expected = `1px solid ${theme.color.red}`;
    const result = selectInputBorder(args);

    expect(result).toBe(expected);
  });

  it("should return dark grey with valid value", () => {
    const args = {
      error: "",
      value: "Test",
      theme
    };
    const expected = `1px solid ${theme.color.darkGrey2}`;
    const result = selectInputBorder(args);

    expect(result).toBe(expected);
  });
  it("should return transparent if neither", () => {
    const args = {
      error: "",
      value: "",
      theme
    };
    const expected = `1px solid transparent`;
    const result = selectInputBorder(args);

    expect(result).toBe(expected);
  });
});
