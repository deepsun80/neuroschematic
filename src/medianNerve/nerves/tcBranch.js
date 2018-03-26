import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectTCB, removeTCB } from '../../actions/selectMedianMuscle';

class TcBranch extends Component {
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
        this.props.selectTCB();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeTCB();
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

    handleNerveClick = () => {
        this.props.selectNerve('Thenar Cutaneous Branch');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { medianMuscleColor, shadowNerveBlur } = this.props;

        return (
            <Group offsetX={-40}>
                <Line
                    points={[880, 260, 980, 230, 1060, 100, 1150, 70]}
                    stroke={'#fff'}
                    strokeWidth={15}
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
                { medianMuscleColor && 
                    <Circle
                        radius={11}
                        x={1150}
                        y={70}
                        stroke={'#be6c6c'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#b76e58', 0.3, '#aa4628']}
                        onMouseEnter={this.handleNerveMouseEnter}
                        onMouseLeave={this.handleNerveMouseLeave}
                        onTouchStart={this.handleNerveMouseEnter}
                        onTouchEnd={this.handleTouchLeave}
                        rotation={90}
                        onClick={this.handleNerveClick}
                        onTap={this.handleNerveClick}
                    />
                }
                { !medianMuscleColor && 
                    <Circle
                        radius={11}
                        x={1150}
                        y={70}
                        stroke={'#6C93BE'}
                        strokeWidth={5}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndRadius={30}
                        fillRadialGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                        onMouseEnter={this.handleNerveMouseEnter}
                        onMouseLeave={this.handleNerveMouseLeave}
                        onTouchStart={this.handleNerveMouseEnter}
                        onTouchEnd={this.handleTouchLeave}
                        rotation={90}
                        onClick={this.handleNerveClick}
                        onTap={this.handleNerveClick}
                    />
                }
                <Text
                    text={'THENAR CUTANEOUS BRANCH'}
                    x={1040}
                    y={0}
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
const mapStateToProps = (state) => {
    return {
        medianMuscleColor: state.medianMuscleColor.TCB
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity, selectTCB, removeTCB }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(TcBranch);