import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import UsersList from '../UsersList';
import UsersListPlaceholder from '../UsersListPlaceholder';

const Sidebar = ({
  users,
  searchQuery,
  searchStarted,
  onSearchQueryChange,
  onUserClick
}) => (
  <aside>
    <Search
      query={searchQuery}
      onQueryChange={onSearchQueryChange}
    />
    {users.length > 0 ? (
      <UsersList
        users={users}
        onUserClick={onUserClick}
      />
    ) : searchStarted && searchQuery.length > 0 ? (
      <UsersListPlaceholder />
    ) : null }
  </aside>
);

Sidebar.propTypes = {
  users: PropTypes.array.isRequired,
  searchQuery: PropTypes.string,
  searchStarted: PropTypes.bool,
  onSearchQueryChange: PropTypes.func.isRequired,
  onUserClick: PropTypes.func.isRequired,
};

export default Sidebar;
