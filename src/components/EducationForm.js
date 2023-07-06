import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class EducationForm extends Component {
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
          <AppBar title="Enter Education Details"/>
          <TextField
            floatingLabelText="College"
            onChange={handleChange('college')}
            defaultValue={values.college}
          /><br/>
          <TextField
            floatingLabelText="Major"
            onChange={handleChange('degree')}
            defaultValue={values.degree}
          /><br/>
          <TextField
            floatingLabelText="Field of study"
            onChange={handleChange('field')}
            defaultValue={values.field}
          /><br/>
          <TextField
            floatingLabelText="Graduation Year"
            onChange={handleChange('gradYear')}
            defaultValue={values.gradYear}
          /><br/>
          <TextField
            floatingLabelText="GPA"
            onChange={handleChange('gpa')}
            defaultValue={values.gpa}
          /><br/>
          <RaisedButton
            label="Previous"
            primary={true}
            style={styles.button}
            onClick={this.prev}
          />
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


export default EducationForm