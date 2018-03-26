import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeNerveModal } from '../actions';

require('./index.css');
 
const customStyles = {
  content : {
    padding               : '0px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '#e9e9e9',
    overflow              : 'auto',
    WebkitOverflowScrolling: 'touch'
  }
};
 
class NerveModal extends Component {
    render() {
        const { modalIsOpen, closeNerveModal, nerveTitle, nerveNerves, nerveMuscles, nerveSensory, nerveCutaneous } = this.props;
        console.log(nerveCutaneous);
        const lastChar = nerveTitle.slice(-1);
        let modalTitle = nerveTitle;
        if (!isNaN(lastChar)) {
            modalTitle = nerveTitle.slice(0, -1);
        }
        return (
            <div>
                <Modal
                    isOpen={ modalIsOpen }
                    onRequestClose={ closeNerveModal }
                    style={ customStyles }
                >       
                    <h6 className='modal-header'>{ modalTitle }</h6>
                    <div className='modal-body'>
                        { (nerveNerves.length !== 0) && 
                            <ul>
                                <h6 className='modal-subheader'>Nerves Affected{' '}:</h6>
                                {nerveNerves.map((nerves, id) => {
                                    if (nerves === 'Median Nerve') {
                                        return (
                                            <a href='/median-nerve'>
                                                <li key={ id }>{ nerves }</li>
                                            </a>
                                        )
                                    } 
                                    if (nerves === 'Ulnar Nerve') {
                                        return (
                                            <a href='/ulnar-nerve'>
                                                <li key={ id }>{ nerves }</li>
                                            </a>
                                        )
                                    } else {
                                        return (
                                            <li key={ id }>{ nerves }</li>
                                        );
                                    }
                                })}
                            </ul>
                        }
                        { (nerveMuscles.length !== 0) &&
                            <ul style={{ marginRight: 50 }}>
                                <h6 className='modal-subheader'>Muscles Innervated{' '}:</h6>
                                {nerveMuscles.map((motor, id) => {
                                    return (
                                        <li key={ id }>{ motor }</li>
                                    );
                                })}
                            </ul>
                        }
                        { (nerveSensory.length !== 0) && 
                            <ul>
                                <h6 className='modal-subheader'>Sensory (Non-Cutaneous) Innervation To{' '}:</h6>
                                {nerveSensory.map((sensory, id) => {
                                    return (
                                        <li key={ id }>{ sensory }</li>
                                    );
                                })}
                            </ul>
                        }
                        { (nerveCutaneous.length !== 0) && 
                            <ul>
                                <h6 className='modal-subheader'>Cutaneous Innervation To{' '}:</h6>
                                {nerveCutaneous.map((cutaneous, id) => {
                                    return (
                                        <li key={ id }>{ cutaneous }</li>
                                    );
                                })}
                            </ul>
                        }
                    </div>
                    <div className='btn-modal'>
                        <button className='btn btn-secondary' onClick={ closeNerveModal }>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        modalIsOpen: state.nerveModalState,
        nerveTitle: state.selectedNerve.selectedNerveTitle,
        nerveNerves: state.selectedNerve.selectedNerveNerves,        
        nerveMuscles: state.selectedNerve.selectedNerveMuscles,
        nerveSensory: state.selectedNerve.selectedNerveSensory,
        nerveCutaneous: state.selectedNerve.selectedNerveCutaneous
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ closeNerveModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NerveModal);