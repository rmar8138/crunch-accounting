import React, { Component } from "react";
import { StyledModal } from "./styles";
import closeIcon from "./../../assets/images/close.svg";
import successIcon from "./../../assets/images/success.svg";

class Modal extends Component {
  render() {
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
          <h3>Contact Information</h3>
          <ul>
            <li>
              <p className="field">First Name</p>
              <p className="value">Ragan</p>
            </li>
            <li>
              <p className="field">Last Name</p>
              <p className="value">Martinez</p>
            </li>
            <li>
              <p className="field">Account Name</p>
              <p className="value">Ragan's Account no touchy</p>
            </li>
            <li>
              <p className="field">Company Name</p>
              <p className="value">Ragan's Snaccs</p>
            </li>
            <li>
              <p className="field">Phone</p>
              <p className="value">0123 458 323</p>
            </li>
            <li>
              <p className="field">Fax</p>
              <p className="value"></p>
            </li>
            <li>
              <p className="field">Title</p>
              <p className="value">Owner</p>
            </li>
            <li>
              <p className="field">Email</p>
              <p className="value">ragan@test.com</p>
            </li>
            <li>
              <p className="field">Email Opt Out</p>
              <p className="value">Yes</p>
            </li>
          </ul>
          <h3>Address Information</h3>
          <ul>
            <li>
              <p className="field">Street No. & Street</p>
              <p className="value">1, Anzac Parade</p>
            </li>
            <li>
              <p className="field">City</p>
              <p className="value">Sydney</p>
            </li>
            <li>
              <p className="field">State</p>
              <p className="value">New South Wales</p>
            </li>
            <li>
              <p className="field">Postcode</p>
              <p className="value">2005</p>
            </li>
          </ul>
          <h3>Description Information</h3>
          <ul>
            <li className="description">
              <p className="field">Description</p>
              <p className="value">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis, ut minus maiores at rerum facilis perferendis eum,
                eligendi commodi officiis, earum praesentium voluptates iste!
                Cupiditate cumque quia temporibus optio quisquam aut saepe
                nulla, dignissimos ipsa. Dolore vitae suscipit, doloribus sunt
                quaerat facilis laborum blanditiis, delectus consequatur hic
                similique, iure cupiditate.
              </p>
            </li>
          </ul>
        </div>
      </StyledModal>
    );
  }
}

export default Modal;
