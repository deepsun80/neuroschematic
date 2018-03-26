import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity } from '../../actions';
import { selectLUM, removeLUM } from '../../actions/selectMedianMuscle';

class LumBranch extends Component {
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
        this.props.selectLUM();
        this.props.setCursorOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeLUM();
        this.props.removeCursorOpacity();
        document.body.style.cursor = 'default';
    }

    handleMuscleMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleMuscleMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    render() {
        const { medianMuscleColor, shadowNerveBlur } = this.props;        
        return (
            <Group>
                <Line
                    points={[1170, 260, 1240, 250, 1330, 200, 1385, 225]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.4}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveMouseEnter}
                    onMouseLeave={this.handleNerveMouseLeave}
                    onTouchStart={this.handleNerveMouseEnter}
                    onTouchEnd={this.handleNerveMouseLeave}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                { medianMuscleColor && 
                    <Circle
                        radius={17}
                        x={1385}
                        y={225}
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
                { !medianMuscleColor && 
                    <Circle
                        radius={17}
                        x={1385}
                        y={225}
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
                <Text
                    text={'LUMBRICALS I & II'}
                    x={1285}
                    y={150}
                    fontSize={25}
                    fontFamily={'Teko'}
                    fill={'#855499'}
                    opacity={this.state.textNerveOpacity}
                />
            </Group>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        medianMuscleColor: state.medianMuscleColor.LUM
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, selectLUM, removeLUM }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(LumBranch);