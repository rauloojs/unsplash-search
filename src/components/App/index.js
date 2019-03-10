import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Sidebar from '../../components/Sidebar';
import PhotoGrid from '../../components/PhotoGrid';
import Footer from '../../components/Footer';
import PhotoGridPlaceholder from '../../components/PhotoGridPlaceholder';

import './styles.css';

class App extends Component {

  handleSearch = (event) => {
    const { value } = event.target;

    this.props.searchUserActions.searchUser(value);
  }

  handleUserClick = (user) => {
    this.props.searchUserActions.selectUser(user.username);
    this.props.photosActions.getUserPhotos();
  }

  render () {
    return (
      <div className="App">
        <Row>
          <Col sm="4">
            <Sidebar
              users={this.props.searchUserResults}
              currentUser={this.props.currentUser}
              searchQuery={this.props.searchUserQuery}
              searchStarted={this.props.searchUserStarted}
              onSearchQueryChange={this.handleSearch}
              onUserClick={this.handleUserClick}
            />
          </Col>
          <Col sm="8">
            {this.props.photosResults.length > 0 ? (
              <PhotoGrid photos={this.props.photosResults} />
            ) : this.props.photosStarted && this.props.currentUser ? (
              <PhotoGridPlaceholder />
            ) : null }
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  searchUserQuery: PropTypes.string,
  searchUserStarted: PropTypes.bool,
  searchUserLoading: PropTypes.bool,
  searchUserTotal: PropTypes.number,
  searchUserTotalPages: PropTypes.number,
  searchUserResults: PropTypes.array,
  currentUser: PropTypes.string,
  searchUserActions: PropTypes.object.isRequired,
  photosStarted: PropTypes.bool,
  photosLoading: PropTypes.bool,
  photosTotal: PropTypes.number,
  photosTotalPages: PropTypes.number,
  photosResults: PropTypes.array,
  photosActions: PropTypes.object.isRequired,
};

export default App;
