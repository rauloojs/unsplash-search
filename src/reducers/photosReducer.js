import * as PHOTOS_CONSTANTS from '../constants/photosConstants';

const initialState = {
  started: false,
  results: [],
  loading: false,
};

function photosReducer(state = initialState, action) {
  switch (action.type) {
    case PHOTOS_CONSTANTS.GET_USER_PHOTOS_REQUEST:
      return {
        ...state,
        started: true,
        loading: true,
      };
    case PHOTOS_CONSTANTS.GET_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        results: action.results,
        loading: false,
      };
    default:
     return state;
  }
}

export default photosReducer;
