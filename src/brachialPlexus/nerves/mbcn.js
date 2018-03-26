import React, { Component } from 'react';
import { Group, Line, Text, Circle } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectBB1, removeBB1 } from '../../actions/selectBrachialPlexusMuscle';

class MBCNerve extends Component {
    constructor() {
        super();
        this.state = {
            textNerveOpacity: 0,
        }
    }

    handleNerveMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectBB1();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removeBB1();
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
        this.props.selectNerve('Medial Brachial Cutaneous Nerve');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { brachialPlexusMuscleColor, shadowNerveBlur } = this.props;        
        return (
            <Group offsetX={-510} offsetY={-330}>
                <Line
                    points={[400, 100, 430, 110, 480, 160, 520, 165]}
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
                        radius={11}
                        x={520}
                        y={165}
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
                { !brachialPlexusMuscleColor && 
                    <Circle
                        radius={11}
                        x={520}
                        y={165}
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
                    text={'MEDIAL BRACHIAL CUTANEOUS NERVE'}
                    x={400}
                    y={200}
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
        brachialPlexusMuscleColor: state.brachialPlexusMuscleColor.BB1
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity, selectBB1, removeBB1 }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(MBCNerve);