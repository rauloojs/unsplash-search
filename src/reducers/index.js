import { combineReducers } from 'redux';
import photos from './photosReducer';
import searchUser from './searchUserReducer';

export default combineReducers({
  photos,
  searchUser,
});
