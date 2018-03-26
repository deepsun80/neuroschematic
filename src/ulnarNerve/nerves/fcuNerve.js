import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity } from '../../actions';
import { selectFCU, removeFCU } from '../../actions/selectUlnarMuscle';

class FcuNerve extends Component {
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
        this.props.selectFCU();
        this.props.setCursorOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeFCU();
        this.props.removeCursorOpacity();
        document.body.style.cursor = 'default';
    }

    handleTouchLeave = () => {
        this.setState ({
            textNerveOpacity: 0
        });
        this.props.removeCursorOpacity();
        document.body.style.cursor = 'default';
    }

    handleMuscleMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectFCU();        
        document.body.style.cursor = 'pointer';
    }

    handleMuscleMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeFCU();        
        document.body.style.cursor = 'default';
    }

    render() {
        const { ulnarMuscleColor, shadowNerveBlur } = this.props;
        return (
            <Group>
                <Line
                    points={[440, 260, 510, 280, 560, 340]}
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
                    onTouchEnd={this.handleTouchLeave}
                />
                { ulnarMuscleColor && 
                    <Circle
                        radius={17}
                        x={560}
                        y={340}
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
                { !ulnarMuscleColor && 
                    <Circle
                        radius={17}
                        x={560}
                        y={340}
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
                    text={'FLEXOR CARPI ULNARIS'}
                    x={480}
                    y={380}
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
        ulnarMuscleColor: state.ulnarMuscleColor.FCU
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, selectFCU, removeFCU }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(FcuNerve);