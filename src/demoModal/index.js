import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeDemoModal } from '../actions';
 
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
 
class DemoModal extends Component {
    render() {
        const { demoModalIsOpen, closeDemoModal } = this.props;
        return (
            <div>
                <Modal
                    isOpen={ demoModalIsOpen }
                    onRequestClose={ closeDemoModal }
                    style={ customStyles }
                >       
                    <h6 className='modal-header'>
                        Demo v1.0 
                    </h6>
                    <div className='modal-body' style={{ marginLeft: 50 }}>
                        <h5>This section is not available in the demo version.<br/>
                            Please purchase the full version to view it.
                        </h5>
                    </div>
                    <div className='btn-modal'>
                        <button className='btn btn-secondary' onClick={ closeDemoModal }>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        demoModalIsOpen: state.demoModalState   
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ closeDemoModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoModal);