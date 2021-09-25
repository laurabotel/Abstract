import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { Icon } from '@iconify/react';

const mapDispatchToProps = (dispatch) => ({
  toggleCanvasSize: (canvasSize) => dispatch(actions.toggleCanvasSize(canvasSize))
});

function Phone(props) {
  return (
    // when clicked, change cavas size to 812 x 375 scaled to 50% to fit screen
    <button onClick={() => { props.setDropdown(false); props.toggleCanvasSize('iPhone X') }}>
      <Icon icon="mdi:cellphone" />
    </button>
  );
};

export default connect(null, mapDispatchToProps)(Phone);