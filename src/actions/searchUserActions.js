import * as SEARCH_USER_CONSTANTS from '../constants/searchUserConstants';
import unsplashService from '../services/unsplashService';

export const searchUser = (query) => {
  return (dispatch) => {
    dispatch(request(query));

    unsplashService.searchUser(query)
      .then((response) => {
        dispatch(success(response));
      });

    function request (query) {
      return {
        type: SEARCH_USER_CONSTANTS.SEARCH_REQUEST,
        query,
      }
    }

    function success (response) {
      return {
        type: SEARCH_USER_CONSTANTS.SEARCH_SUCCESS,
        ...response,
      }
    }
  };
};

export const selectUser = (username) => ({
  type: SEARCH_USER_CONSTANTS.SELECT_USER,
  username,
})
