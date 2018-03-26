import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity } from '../../actions';
import { selectFDP, removeFDP } from '../../actions/selectMedianMuscle';

class FdpNerve extends Component {
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
        this.props.selectFDP();
        this.props.setCursorOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeFDP();
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
                points={[1000, 360, 1070, 375, 1090, 430]}
                stroke={'#fff'}
                strokeWidth={15}
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
            <Circle
                radius={5}
                x={1000}
                y={360}
                stroke={'#fff'}
                fill={'#fff'}
                strokeWidth={7}
                shadowBlur={shadowNerveBlur}
                shadowColor={'#004691'}
                onMouseEnter={this.handleNerveMouseEnter}
                onMouseLeave={this.handleNerveMouseLeave}
                rotation={90}
            />               
            { medianMuscleColor && 
                <Circle
                    radius={17}
                    x={1090}
                    y={430}
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
                    x={1090}
                    y={430}
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
                text={'FLEXOR DIGITORUM PROFUNDUS I & II'}
                x={960}
                y={480}
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
        medianMuscleColor: state.medianMuscleColor.FDP
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, selectFDP, removeFDP }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(FdpNerve);