import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectPB, removePB, selectDI, removeDI, selectPI, removePI, selectLB, removeLB, selectAP, removeAP, selectFPB, removeFPB } from '../../actions/selectUlnarMuscle';

class DmbNerve extends Component {
    constructor() {
        super();
        this.state = {
            shadowOpacity: 0,
            textNerveOpacity: 0,
            textMuscleOneOpacity: 0,
            textMuscleTwoOpacity: 0,
            textMuscleThreeOpacity: 0,
            textMuscleFourOpacity: 0,
            textMuscleFiveOpacity: 0,
            textMuscleSixOpacity: 0,
        }
    }
    //Nerves
    handleNerveOneMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectPB(); 
        this.props.selectDI(); 
        this.props.selectPI(); 
        this.props.selectLB(); 
        this.props.selectAP(); 
        this.props.selectFPB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveOneMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePB(); 
        this.props.removeDI(); 
        this.props.removePI(); 
        this.props.removeLB(); 
        this.props.removeAP(); 
        this.props.removeFPB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveTwoMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectPB(); 
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveTwoMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveThreeMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectDI();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveThreeMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeDI(); 
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveFourMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectPI();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveFourMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePI();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveFiveMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectLB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveFiveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeLB();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveSixMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectAP();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveSixMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeAP();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveSevenMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectFPB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveSevenMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeFPB();
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
    
    // Muscles
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

    handleMuscleFourMouseEnter = () => {
        this.setState ({
            textMuscleFourOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleMuscleFourMouseLeave = () => {
        this.setState ({
            textMuscleFourOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    handleMuscleFiveMouseEnter = () => {
        this.setState ({
            textMuscleFiveOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleMuscleFiveMouseLeave = () => {
        this.setState ({
            textMuscleFiveOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    handleMuscleSixMouseEnter = () => {
        this.setState ({
            textMuscleSixOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleMuscleSixMouseLeave = () => {
        this.setState ({
            textMuscleSixOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    handleNerveClick = () => {
        this.props.selectNerve('Deep Motor Branch 1');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleMuscleOneClick = () => {
        this.props.selectNerve('Deep Motor Branch 2');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleMuscleTwoClick = () => {
        this.props.selectNerve('Deep Motor Branch 3');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleMuscleThreeClick = () => {
        this.props.selectNerve('Deep Motor Branch 4');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleMuscleFourClick = () => {
        this.props.selectNerve('Deep Motor Branch 5');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleMuscleFiveClick = () => {
        this.props.selectNerve('Deep Motor Branch 6');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    handleMuscleSixClick = () => {
        this.props.selectNerve('Deep Motor Branch 7');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { ulnarMuscleColorPB,
                ulnarMuscleColorDI,
                ulnarMuscleColorPI,
                ulnarMuscleColorLB,
                ulnarMuscleColorAP,
                ulnarMuscleColorFPB,
                shadowNerveBlur  } = this.props;     
        return (
            <Group>
                <Line
                    points={[1312, 285, 1340, 350, 1385, 360]}
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
                    onClick={this.handleMuscleOneClick}
                    onTap={this.handleMuscleOneClick}
                />
                <Line
                    points={[1280, 260, 1300, 270, 1340, 315, 1380, 320]}
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
                    onClick={this.handleMuscleTwoClick}
                    onTap={this.handleMuscleTwoClick}
                />
                <Line
                    points={[1280, 260, 1300, 265, 1340, 283, 1370, 275]}
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
                    onClick={this.handleMuscleThreeClick}
                    onTap={this.handleMuscleThreeClick}
                />
                <Line
                    points={[1312, 235, 1340, 170, 1385, 160]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveSevenMouseEnter}
                    onMouseLeave={this.handleNerveSevenMouseLeave}
                    onTouchStart={this.handleNerveSevenMouseEnter}
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleMuscleSixClick}
                    onTap={this.handleMuscleSixClick}
                />
                <Line
                    points={[1280, 260, 1300, 250, 1340, 205, 1380, 200]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveSixMouseEnter}
                    onMouseLeave={this.handleNerveSixMouseLeave}
                    onTouchStart={this.handleNerveSixMouseEnter}
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleMuscleFiveClick}
                    onTap={this.handleMuscleFiveClick}
                />
                <Line
                    points={[1280, 260, 1300, 255, 1340, 237, 1370, 245]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveFiveMouseEnter}
                    onMouseLeave={this.handleNerveFiveMouseLeave}
                    onTouchStart={this.handleNerveFiveMouseEnter}
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleMuscleFourClick}
                    onTap={this.handleMuscleFourClick}
                />
                <Line
                    points={[990, 260, 1280, 260]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveOneMouseEnter}
                    onMouseLeave={this.handleNerveOneMouseLeave}
                    onTouchStart={this.handleNerveOneMouseEnter}
                    onTouchEnd={this.handleTouchLeave}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                <Circle
                    radius={5}
                    x={1280}
                    y={260}
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
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                { ulnarMuscleColorLB && 
                    <Circle
                        radius={17}
                        x={1370}
                        y={238}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleMuscleFourMouseEnter}
                        onMouseLeave={this.handleMuscleFourMouseLeave}
                        onTouchStart={this.handleMuscleFourMouseEnter}
                        onTouchEnd={this.handleMuscleFourMouseLeave}
                        rotation={90}
                    />
                }
                { !ulnarMuscleColorLB && 
                    <Circle
                        radius={17}
                        x={1370}
                        y={238}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleMuscleFourMouseEnter}
                        onMouseLeave={this.handleMuscleFourMouseLeave}
                        onTouchStart={this.handleMuscleFourMouseEnter}
                        onTouchEnd={this.handleMuscleFourMouseLeave}
                        rotation={90}
                    />
                }
                { ulnarMuscleColorPI && 
                    <Circle
                        radius={17}
                        x={1370}
                        y={281}
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
                { !ulnarMuscleColorPI && 
                    <Circle
                        radius={17}
                        x={1370}
                        y={281}
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
                { ulnarMuscleColorDI && 
                    <Circle
                        radius={17}
                        x={1380}
                        y={323}
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
                { !ulnarMuscleColorDI && 
                    <Circle
                        radius={17}
                        x={1380}
                        y={323}
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
                { ulnarMuscleColorPB && 
                    <Circle
                        radius={17}
                        x={1390}
                        y={363}
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
                { !ulnarMuscleColorPB && 
                    <Circle
                        radius={17}
                        x={1390}
                        y={363}
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
                { ulnarMuscleColorFPB && 
                    <Circle
                        radius={17}
                        x={1390}
                        y={157}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleMuscleSixMouseEnter}
                        onMouseLeave={this.handleMuscleSixMouseLeave}
                        onTouchStart={this.handleMuscleSixMouseEnter}
                        onTouchEnd={this.handleMuscleSixMouseLeave}
                        rotation={90}
                    />
                }
                { !ulnarMuscleColorFPB && 
                    <Circle
                        radius={17}
                        x={1390}
                        y={157}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleMuscleSixMouseEnter}
                        onMouseLeave={this.handleMuscleSixMouseLeave}
                        onTouchStart={this.handleMuscleSixMouseEnter}
                        onTouchEnd={this.handleMuscleSixMouseLeave}
                        rotation={90}
                    />
                }
                { ulnarMuscleColorAP && 
                    <Circle
                        radius={17}
                        x={1380}
                        y={198}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleMuscleFiveMouseEnter}
                        onMouseLeave={this.handleMuscleFiveMouseLeave}
                        onTouchStart={this.handleMuscleFiveMouseEnter}
                        onTouchEnd={this.handleMuscleFiveMouseLeave}
                        rotation={90}
                    />
                }
                { !ulnarMuscleColorAP && 
                    <Circle
                        radius={17}
                        x={1380}
                        y={198}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleMuscleFiveMouseEnter}
                        onMouseLeave={this.handleMuscleFiveMouseLeave}
                        onTouchStart={this.handleMuscleFiveMouseEnter}
                        onTouchEnd={this.handleMuscleFiveMouseLeave}
                        rotation={90}
                    />
                }
                <Text
                    text={'DEEP MOTOR BRANCH'}
                    x={1250}
                    y={105}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#446E9B'}
                    opacity={this.state.textNerveOpacity}
                />
                <Text
                    text={'PALMARIS BREVIS'}
                    x={1275}
                    y={105}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleOneOpacity}
                />
                <Text
                    text={'4 DORSAL INTEROSSEI'}
                    x={1247}
                    y={105}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleTwoOpacity}
                />
                <Text
                    text={'3 PALMAR INTEROSSEI'}
                    x={1247}
                    y={105}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleThreeOpacity}
                />
                <Text
                    text={'LUMBRICALS III & IV'}
                    x={1258}
                    y={105}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleFourOpacity}
                />
                <Text
                    text={'ADDUCTOR POLLICIS'}
                    x={1258}
                    y={105}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleFiveOpacity}
                />
                <Text
                    text={'1/2 FLEXOR POLLICIS BREVIS (DEEP HEAD)'}
                    x={1103}
                    y={105}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleSixOpacity}
                />
            </Group>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        ulnarMuscleColorPB: state.ulnarMuscleColor.PB,
        ulnarMuscleColorDI: state.ulnarMuscleColor.DI,
        ulnarMuscleColorPI: state.ulnarMuscleColor.PI,
        ulnarMuscleColorLB: state.ulnarMuscleColor.LB,
        ulnarMuscleColorAP: state.ulnarMuscleColor.AP,
        ulnarMuscleColorFPB: state.ulnarMuscleColor.FPB      
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, 
                                openNerveModal, 
                                setCursorOpacity, 
                                removeCursorOpacity,
                                setCursorTextOpacity, 
                                removeCursorTextOpacity,
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
                                removeFPB },
     dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(DmbNerve);