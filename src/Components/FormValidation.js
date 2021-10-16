import React, { Component } from "react";

export class FormValidation extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    passwordErr: "",
  };
  validateOnChange = (name, value) => {
    let firstNameErr = "";
    let lastNameErr = "";
    let emailErr = "";
    let passwordErr = "";
    switch (name) {
      case "firstName":
        if (value.length < 3) {
          firstNameErr = "First Name Should be atleast 3 characters";
        }
        this.setState({firstNameErr})
        break;
      case "lastName":
        if (value.length == 0) {
          lastNameErr = "Please Enter Last Name";
          
        }
        this.setState({lastNameErr})
        break;
      case "email":
        if (!value.includes("@")) {
          emailErr = "Please Enter a valid Email";
          
        }
        this.setState({emailErr});
       break;
      case "password":
        if (value.length < 6) {
          passwordErr = "Password Should be minimum of 6 characters";
          
        }
        this.setState({passwordErr})
        break;
      default:
        break;
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    //    console.log(name,value);
    this.setState({ [name]: value }, function () {
      this.validateOnChange(name, value);
    });
    console.log("Set state is Asychronous Function");
  };
  validation = () => {
    let firstNameErr = "";
    let lastNameErr = "";
    let emailErr = "";
    let passwordErr = "";
    if (this.state.firstName.length < 3) {
      firstNameErr = "First Name Should be atleast 3 characters";
    }
    if (this.state.lastName.length == 0) {
      lastNameErr = "Please Enter Last Name";
    }
    if (!this.state.email.includes("@")) {
      emailErr = "Please Enter a valid Email";
    }
    if (this.state.password.length < 6) {
      passwordErr = "Password Should be minimum of 6 characters";
    }

    if (firstNameErr || lastNameErr || emailErr || passwordErr) {
      this.setState({ firstNameErr, lastNameErr, emailErr, passwordErr });
      return false;
    }
    this.setState({ firstNameErr, lastNameErr, emailErr, passwordErr });
    return true;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validation();
    if (isValid) {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }

    console.log(this.state);
  };

  render() {
    return (
      <div className="m-5">
        <h2 className="text-center">Registration Form</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control m-2"
            name="firstName"
            autoComplete="off"
            placeholder="Enter your First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <p className="text-danger">{this.state.firstNameErr}</p>
          <input
            type="text"
            name="lastName"
            className="form-control m-2"
            placeholder="Enter your last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <p className="text-danger">{this.state.lastNameErr}</p>
          <input
            type="email"
            name="email"
            className="form-control m-2"
            placeholder="Enter your Email Address"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <p className="text-danger">{this.state.emailErr}</p>
          <input
            type="password"
            name="password"
            className="form-control m-2"
            placeholder="Enter your password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <p className="text-danger">{this.state.passwordErr}</p>

          <button type="submit" className="btn btn-info px-3 py-2 rounded mt-3">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default FormValidation;
