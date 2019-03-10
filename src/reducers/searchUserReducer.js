import * as SEARCH_USER_CONSTANTS from '../constants/searchUserConstants';

const initialState = {
  started: false,
  query: '',
  total: null,
  totalPages: null,
  results: [],
  loading: false,
};

function photosReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER_CONSTANTS.SEARCH_REQUEST:
      return {
        ...state,
        query: action.query,
        started: true,
        loading: true,
      };
    case SEARCH_USER_CONSTANTS.SEARCH_SUCCESS:
      return {
        ...state,
        total: action.total,
        totalPages: action.total_pages,
        results: action.results,
        loading: false,
      };
    default:
     return state;
  }
}

export default photosReducer;
