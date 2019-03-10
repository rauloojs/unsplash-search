import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <span>
    {user.name}
  </span>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
