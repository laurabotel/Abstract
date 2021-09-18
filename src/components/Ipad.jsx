import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  toggleCanvasSize: (canvasSize) => dispatch(actions.toggleCanvasSize(canvasSize))
});

function Ipad(props) {
  return (
    // when clicked, change cavas size to 1366 x 1024 scaled to 50% to fit screen
    <button onClick={() => props.toggleCanvasSize('iPad Pro')}>IPAD</button>
  );
};

export default connect(null, mapDispatchToProps)(Ipad);