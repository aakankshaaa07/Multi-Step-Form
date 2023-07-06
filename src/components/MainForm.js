import React, { Component } from 'react';
import PrivateForm from './PrivateForm';
import EducationForm from './EducationForm';
import AddressForm from './AddressForm';
import Submit from './Submit';

export class MainForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    field: '',
    gradYear: '',
    gpa: '',
    addLine1: '',
    addLine2: '',
    city: '',
    pinCode: '',
    state: ''
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, phone, college, degree, field, gradYear, gpa, addLine1, addLine2, city, state, pinCode } = this.state;
    const values = { firstName, lastName, email, phone, college, degree, field, gradYear, gpa, addLine1, addLine2, city, state, pinCode }
    
    switch(step) {
      case 1:
        return(
          <PrivateForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <EducationForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <AddressForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <Submit/>
        )
    }
  }
}

export default MainForm