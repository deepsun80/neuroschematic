import React, { Component } from 'react';
import { Group, Line, Text, Circle } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectSS, removeSS, selectIS, removeIS, selectAJGJ, removeAJGJ } from '../../actions/selectBrachialPlexusMuscle';

class SuperSNerve extends Component {
    constructor() {
        super();
        this.state = {
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
        this.props.selectSS();
        this.props.selectIS();
        this.props.selectAJGJ();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveOneMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeSS();
        this.props.removeIS();
        this.props.removeAJGJ();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveTwoMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectSS();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveTwoMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeSS();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveThreeMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectAJGJ();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveThreeMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeAJGJ();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveFourMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectIS();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveFourMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeIS();
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

    handleNerveClickOne = () => {
        this.props.selectNerve('Suprascapular Nerve 1');
        this.props.openNerveModal();
    }

    handleNerveClickTwo = () => {
        this.props.selectNerve('Suprascapular Nerve 2');
        this.props.openNerveModal();
    }

    handleNerveClickThree = () => {
        this.props.selectNerve('Suprascapular Nerve 3');
        this.props.openNerveModal();
    }

    handleNerveClickFour = () => {
        this.props.selectNerve('Suprascapular Nerve 4');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { brachialPlexusMuscleColorSS, brachialPlexusMuscleColorIS, brachialPlexusMuscleColorAJGJ, shadowNerveBlur } = this.props;        
        return (
            <Group offsetX={90}>
                <Line
                    points={[550, 20, 580, 30, 640, 65, 680, 60]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.4}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveThreeMouseEnter}
                    onMouseLeave={this.handleNerveThreeMouseLeave}
                    onTouchStart={this.handleNerveThreeMouseEnter}
                    onTouchEnd={this.handleNerveThreeMouseLeave}
                    onClick={this.handleNerveClickThree}
                    onTap={this.handleNerveClickThree}
                />
                <Line
                    points={[550, 20, 580, 10, 640, -25, 680, -20]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.4}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveTwoMouseEnter}
                    onMouseLeave={this.handleNerveTwoMouseLeave}
                    onTouchStart={this.handleNerveTwoMouseEnter}
                    onTouchEnd={this.handleNerveTwoMouseLeave}
                    onClick={this.handleNerveClickTwo}
                    onTap={this.handleNerveClickTwo}
                />
                <Line
                    points={[400, 100, 440, 80, 480, 30, 550, 20]}
                    stroke={'#fff'}
                    strokeWidth={12}
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
                    points={[550, 20, 820, 20]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.4}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveFourMouseEnter}
                    onMouseLeave={this.handleNerveFourMouseLeave}
                    onTouchStart={this.handleNerveFourMouseEnter}
                    onTouchEnd={this.handleNerveFourMouseLeave}
                    onClick={this.handleNerveClickFour}
                    onTap={this.handleNerveClickFour}
                />
                <Circle
                    radius={5}
                    x={550}
                    y={20}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveOneMouseEnter}
                    onMouseLeave={this.handleNerveOneMouseLeave}
                    rotation={90}
                    onClick={this.handleNerveClickOne}
                    onTap={this.handleNerveClickOne}
                />
                { brachialPlexusMuscleColorSS && 
                    <Circle
                        radius={17}
                        x={680}
                        y={-20}
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
                { !brachialPlexusMuscleColorSS && 
                    <Circle
                        radius={17}
                        x={680}
                        y={-20}
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
                { brachialPlexusMuscleColorAJGJ && 
                    <Circle
                        radius={11}
                        x={680}
                        y={60}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleNerveThreeMouseEnter}
                        onMouseLeave={this.handleNerveThreeMouseLeave}
                        onTouchStart={this.handleNerveThreeMouseEnter}
                        onTouchEnd={this.handleTouchLeave}
                        rotation={90}
                        onClick={this.handleNerveClickThree}
                        onTap={this.handleNerveClickThree}
                    />
                }
                { !brachialPlexusMuscleColorAJGJ && 
                    <Circle
                        radius={11}
                        x={680}
                        y={60}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleNerveThreeMouseEnter}
                        onMouseLeave={this.handleNerveThreeMouseLeave}
                        onTouchStart={this.handleNerveThreeMouseEnter}
                        onTouchEnd={this.handleTouchLeave}
                        rotation={90}
                        onClick={this.handleNerveClickThree}
                        onTap={this.handleNerveClickThree}
                    />
                }              
                <Circle
                    radius={5}
                    x={400}
                    y={100}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveOneMouseEnter}
                    onMouseLeave={this.handleNerveOneMouseLeave}
                    rotation={90}
                    onClick={this.handleNerveClickOne}
                    onTap={this.handleNerveClickOne}
                />
                { brachialPlexusMuscleColorIS && 
                    <Circle
                        radius={17}
                        x={820}
                        y={20}
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
                { !brachialPlexusMuscleColorIS && 
                    <Circle
                        radius={17}
                        x={820}
                        y={20}
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
                <Text
                    text={'SUPRASCAPULAR NERVE'}
                    x={860}
                    y={8}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#446E9B'}
                    opacity={this.state.textNerveOpacity}
                />
                <Text
                    text={'SUPRASPINATUS'}
                    x={860}
                    y={8}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleTwoOpacity}
                />
                <Text
                    text={'INFRASPINATUS'}
                    x={860}
                    y={8}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleOneOpacity}
                />
            </Group>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        brachialPlexusMuscleColorSS: state.brachialPlexusMuscleColor.SS,
        brachialPlexusMuscleColorIS: state.brachialPlexusMuscleColor.IS,
        brachialPlexusMuscleColorAJGJ: state.brachialPlexusMuscleColor.AJGJ              
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, 
                                openNerveModal, 
                                setCursorOpacity, 
                                removeCursorOpacity,
                                setCursorTextOpacity, 
                                removeCursorTextOpacity,
                                selectSS,
                                removeSS,
                                selectIS,
                                removeIS,
                                selectAJGJ,
                                removeAJGJ }, 
    dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(SuperSNerve);