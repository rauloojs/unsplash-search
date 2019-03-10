import { connect } from 'react-redux';
import App from '../../components/App';

const mapStateToProps = (state) => ({
  photos: state.photos,
});

export default connect(mapStateToProps)(App);
