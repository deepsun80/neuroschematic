import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectOP, removeOP, selectAPB, removeAPB, selectFPB, removeFPB } from '../../actions/selectMedianMuscle';

class RmBranch extends Component {
    constructor() {
        super();
        this.state = {
            shadowOpacity: 0,
            textNerveOpacity: 0,
            textMuscleOneOpacity: 0,
            textMuscleTwoOpacity: 0,
            textMuscleThreeOpacity: 0
        }
    }

    handleNerveOneMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectOP();
        this.props.selectAPB();
        this.props.selectFPB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveOneMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeOP();
        this.props.removeAPB();
        this.props.removeFPB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveTwoMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectOP();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveTwoMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeOP();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveThreeMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectAPB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveThreeMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeAPB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveFourMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectFPB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveFourMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeFPB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleMuscleOneMouseEnter = () => {
        this.setState ({
            textMuscleOneOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleMuscleOneMouseLeave = () => {
        this.setState ({
            textMuscleOneOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    handleMuscleTwoMouseEnter = () => {
        this.setState ({
            textMuscleTwoOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleMuscleTwoMouseLeave = () => {
        this.setState ({
            textMuscleTwoOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    handleMuscleThreeMouseEnter = () => {
        this.setState ({
            textMuscleThreeOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleMuscleThreeMouseLeave = () => {
        this.setState ({
            textMuscleThreeOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    handleNerveOneClick = () => {
        this.props.selectNerve('Recurrent Motor Branch 1');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleNerveTwoClick = () => {
        this.props.selectNerve('Recurrent Motor Branch 2');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleNerveThreeClick = () => {
        this.props.selectNerve('Recurrent Motor Branch 3');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleNerveFourClick = () => {
        this.props.selectNerve('Recurrent Motor Branch 4');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { medianMuscleColorOP, medianMuscleColorAPB, medianMuscleColorFPB, shadowNerveBlur } = this.props;      
        return (
            <Group offsetX={-80} offsetY={-20}>
                <Line
                    points={[1180, 110, 1245, 90, 1300, 110]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveFourMouseEnter}
                    onMouseLeave={this.handleNerveFourMouseLeave}
                    onTouchStart={this.handleNerveFourMouseEnter}
                    onTouchEnd={this.handleNerveFourMouseLeave}
                    onClick={this.handleNerveFourClick}
                    onTap={this.handleNerveFourClick}
                />
                <Line
                    points={[1210, 80, 1250, 55, 1280, 25]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveTwoMouseEnter}
                    onMouseLeave={this.handleNerveTwoMouseLeave}
                    onTouchStart={this.handleNerveTwoMouseEnter}
                    onTouchEnd={this.handleNerveTwoMouseLeave}
                    onClick={this.handleNerveTwoClick}
                    onTap={this.handleNerveTwoClick}
                />
                <Line
                    points={[1057, 240, 1130, 210, 1185, 110]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveOneMouseEnter}
                    onMouseLeave={this.handleNerveOneMouseLeave}
                    onTouchStart={this.handleNerveOneMouseEnter}
                    onTouchEnd={this.handleNerveOneMouseLeave}
                    onClick={this.handleNerveOneClick}
                    onTap={this.handleNerveOneClick}
                />
                <Line
                    points={[1185, 110, 1230, 70, 1300, 65]}
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
                    onClick={this.handleNerveThreeClick}
                    onTap={this.handleNerveThreeClick}
                />
                { medianMuscleColorAPB && 
                    <Circle
                        radius={17}
                        x={1300}
                        y={65}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleMuscleTwoMouseEnter}
                        onMouseLeave={this.handleMuscleTwoMouseLeave}
                        onTouchStart={this.handleMuscleTwoMouseEnter}
                        onTouchEnd={this.handleMuscleTwoMouseLeave}
                        rotation={90}
                    />
                }
                { !medianMuscleColorAPB && 
                    <Circle
                        radius={17}
                        x={1300}
                        y={65}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleMuscleTwoMouseEnter}
                        onMouseLeave={this.handleMuscleTwoMouseLeave}
                        onTouchStart={this.handleMuscleTwoMouseEnter}
                        onTouchEnd={this.handleMuscleTwoMouseLeave}
                        rotation={90}
                    />
                }
                { medianMuscleColorFPB && 
                    <Circle
                        radius={17}
                        x={1300}
                        y={110}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleMuscleThreeMouseEnter}
                        onMouseLeave={this.handleMuscleThreeMouseLeave}
                        onTouchStart={this.handleMuscleThreeMouseEnter}
                        onTouchEnd={this.handleMuscleThreeMouseLeave}
                        rotation={90}
                    />
                }
                { !medianMuscleColorFPB && 
                    <Circle
                        radius={17}
                        x={1300}
                        y={110}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleMuscleThreeMouseEnter}
                        onMouseLeave={this.handleMuscleThreeMouseLeave}
                        onTouchStart={this.handleMuscleThreeMouseEnter}
                        onTouchEnd={this.handleMuscleThreeMouseLeave}
                        rotation={90}
                    />
                }
                { medianMuscleColorOP && 
                    <Circle
                        radius={17}
                        x={1280}
                        y={25}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleMuscleOneMouseEnter}
                        onMouseLeave={this.handleMuscleOneMouseLeave}
                        onTouchStart={this.handleMuscleOneMouseEnter}
                        onTouchEnd={this.handleMuscleOneMouseLeave}
                        rotation={90}
                    />
                }
                { !medianMuscleColorOP && 
                    <Circle
                        radius={17}
                        x={1280}
                        y={25}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleMuscleOneMouseEnter}
                        onMouseLeave={this.handleMuscleOneMouseLeave}
                        onTouchStart={this.handleMuscleOneMouseEnter}
                        onTouchEnd={this.handleMuscleOneMouseLeave}
                        rotation={90}
                    />
                }
                <Circle
                    radius={5}
                    x={1185}
                    y={110}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveMouseEnter}
                    onMouseLeave={this.handleNerveMouseLeave}
                    rotation={90}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                <Text
                    text={'RECURRENT MOTOR BRANCH'}
                    x={1120}
                    y={-40}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#446E9B'}
                    opacity={this.state.textNerveOpacity}
                />
                <Text
                    text={'ABDUCTOR POLLICIS BREVIS'}
                    x={1120}
                    y={-40}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleOneOpacity}
                />
                <Text
                    text={'1/2 FLEXOR POLLICIS BREVIS (SUPERFICIAL HEAD)'}
                    x={967}
                    y={-40}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleTwoOpacity}
                />
                <Text
                    text={'OPPONENS POLLICIS'}
                    x={1178}
                    y={-40}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleThreeOpacity}
                />
            </Group>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        medianMuscleColorOP: state.medianMuscleColor.OP,
        medianMuscleColorAPB: state.medianMuscleColor.APB,
        medianMuscleColorFPB: state.medianMuscleColor.FPB
    }
}

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
                                removeFPB }, 
    dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(RmBranch);