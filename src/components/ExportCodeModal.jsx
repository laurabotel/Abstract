import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import * as actions from '../actions/actions.js';
import ExportModalBackdrop from "./ExportModalBackdrop";

const mapStateToProps = (state) => ({
  exportModal: state.main.exportModal
})

const mapDispatchToProps = (dispatch) => ({
  toggleExportModal: (toggle) => dispatch(actions.toggleExportModal(toggle))
});

function ExportCodeModal ({ toggleExportModal, exportModal }) {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // make fetch request to server to make request to Github API
    // need to include access_token and userData jwts
  }

  return (
    <ExportModalBackdrop onClick={() => toggleExportModal(!exportModal)}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="abstract_modal orange-gradient"
        initial='hidden'
        animate='visible'
        exit='exit'
      > 
        <button id="close_modal" onClick={() => toggleExportModal(!exportModal)}>x</button>
        <div className="export_form_container">
          <h2>Export Code</h2>
          <h3>Create a Repository</h3>
          <form id="export_form" onSubmit={handleFormSubmit}> 
            <label htmlFor="repository_name">Repository Name:</label>
            <input type="text" id="repository_name" name="repository_name" placeholder="Enter a repository name."></input>
            <label htmlFor="commit_message">Commit Message:</label>
            <input type="text" id="commit_message" name="commit_message" placeholder="Enter a commit message."></input>

            <button id="submit_export_button">Export to Github</button>
          </form>
        </div>
      </motion.div>
    </ExportModalBackdrop>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportCodeModal);