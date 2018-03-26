import React, { Component } from 'react';
import { Group, Line, Rect, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectPM2, 
    removePM2, 
    selectBB1, 
    removeBB1, 
    selectBB2, 
    removeBB2,
    selectTM, 
    removeTM,
    selectLD, 
    removeLD,
    selectSSC,
    removeSSC,
    selectINT,
    removeINT } from '../../actions/selectBrachialPlexusMuscle';

class T1 extends Component {
    constructor() {
        super();
        this.state = {
            textNerveOpacity: 0
        }
    }

    handleNerveOneMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectPM2();
        this.props.selectBB1();
        this.props.selectBB2();
        this.props.selectTM();
        this.props.selectLD();
        this.props.selectSSC();
        this.props.selectINT();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveOneMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePM2();
        this.props.removeBB1();
        this.props.removeBB2();
        this.props.removeTM();
        this.props.removeLD();
        this.props.removeSSC();
        this.props.removeINT();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveTwoMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectPM2();
        this.props.selectBB1();
        this.props.selectBB2();
        this.props.selectTM();
        this.props.selectLD();
        this.props.selectSSC();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveTwoMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePM2();
        this.props.removeBB1();
        this.props.removeBB2();
        this.props.removeTM();
        this.props.removeLD();
        this.props.removeSSC();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveClickOne = () => {
        this.props.selectNerve('T1 Thoracic Nerve 1');
        this.props.openNerveModal();
    }

    handleNerveClickTwo = () => {
        this.props.selectNerve('T1 Thoracic Nerve 2');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { shadowNerveBlur } = this.props;        
        
        return (
            <Group offsetY={-330}>
                <Line
                    points={[-65, 195, 50, 195, 110, 185, 150, 165]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.4}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveOneMouseEnter}
                    onMouseLeave={this.handleNerveOneMouseLeave}
                    onTouchStart={this.handleNerveOneMouseEnter}
                    onTouchEnd={this.handleNerveOneMouseLeave}
                    onClick={this.handleNerveClickOne}
                    onTap={this.handleNerveClickOne}
                />
                <Line
                    points={[150, 165, 205, 115, 250, 100]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveTwoMouseEnter}
                    onMouseLeave={this.handleNerveTwoMouseLeave}
                    onTouchStart={this.handleNerveTwoMouseEnter}
                    onTouchEnd={this.handleNerveTwoMouseLeave}
                    onClick={this.handleNerveClickTwo}
                    onTap={this.handleNerveClickTwo}
                />
                <Rect
                    x={-110}
                    y={175}
                    width={45}
                    height={45}
                    fillLinearGradientEndPointY={60}
                    fillLinearGradientStartPointY={0}
                    fillLinearGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                    stroke={'#6C93BE'}
                    strokeWidth={4}
                    lineJoin={'bevel'}
                />
                <Text
                    text={'T1'}
                    x={-99}
                    y={180}
                    fontSize={38}
                    fontFamily={'Teko'}
                    fill={'#fff'}
                    opacity={this.state.textRectangleOpacity}
                />
                <Text
                    text={'T1 THORACIC NERVE'}
                    x={-60}
                    y={135}
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
                                selectPM2,
                                removePM2,
                                selectBB1, 
                                removeBB1, 
                                selectBB2,
                                removeBB2,
                                selectTM, 
                                removeTM,
                                selectLD, 
                                removeLD,
                                selectSSC,
                                removeSSC,
                                selectINT,
                                removeINT }, 
    dispatch); 
};

export default connect(null, mapDispatchToProps)(T1);