import * as PHOTOS_CONSTANTS from '../constants/photosConstants';
import unsplashService from '../services/unsplashService';

/*
  TODO: Add actions to handle infinite scroll to fetch more photos
  total and total_pages should be added to state to keep track of available items to fetch
*/
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

    // TODO: Handle error case and show message with ErrorMessage component
  };
};
