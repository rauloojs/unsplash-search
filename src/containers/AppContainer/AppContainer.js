import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../../components/App';
import * as searchUserActions from '../../actions/searchUserActions';
import * as photosActions from '../../actions/photosActions';

function mapDispatchToProps(dispatch) {
  return {
    searchUserActions: bindActionCreators(searchUserActions, dispatch),
    photosActions: bindActionCreators(photosActions, dispatch),
    dispatch,
  };
}

const mapStateToProps = (state) => ({
  searchUserQuery: state.searchUser.query,
  searchUserStarted: state.searchUser.started,
  searchUserTotal: state.searchUser.total,
  searchUserTotalPages: state.searchUser.totalPages,
  searchUserResults: state.searchUser.results,
  searchUserLoading: state.searchUser.loading,
  currentUser: state.searchUser.currentUser,
  photosStarted: state.photos.started,
  photosTotal: state.photos.total,
  photosTotalPages: state.photos.totalPages,
  photosResults: state.photos.results,
  photosLoading: state.photos.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
