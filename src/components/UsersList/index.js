import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';

const UsersList = ({ users }) => (
  <div>
    {users.map((user) => (
      <User user={user} />
    ))}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
