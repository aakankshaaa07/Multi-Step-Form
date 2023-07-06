import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Submit extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Successful"/>
        </React.Fragment>
        <h4>Thanks for filling the form! We will get back to you soon!</h4>
      </MuiThemeProvider>
    )
  }
}

export default Submit