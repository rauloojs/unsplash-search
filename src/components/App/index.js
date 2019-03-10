import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Sidebar from '../../components/Sidebar';
import PhotoGrid from '../../components/PhotoGrid';
import Footer from '../../components/Footer';
import { setPhotos } from '../../actions/photosActions';
import PhotoGridPlaceholder from '../../components/PhotoGridPlaceholder';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(setPhotos());
  }

  handleSearch = (event) => {
    const { value } = event.target;

    this.props.searchUserActions.searchUser(value);
  }

  handleUserClick = (user) => {
    console.log(user);
  }

  render () {
    return (
      <div className="App">
        <Row>
          <Col sm="4">
            <Sidebar
              users={this.props.searchUserResults}
              searchQuery={this.props.searchUserQuery}
              searchStarted={this.props.searchUserStarted}
              onSearchQueryChange={this.handleSearch}
              onUserClick={this.handleUserClick}
            />
          </Col>
          <Col sm="8">
            {this.props.photos.length > 0 ? (
              <PhotoGrid photos={this.props.photos} />
            ) : (
              <PhotoGridPlaceholder />
            )}
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
  searchUserActions: PropTypes.object.isRequired,
};

export default App;
