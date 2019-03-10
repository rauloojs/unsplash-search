import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';
import { ListGroup, ListGroupItem } from 'reactstrap';

const UsersList = ({ users, currentUser, onUserClick }) => (
  <ListGroup>
    {users.map((user) => (
      <ListGroupItem
        key={user.id}
        className="user"
        action
        active={user.username === currentUser}
        onClick={() => onUserClick(user)}
      >
        <User user={user} />
      </ListGroupItem>
    ))}
  </ListGroup>
);

UsersList.propTypes = {
  users: PropTypes.array,
  currentUser: PropTypes.string,
  onUserClick: PropTypes.func,
};

export default UsersList;
