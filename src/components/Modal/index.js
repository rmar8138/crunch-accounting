import React, { Component } from "react";
import { StyledModal } from "./styles";
import closeIcon from "./../../assets/images/close.svg";
import successIcon from "./../../assets/images/success.svg";

class Modal extends Component {
  handleFormDataRender = field => {
    switch (field.type) {
      case "selectText":
        // this is for the title + name input dropdown
        return (
          <li>
            <p className="field">{field.textLabel}</p>
            <p className="value">{`${field.selectValue} ${field.textValue}`}</p>
          </li>
        );
      case "description":
        // so that description fills full width of modal container
        return (
          <li className="description">
            <p className="field">{field.label}</p>
            <p className="value">{field.value}</p>
          </li>
        );
      case "checkbox":
        return (
          <li className="description">
            <p className="field">{field.label}</p>
            <p className="value">{field.value ? "Yes" : "No"}</p>
          </li>
        );
      default:
        return (
          <li>
            <p className="field">{field.label}</p>
            <p className="value">{field.value}</p>
          </li>
        );
    }
  };

  render() {
    const { formData } = this.props;
    return (
      <StyledModal>
        <button onClick={() => this.props.handleCloseModal()}>
          <img src={closeIcon} alt="Close Button" />
        </button>
        <div className="modalHeader">
          <h2>
            Saved
            <img src={successIcon} alt="Save successful" />
          </h2>
          <p>The contact details have been saved</p>
        </div>
        <div>
          {formData.map(formSection => (
            <>
              <h3>{formSection.heading}</h3>
              <ul>
                {formSection.fields.map(field =>
                  this.handleFormDataRender(field)
                )}
              </ul>
            </>
          ))}
        </div>
      </StyledModal>
    );
  }
}

export default Modal;
