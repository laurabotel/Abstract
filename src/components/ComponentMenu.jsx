import { React, useState } from 'react';
import HTMLLibrary from './HTMLLibrary.jsx';
import ReactRouterLibrary from './ReactRouterLibrary.jsx';
import BootstrapLibrary from './BootstrapLibrary.jsx';
import ComSettings from './ComSettings.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  componentMenu: state.main.componentMenu
});

const mapDispatchToProps = (dispatch) => ({
  toggleComponentMenu: (componentMenu) => dispatch(actions.toggleComponentMenu(componentMenu))
});

function ComponentMenu (props) {
  // declaring library state to decide which dropdown (HTML, Bootstrap) to render
  const [library, setLibrary] = useState('')
  
  // console.log(library);
  // console.log('props:\n', props);
  // console.log('toggleComponentMenu', props.toggleComponentMenu);

  

  return (
    <div id="component_menu">
      <h3>Component Menu</h3>
      {/* <button onClick={props.toggleComponentMenu}>Toggle Component</button> */}
      {
        props.componentMenu ?
          <>
            <button className="compMenuBtn" onClick={() => setLibrary('HTMLLibrary')}>HTML Library</button> { library === 'HTMLLibrary' ? <HTMLLibrary /> : null }
            <button className="compMenuBtn" onClick={() => setLibrary('BootstrapLibrary')}>Bootstrap Library</button> { library === 'BootstrapLibrary' ? <BootstrapLibrary /> : null }
            <button className="compMenuBtn" onClick={() => setLibrary('ReactRouterLibrary')}>React Router Library</button>{ library === 'ReactRouterLibrary' ? <ReactRouterLibrary /> : null }
            <ComSettings />
          </>
        : null
      }
    </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentMenu);