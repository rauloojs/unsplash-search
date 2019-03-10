import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import UsersList from '../UsersList';
import UsersListPlaceholder from '../UsersListPlaceholder';

const Sidebar = ({
  users,
  currentUser,
  searchQuery,
  searchStarted,
  onSearchQueryChange,
  onUserClick
}) => (
  <aside className="sidebar">
    <Search
      query={searchQuery}
      onQueryChange={onSearchQueryChange}
    />
    {/*
      TODO: Add a loader using Loader component
      searchUserLoading should be passed as prop to decide when the loader should appear
    */}
    {users.length > 0 ? (
      <UsersList
        users={users}
        currentUser={currentUser}
        onUserClick={onUserClick}
      />
    ) : searchStarted && searchQuery.length > 0 ? (
      <UsersListPlaceholder />
    ) : null }
  </aside>
);

Sidebar.propTypes = {
  users: PropTypes.array.isRequired,
  currentUser: PropTypes.string,
  searchQuery: PropTypes.string,
  searchStarted: PropTypes.bool,
  onSearchQueryChange: PropTypes.func.isRequired,
  onUserClick: PropTypes.func.isRequired,
};

export default Sidebar;
