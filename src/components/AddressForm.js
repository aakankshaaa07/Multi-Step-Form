import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class AddressForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  prev = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Address"/>
          <TextField
            floatingLabelText="Address Line 1"
            onChange={handleChange('addLine1')}
            defaultValue={values.addLine1}
          /><br/>
          <TextField
            floatingLabelText="Address Line 2"
            onChange={handleChange('addLine2')}
            defaultValue={values.addLine2}
          /><br/>
          <TextField
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          /><br/>
          <TextField
            floatingLabelText="PIN Code"
            onChange={handleChange('pinCode')}
            defaultValue={values.pinCode}
          /><br/>
          <TextField
            floatingLabelText="State"
            onChange={handleChange('state')}
            defaultValue={values.state}
          /><br/>
          <RaisedButton
            label="Previous"
            primary={true}
            style={styles.button}
            onClick={this.prev}
          />
          <RaisedButton
            label="Submit"
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

export default AddressForm