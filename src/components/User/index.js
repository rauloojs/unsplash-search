import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div>
    User
  </div>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
