import * as PHOTOS_CONSTANTS from '../constants/photosConstants';
import unsplashService from '../services/unsplashService';

export const setPhotos = () => {
  return (dispatch) => {
    unsplashService.search('cats')
      .then((response) => {
        dispatch({
          type: PHOTOS_CONSTANTS.SET_PHOTOS,
          photos: response.results,
        });
      });
  };
};
