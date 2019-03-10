import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'reactstrap';

const Search = ({ query, onQueryChange }) => (
  <Form>
    <Input
      type="text"
      placeholder="Search users"
      value={query}
      onChange={onQueryChange}
    />
  </Form>
);

Search.propTypes = {
  query: PropTypes.string,
  onQueryChange: PropTypes.func.isRequired,
};

export default Search;
