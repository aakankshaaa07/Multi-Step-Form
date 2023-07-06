import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class PrivateForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details"/>
          <TextField
            floatingLabelText="First name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          /><br/>
          <TextField
            floatingLabelText="Last name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          /><br/>
          <TextField
            floatingLabelText="Email ID"
            onChange={handleChange('email')}
            defaultValue={values.email}
          /><br/>
          <TextField
            floatingLabelText="Phone"
            onChange={handleChange('phone')}
            defaultValue={values.phone}
          /><br/>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15,
    backgroundColor: "#ff0000"
  }
}

export default PrivateForm
