import React from 'react';
import { Alert } from 'reactstrap';

// TODO: Show this component somewhere in the UI and connect it to fetching actions
// so it's possible to alert user when a request goes wrong.
const ErrorMessage = (props) => (
  <Alert color="danger">
    There was an error: {this.props.message}
  </Alert>
);

export default ErrorMessage;
