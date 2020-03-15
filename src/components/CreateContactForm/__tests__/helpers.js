import { selectErrorMessage } from "./../helpers";
import { errorMessages } from "./../../../config/messages";

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
