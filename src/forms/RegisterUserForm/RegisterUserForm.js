import React, { Component } from "react";
import Button from "../../lib/Button/Button";
// import axios from "axios";

import RadioButtons from "../RadioButtons/RadioButtons";
// import { useState, useEffect } from "react";

class Form extends Component {
  // const [backgroundButtonColor, setBackgroundButtonColor] = useState("grey");
  state = {
    name: "",
    number: "",
    email: "",
  };

  componentDidMount() {
    // this.props.fetchContact();
  }

  handleInputChange = (evt) => {
    console.log(evt.currentTarget.value);
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  // handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   // if(this.state.name)
  //   this.props.addContact(this.state.name, this.state.number);
  //   this.setState({ name: "", number: "" });
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   this.props.onLogin(this.state);
  //   this.setState({ name: "", email: "", password: "" });
  // };

  render() {
    return (
      <>
        <h2>Working with POST request</h2>
        <form onSubmit={this.handleSubmit}>
          <legend></legend>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="Your name"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
              // id={this.inputId}
            ></input>
          </label>
          <label>
            <input
              type="email"
              name="email"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              placeholder="Email"
            ></input>
          </label>
          <label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              value={this.state.number}
              onChange={this.handleInputChange}
              placeholder="Phone"
              required
            ></input>
          </label>
          <RadioButtons />
          <Button disabled={true}>Sing up</Button>
        </form>
      </>
    );
  }
}

export default Form;
