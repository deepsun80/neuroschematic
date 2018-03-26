import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeInfoModal } from '../actions';

require('./index.css');
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    padding               : '0',
    borderRadius          : '5px',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '#e9e9e9'
  }
};
 
class InfoModal extends Component {
    render() {
        const { infoModalIsOpen, closeInfoModal } = this.props;
        return (
            <div>
                <Modal
                    isOpen={ infoModalIsOpen }
                    onRequestClose={ closeInfoModal }
                    style={ customStyles }
                >       
                    <h6 className='modal-header'>
                        Instructions 
                        <span style={{ textAlign: 'right' }}>Demo v1.0</span>
                    </h6>
                    <div className='modal-body info-modal'>
                        <ul>
                            <li>Click or Touch on the Screen and Drag to Move Diagrams.</li>
                            <li>Hover Mouse Over Diagram to View Nerve or Entrapment Titles and Point Cursor.</li>
                            <li>Mouse Hover Over Nerve Section Will Highlight Affected Muscles in Red.</li>
                            <li>Click or Tap Anywhere on Diagram to Select Point on Nerve.</li>
                            <li>Modal Will Open Listing Affected Sensory Nerves and Muscles for the Point.</li>
                            <li>Click Close Button or Outside the Modal Area or Escape Key to Close Modal.</li>
                        </ul>
                    </div>
                    <div className='btn-modal'>
                        <button className='btn btn-secondary' onClick={ closeInfoModal }>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        infoModalIsOpen: state.infoModalState   
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ closeInfoModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);