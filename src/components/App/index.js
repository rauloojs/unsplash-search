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
  render () {
    return (
      <div className="App">
        <Row>
          <Col sm="4">
            <Sidebar
              users={[]}
              searchQuery={''}
              onSearchQueryChange={() => {}}
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

};

export default App;
