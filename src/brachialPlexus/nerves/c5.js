import React, { Component } from 'react';
import { Group, Line, Rect, Text, Circle } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectPM1, 
        removePM1,
        selectSC, 
        removeSC, 
        selectSS, 
        removeSS, 
        selectIS,
        removeIS, 
        selectAJGJ, 
        removeAJGJ,
        selectRH, 
        removeRH,
        selectTM, 
        removeTM,
        selectLD, 
        removeLD,
        selectSSC,
        removeSSC,
        selectSA, 
        removeSA } from '../../actions/selectBrachialPlexusMuscle';

class C5 extends Component {
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
        this.props.selectPM1();
        this.props.selectSC();
        this.props.selectSS(); 
        this.props.selectIS();
        this.props.selectAJGJ();
        this.props.selectRH();
        this.props.selectTM();
        this.props.selectLD(); 
        this.props.selectSSC();
        this.props.selectSA();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveOneMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePM1();
        this.props.removeSC();
        this.props.removeSS(); 
        this.props.removeIS(); 
        this.props.removeAJGJ();
        this.props.removeRH();
        this.props.removeTM();
        this.props.removeLD(); 
        this.props.removeSSC();
        this.props.removeSA();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveTwoMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectPM1();
        this.props.selectSC();
        this.props.selectSS(); 
        this.props.selectIS();
        this.props.selectAJGJ();
        this.props.selectRH();
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
        this.props.removePM1();
        this.props.removeSC();
        this.props.removeSS(); 
        this.props.removeIS(); 
        this.props.removeAJGJ();
        this.props.removeRH();
        this.props.removeTM();
        this.props.removeLD(); 
        this.props.removeSSC();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveThreeMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectPM1();
        this.props.selectSC();
        this.props.selectSS(); 
        this.props.selectIS();
        this.props.selectAJGJ();
        this.props.selectTM();
        this.props.selectLD(); 
        this.props.selectSSC();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveThreeMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePM1();
        this.props.removeSC();
        this.props.removeSS(); 
        this.props.removeIS(); 
        this.props.removeAJGJ();
        this.props.removeTM();
        this.props.removeLD(); 
        this.props.removeSSC();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveClickOne = () => {
        this.props.selectNerve('C5 Cervical Nerve 1');
        this.props.openNerveModal();
    }

    handleNerveClickTwo = () => {
        this.props.selectNerve('C5 Cervical Nerve 2');
        this.props.openNerveModal();
    }

    handleNerveClickThree = () => {
        this.props.selectNerve('C5 Cervical Nerve 3');
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
                    points={[-65, 30, 50, 30]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveOneMouseEnter}
                    onMouseLeave={this.handleNerveOneMouseLeave}
                    onTouchStart={this.handleNerveOneMouseEnter}
                    onTouchEnd={this.handleNerveOneMouseLeave}
                    onClick={this.handleNerveClickOne}
                    onTap={this.handleNerveClickOne}
                />
                <Line
                    points={[50, 30, 110, 40, 150, 60]}
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
                <Line
                    points={[150, 60, 205, 95, 250, 100]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveThreeMouseEnter}
                    onMouseLeave={this.handleNerveThreeMouseLeave}
                    onTouchStart={this.handleNerveThreeMouseEnter}
                    onTouchEnd={this.handleNerveThreeMouseLeave}
                    onClick={this.handleNerveClickThree}
                    onTap={this.handleNerveClickThree}
                />
                <Circle
                    radius={5}
                    x={50}
                    y={30}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveTwoMouseEnter}
                    onMouseLeave={this.handleNerveTwoMouseLeave}
                    rotation={90}
                    onClick={this.handleNerveClickOne}
                    onTap={this.handleNerveClickOne}
                />
                <Rect
                    x={-110}
                    y={10}
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
                    text={'C5'}
                    x={-102}
                    y={15}
                    fontSize={38}
                    fontFamily={'Teko'}
                    fill={'#fff'}
                    opacity={this.state.textRectangleOpacity}
                />
                <Text
                    text={'C5 CERVICAL NERVE'}
                    x={-60}
                    y={-30}
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
                                selectPM1, 
                                removePM1,
                                selectSC, 
                                removeSC,
                                selectSS, 
                                removeSS, 
                                selectIS, 
                                removeIS, 
                                selectAJGJ, 
                                removeAJGJ,
                                selectRH, 
                                removeRH,
                                selectTM, 
                                removeTM,
                                selectLD, 
                                removeLD,
                                selectSSC,
                                removeSSC,
                                selectSA,
                                removeSA }, 
    dispatch); 
};

export default connect(null, mapDispatchToProps)(C5);