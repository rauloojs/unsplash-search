import * as PHOTOS_CONSTANTS from '../constants/photosConstants';

const initialState = [];

function photosReducer(state = initialState, action) {
  switch (action.type) {
    case PHOTOS_CONSTANTS.SET_PHOTOS:
      return action.photos;
    default:
     return state;
  }
}

export default photosReducer;
