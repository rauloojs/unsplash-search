import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../../components/App';
import * as searchUserActions from '../../actions/searchUserActions';

function mapDispatchToProps(dispatch) {
  return {
    searchUserActions: bindActionCreators(searchUserActions, dispatch),
    dispatch,
  };
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  searchUserQuery: state.searchUser.query,
  searchUserStarted: state.searchUser.started,
  searchUserTotal: state.searchUser.total,
  searchUserTotalPages: state.searchUser.totalPages,
  searchUserResults: state.searchUser.results,
  searchUserLoading: state.searchUser.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
