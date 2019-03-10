import * as PHOTOS_CONSTANTS from '../constants/photosConstants';
import unsplashService from '../services/unsplashService';

export const getUserPhotos = () => {
  return (dispatch, getState) => {
    dispatch(request());

    const { currentUser } = getState().searchUser;

    unsplashService.getUserPhotos(currentUser)
      .then((response) => {
        dispatch(success(response));
      });

    function request () {
      return {
        type: PHOTOS_CONSTANTS.GET_USER_PHOTOS_REQUEST,
      }
    }

    function success (results) {
      return {
        type: PHOTOS_CONSTANTS.GET_USER_PHOTOS_SUCCESS,
        results,
      }
    }
  };
};
