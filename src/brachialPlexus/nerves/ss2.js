import React, { Component } from 'react';
import { Group, Line, Text, Circle } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectTM, removeTM } from '../../actions/selectBrachialPlexusMuscle';

class SubSNerveTwo extends Component {
    constructor() {
        super();
        this.state = {
            textNerveOpacity: 0,
            textMuscleOpacity: 0
        }
    }

    handleNerveMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectTM();        
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeTM();        
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleMuscleMouseEnter = () => {
        this.setState ({
            textMuscleOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleMuscleMouseLeave = () => {
        this.setState ({
            textMuscleOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    handleNerveClick = () => {
        this.props.selectNerve('Lower Subscapular Nerve');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { brachialPlexusMuscleColor, shadowNerveBlur } = this.props;        
        return (
            <Group offsetX={-600} offsetY={-175}>
                <Line
                    points={[400, 100, 430, 90, 480, 40, 520, 35]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveMouseEnter}
                    onMouseLeave={this.handleNerveMouseLeave}
                    onTouchStart={this.handleNerveMouseEnter}
                    onTouchEnd={this.handleNerveMouseLeave}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                { brachialPlexusMuscleColor && 
                    <Circle
                        radius={17}
                        x={520}
                        y={35}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleMuscleMouseEnter}
                        onMouseLeave={this.handleMuscleMouseLeave}
                        onTouchStart={this.handleNerveMouseEnter}
                        onTouchEnd={this.handleMuscleMouseLeave}
                        rotation={90}
                    />
                }
                { !brachialPlexusMuscleColor && 
                    <Circle
                        radius={17}
                        x={520}
                        y={35}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleMuscleMouseEnter}
                        onMouseLeave={this.handleMuscleMouseLeave}
                        onTouchStart={this.handleNerveMouseEnter}
                        onTouchEnd={this.handleMuscleMouseLeave}
                        rotation={90}
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
                    onMouseEnter={this.handleNerveMouseEnter}
                    onMouseLeave={this.handleNerveMouseLeave}
                    rotation={90}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                <Text
                    text={'LOWER SUBSCAPULAR NERVE'}
                    x={323}
                    y={-20}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#446E9B'}
                    opacity={this.state.textNerveOpacity}
                />
                <Text
                    text={'SUBSCAPULARIS'}
                    x={285}
                    y={-20}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleOpacity}
                />
                <Text
                    text={'TERES MAJOR'}
                    x={450}
                    y={-20}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textMuscleOpacity}
                />
            </Group>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        brachialPlexusMuscleColor: state.brachialPlexusMuscleColor.TM
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity, selectTM, removeTM }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(SubSNerveTwo);