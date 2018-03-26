import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity } from '../../actions';
import { selectPT, removePT } from '../../actions/selectMedianMuscle';

class PtNerve extends Component {
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
        this.props.selectPT();
        this.props.setCursorOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePT();
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
            <Group offsetX={20}>
                <Line
                    points={[430, 260, 480, 240, 510, 175, 550, 160]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    tension={0.5}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveMouseEnter}
                    onMouseLeave={this.handleNerveMouseLeave}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                    onTouchStart={this.handleNerveMouseEnter}
                    onTouchEnd={this.handleNerveMouseLeave}
                />               
                { medianMuscleColor && 
                    <Circle
                        radius={17}
                        x={550}
                        y={160}
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
                        x={550}
                        y={160}
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
                    text={'PRONATOR TERES'}
                    x={490}
                    y={100}
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
        medianMuscleColor: state.medianMuscleColor.PT
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, selectPT, removePT }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(PtNerve);