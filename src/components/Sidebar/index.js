import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import UsersList from '../UsersList';
import UsersListPlaceholder from '../UsersListPlaceholder';

const Sidebar = (props) => (
  <aside>
    <Search
      query={props.searchQuery}
      onQueryChange={props.onSearchQueryChange}
    />
    {props.users.length > 0 ? (
      <UsersList users={[]} />
    ) : (
      <UsersListPlaceholder />
    )}
  </aside>
);

Sidebar.propTypes = {
  users: PropTypes.array.isRequired,
  searchQuery: PropTypes.string,
  onSearchQueryChange: PropTypes.func.isRequired,
};

export default Sidebar;
