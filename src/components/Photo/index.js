import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <a href={photo.links.html} target="_blank" rel="noopener noreferrer">
    <img className="photo" src={photo.urls.thumb} alt={photo.alt_description} />
  </a>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Photo;
