import React, { Component } from 'react';
import { Group, Line, Rect, Text, Circle } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectTM, 
        removeTM, 
        selectLD, 
        removeLD, 
        selectSSC, 
        removeSSC, 
        selectSA, 
        removeSA,
        selectPM1,
        removePM1 } from '../../actions/selectBrachialPlexusMuscle';

class C7 extends Component {
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
        this.props.selectTM();
        this.props.selectLD();
        this.props.selectSSC();
        this.props.selectSA();
        this.props.selectPM1();       
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveOneMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeTM();
        this.props.removeLD();
        this.props.removeSSC();
        this.props.removeSA();
        this.props.removePM1();        
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveTwoMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectTM();
        this.props.selectLD();
        this.props.selectSSC();
        this.props.selectPM1();               
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveTwoMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeTM();
        this.props.removeLD();
        this.props.removeSSC();
        this.props.removePM1();                
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveOneClick = () => {
        this.props.selectNerve('C7 Cervical Nerve 1');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleNerveTwoClick = () => {
        this.props.selectNerve('C7 Cervical Nerve 2');
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
                    points={[-65, 275, 50, 275]}
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
                    onClick={this.handleNerveOneClick}
                    onTap={this.handleNerveOneClick}
                />
                <Line
                    points={[50, 275, 250, 275]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveTwoMouseEnter}
                    onMouseLeave={this.handleNerveTwoMouseLeave}
                    onTouchStart={this.handleNerveTwoMouseEnter}
                    onTouchEnd={this.handleNerveTwoMouseLeave}
                    onClick={this.handleNerveTwoClick}
                    onTap={this.handleNerveTwoClick}
                />
                <Circle
                    radius={5}
                    x={50}
                    y={275}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveTwoMouseEnter}
                    onMouseLeave={this.handleNerveTwoMouseLeave}
                    rotation={90}
                    onClick={this.handleNerveTwoClick}
                    onTap={this.handleNerveTwoClick}
                />
                <Rect
                    x={-110}
                    y={255}
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
                    text={'C7'}
                    x={-102}
                    y={260}
                    fontSize={38}
                    fontFamily={'Teko'}
                    fill={'#fff'}
                    opacity={this.state.textRectangleOpacity}
                />
                <Text
                    text={'C7 CERVICAL NERVE'}
                    x={-60}
                    y={225}
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
                                selectTM, 
                                removeTM,
                                selectLD, 
                                removeLD,
                                selectSSC,
                                removeSSC,
                                selectSA, 
                                removeSA,
                                selectPM1,
                                removePM1,
                                setCursorTextOpacity, 
                                removeCursorTextOpacity }, 
    dispatch);
};

export default connect(null, mapDispatchToProps)(C7);