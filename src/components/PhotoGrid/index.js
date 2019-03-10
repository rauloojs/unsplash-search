import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Photo from '../Photo';

const PhotoGrid = ({ photos }) => (
  <section>
    <Row>
      {photos.map((photo) => (
        <Col sm="4" key={photo.id}>
          <Photo photo={photo} />
        </Col>
      ))}
    </Row>
  </section>
);

PhotoGrid.propTypes = {
  photos: PropTypes.array,
};

export default PhotoGrid;
