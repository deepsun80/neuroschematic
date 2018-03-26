import React, { Component } from 'react';
import { Group, Line, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectOP, 
    removeOP, 
    selectAPB, 
    removeAPB, 
    selectFPB, 
    removeFPB, 
    selectLUM, 
    removeLUM,
    selectFDP, 
    removeFDP, 
    selectFPL, 
    removeFPL, 
    selectPQ, 
    removePQ,
    selectFDS,
    removeFDS,
    selectDB, 
    removeDB,
    selectTCB, 
    removeTCB } from '../../actions/selectMedianMuscle';

class MedianNerveFour extends Component {
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
        this.props.selectOP();
        this.props.selectAPB();
        this.props.selectFPB();
        this.props.selectLUM();
        this.props.selectFDP();
        this.props.selectFPL();
        this.props.selectPQ();
        this.props.selectFDS();
        this.props.selectDB();
        this.props.selectTCB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0
        });
        this.props.removeOP();
        this.props.removeAPB();
        this.props.removeFPB();
        this.props.removeLUM();
        this.props.removeFDP();
        this.props.removeFPL();
        this.props.removePQ();
        this.props.removeFDS();
        this.props.removeDB();
        this.props.removeTCB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveClick = () => {
        this.props.selectNerve('Median Nerve 4');
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
                    points={[570, 260, 650, 260]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveMouseEnter}
                    onMouseLeave={this.handleNerveMouseLeave}
                    onTouchStart={this.handleNerveMouseEnter}
                    onTouchEnd={this.handleNerveMouseLeave}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                <Text
                    text={'MEDIAN NERVE'}
                    x={500}
                    y={320}
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
                                selectOP,
                                removeOP,
                                selectAPB,
                                removeAPB,
                                selectFPB,
                                removeFPB,
                                selectLUM,
                                removeLUM,
                                selectFDP, 
                                removeFDP, 
                                selectFPL, 
                                removeFPL, 
                                selectPQ, 
                                removePQ,
                                selectFDS,
                                removeFDS,
                                selectDB, 
                                removeDB,
                                selectTCB, 
                                removeTCB },
    dispatch); 
};

export default connect(null, mapDispatchToProps)(MedianNerveFour);