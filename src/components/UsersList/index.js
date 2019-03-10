import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';

const UsersList = ({ users, onUserClick }) => (
  <div>
    {users.map((user) => (
      <User
        key={user.id}
        user={user}
        onClick={() => onUserClick(user)}
      />
    ))}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.array,
  onUserClick: PropTypes.func,
};

export default UsersList;
