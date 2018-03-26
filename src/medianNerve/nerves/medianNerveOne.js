import React, { Component } from 'react';
import { Group, Line, Rect, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
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
    selectPL,
    removePL,
    selectFCR,
    removeFCR,
    selectPT,
    removePT,
    selectDB, 
    removeDB,
    selectTCB, 
    removeTCB } from '../../actions/selectMedianMuscle';

class MedianNerveOne extends Component {
    constructor() {
        super();
        this.state = {
            shadowOpacity: 0,
            rectangleFillColor: [0, '#6A91BC', 0.3, '#3F658F'],
            textRectangleOpacity: 0,
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
        this.props.selectPL();
        this.props.selectFCR();
        this.props.selectPT();
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
        this.props.removePL();
        this.props.removeFCR();
        this.props.removePT();
        this.props.removeDB();
        this.props.removeTCB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleRectangleMouseEnter = () => {
        this.setState ({
            rectangleFillColor: [0, '#4a81bd', 0.3, '#20548e'],
            textRectangleOpacity: 1
        });
        document.body.style.cursor = 'pointer';
    }

    handleRectangleMouseLeave = () => {
        this.setState ({
            rectangleFillColor: [0, '#6A91BC', 0.3, '#3F658F'],
            textRectangleOpacity: 0           
        });
        document.body.style.cursor = 'default';
    }

    handleRectangleClickDown = () => {
        this.setState({
            shadowOpacity: 15
        });
    };
    
    handleRectangleClickUp = () => {
        this.setState({
            shadowOpacity: 0
        });
        this.props.push('/brachial-plexus');
    };

    handleNerveClick = () => {
        this.props.selectNerve('Median Nerve 1');
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
                    points={[10, 260, 410, 260]}
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
                <Rect
                    x={-110}
                    y={245}
                    width={120}
                    height={30}
                    fillLinearGradientEndPointY={60}
                    fillLinearGradientStartPointY={0}
                    fillLinearGradientColorStops={this.state.rectangleFillColor}
                    onMouseEnter={this.handleRectangleMouseEnter}
                    onMouseLeave={this.handleRectangleMouseLeave}
                    onTouchStart={this.handleRectangleMouseEnter}
                    onTouchEnd={this.handleRectangleMouseLeave}
                    shadowBlur={this.state.shadowOpacity}
                    shadowColor={'#004691'}
                    onMouseDown={this.handleRectangleClickDown}
                    onMouseUp={this.handleRectangleClickUp}
                    onTap={this.handleRectangleClickUp}
                    stroke={'#6C93BE'}
                    strokeWidth={4}
                    lineJoin={'bevel'}
                />
                <Text
                    text={'To Brachial Plexus'}
                    x={-110}
                    y={200}
                    fontSize={23}
                    fontFamily={'Teko'}
                    fill={'#446E9B'}
                    opacity={this.state.textRectangleOpacity}
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
                                push,
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
                                selectPL,
                                removePL,
                                selectFCR,
                                removeFCR,
                                selectPT,
                                removePT,
                                selectDB, 
                                removeDB,
                                selectTCB, 
                                removeTCB }, 
    dispatch); 
};

export default connect(null, mapDispatchToProps)(MedianNerveOne);