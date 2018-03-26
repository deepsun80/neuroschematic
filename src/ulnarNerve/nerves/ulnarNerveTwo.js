import React, { Component } from 'react';
import { Group, Line, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectFDP, 
        removeFDP, 
        selectDCB, 
        removeDCB, 
        selectPCB, 
        removePCB,
        selectFDM, 
        removeFDM, 
        selectADM, 
        removeADM, 
        selectODM, 
        removeODM,
        selectPB, 
        removePB, 
        selectDI, 
        removeDI, 
        selectPI, 
        removePI, 
        selectLB, 
        removeLB, 
        selectAP, 
        removeAP, 
        selectFPB,
        removeFPB,
        selectDB, 
        removeDB } from '../../actions/selectUlnarMuscle';

class UlnarNerveTwo extends Component {
    constructor() {
        super();
        this.state = {
            shadowOpacity: 0,
            textNerveOpacity: 0
        }
    }

    handleNerveMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1
        });
        this.props.selectFDP();
        this.props.selectDCB();
        this.props.selectPCB();
        this.props.selectFDM();
        this.props.selectADM(); 
        this.props.selectODM();
        this.props.selectPB(); 
        this.props.selectDI(); 
        this.props.selectPI();
        this.props.selectLB();
        this.props.selectAP(); 
        this.props.selectFPB();
        this.props.selectDB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0
        });
        this.props.removeFDP();
        this.props.removeDCB();
        this.props.removePCB();
        this.props.removeFDM();
        this.props.removeADM();
        this.props.removeODM();
        this.props.removePB();
        this.props.removeDI();
        this.props.removePI(); 
        this.props.removeLB(); 
        this.props.removeAP();
        this.props.removeFPB();
        this.props.removeDB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleTouchLeave = () => {
        this.setState ({
            textNerveOpacity: 0
        });
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveClick = () => {
        this.props.selectNerve('Ulnar Nerve 2');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();    
        }, 300);
    }

    render() {
        const { shadowNerveBlur } = this.props;                        
        return (
            <Group>
                <Line
                    points={[430, 260, 540, 260]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveMouseEnter}
                    onMouseLeave={this.handleNerveMouseLeave}
                    onTouchStart={this.handleNerveMouseEnter}
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                <Text
                    text={'ULNAR NERVE'}
                    x={500}
                    y={180}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#446E9B'}
                    opacity={this.state.textNerveOpacity}
                />
            </Group>
        );
    }
}

//-----Redux Functions-----
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, 
                                openNerveModal, 
                                setCursorOpacity, 
                                removeCursorOpacity,
                                setCursorTextOpacity, 
                                removeCursorTextOpacity,
                                selectFDP, 
                                removeFDP,
                                selectDCB, 
                                removeDCB,
                                selectPCB, 
                                removePCB,
                                selectFDM, 
                                removeFDM, 
                                selectADM, 
                                removeADM, 
                                selectODM, 
                                removeODM,
                                selectPB, 
                                removePB, 
                                selectDI, 
                                removeDI, 
                                selectPI, 
                                removePI, 
                                selectLB, 
                                removeLB, 
                                selectAP, 
                                removeAP, 
                                selectFPB,
                                removeFPB,
                                selectDB, 
                                removeDB },
    dispatch); 
};

export default connect(null, mapDispatchToProps)(UlnarNerveTwo);