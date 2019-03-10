import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user, ...props }) => (
  <div {...props}>
    {user.name}
  </div>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
