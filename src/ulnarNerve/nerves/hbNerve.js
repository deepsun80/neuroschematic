import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectFDM, removeFDM, selectADM, removeADM, selectODM, removeODM } from '../../actions/selectUlnarMuscle';

class HbNerve extends Component {
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
        this.props.selectADM();
        this.props.selectFDM();
        this.props.selectODM();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveOneMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeADM();
        this.props.removeFDM();
        this.props.removeODM();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveTwoMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
            
        });
        this.props.selectODM();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveTwoMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeODM();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveThreeMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
            
        });
        this.props.selectFDM();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveThreeMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeFDM();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveFourMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
            
        });
        this.props.selectADM();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveFourMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeADM();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleTouchLeave = () => {
        this.setState ({
            textNerveOpacity: 0
        });
        this.props.removeCursorOpacity();
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
        this.props.selectNerve('Hypothenar Branch 1')
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleNerveClickTwo = () => {
        this.props.selectNerve('Hypothenar Branch 2')
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleNerveClickThree = () => {
        this.props.selectNerve('Hypothenar Branch 3')
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleNerveClickFour = () => {
        this.props.selectNerve('Hypothenar Branch 4')
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { ulnarMuscleColorFDM, ulnarMuscleColorADM, ulnarMuscleColorODM, shadowNerveBlur } = this.props;
        return (
            <Group>
                <Line
                    points={[990, 260, 1100, 290, 1175, 385]}
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
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleNerveClickOne}
                    onTap={this.handleNerveClickOne}
                />
                <Line
                    points={[1175, 385, 1250, 410, 1300, 390]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveThreeMouseEnter}
                    onMouseLeave={this.handleNerveThreeMouseLeave}
                    onTouchStart={this.handleNerveThreeMouseEnter}
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleNerveClickFour}
                    onTap={this.handleNerveClickFour}
                />
                <Line
                    points={[1270, 500, 1250, 460, 1200, 415]}
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
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleNerveClickTwo}
                    onTap={this.handleNerveClickTwo}
                />
                <Line
                    points={[1300, 440, 1240, 440, 1175, 385]}
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
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleNerveClickThree}
                    onTap={this.handleNerveClickThree}
                />
                <Circle
                    radius={5}
                    x={1175}
                    y={385}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveOneMouseEnter}
                    onMouseLeave={this.handleNerveOneMouseLeave}
                    onTouchStart={this.handleNerveOneMouseEnter}
                    onTouchEnd={this.handleTouchLeave}
                    rotation={90}
                    onClick={this.handleNerveClickOne}
                    onTap={this.handleNerveClickOne}
                />
                { ulnarMuscleColorODM && 
                    <Circle
                        radius={17}
                        x={1270}
                        y={500}
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
                { !ulnarMuscleColorODM && 
                    <Circle
                        radius={17}
                        x={1270}
                        y={500}
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
                { ulnarMuscleColorADM && 
                    <Circle
                        radius={17}
                        x={1300}
                        y={440}
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
                { !ulnarMuscleColorADM && 
                    <Circle
                        radius={17}
                        x={1300}
                        y={440}
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
                { ulnarMuscleColorFDM && 
                    <Circle
                        radius={17}
                        x={1300}
                        y={390}
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
                { !ulnarMuscleColorFDM && 
                    <Circle
                        radius={17}
                        x={1300}
                        y={390}
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
                <Text
                    text={'HYPOTHENAR BRANCH'}
                    x={1200}
                    y={540}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#446E9B'}
                    opacity={this.state.textNerveOpacity}
                />
                <Text
                    text={'OPPONENS DIGITI MINIMI'}
                    x={1200}
                    y={540}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleOneOpacity}
                />
                <Text
                    text={'FLEXOR DIGITI MINIMI'}
                    x={1200}
                    y={540}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleTwoOpacity}
                />
                <Text
                    text={'ABDUCTOR DIGITI MINIMI'}
                    x={1200}
                    y={540}
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
        ulnarMuscleColorFDM: state.ulnarMuscleColor.FDM,
        ulnarMuscleColorADM: state.ulnarMuscleColor.ADM,
        ulnarMuscleColorODM: state.ulnarMuscleColor.ODM
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, 
                                openNerveModal, 
                                setCursorOpacity, 
                                removeCursorOpacity,
                                setCursorTextOpacity, 
                                removeCursorTextOpacity,
                                selectFDM, 
                                removeFDM, 
                                selectADM, 
                                removeADM, 
                                selectODM, 
                                removeODM }, 
    dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(HbNerve);