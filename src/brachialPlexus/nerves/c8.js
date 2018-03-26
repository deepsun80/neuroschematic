import React, { Component } from 'react';
import { Group, Line, Rect, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../actions';
import { selectPM2, 
    removePM2, 
    selectBB1, 
    removeBB1, 
    selectBB2, 
    removeBB2,
    selectTM, 
    removeTM,
    selectLD, 
    removeLD,
    selectSSC,
    removeSSC } from '../../actions/selectBrachialPlexusMuscle';

class C8 extends Component {
    constructor() {
        super();
        this.state = {
            textNerveOpacity: 0
        }
    }

    handleNerveMouseEnter = () => {
        this.setState ({
            textNerveOpacity: 1            
        });
        this.props.selectPM2();
        this.props.selectBB1();
        this.props.selectBB2();
        this.props.selectTM();
        this.props.selectLD();
        this.props.selectSSC();
        this.props.setCursorOpacity();
        this.props.setCursorTextOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.setState ({
            textNerveOpacity: 0            
        });
        this.props.removePM2();
        this.props.removeBB1();
        this.props.removeBB2();
        this.props.removeTM();
        this.props.removeLD();
        this.props.removeSSC();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveClick = () => {
        this.props.selectNerve('C8 Cervical Nerve');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { shadowNerveBlur } = this.props;
        
        return (
            <Group offsetY={-330}>
                <Line
                    points={[-65, 30, 50, 30, 125, 43, 205, 100, 250, 100]}
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
                <Rect
                    x={-110}
                    y={10}
                    width={45}
                    height={45}
                    fillLinearGradientEndPointY={60}
                    fillLinearGradientStartPointY={0}
                    fillLinearGradientColorStops={[0, '#6A91BC', 0.3, '#3F658F']}
                    stroke={'#6C93BE'}
                    strokeWidth={4}
                    lineJoin={'bevel'}
                />
                <Text
                    text={'C8'}
                    x={-102}
                    y={15}
                    fontSize={38}
                    fontFamily={'Teko'}
                    fill={'#fff'}
                    opacity={this.state.textRectangleOpacity}
                />
                <Text
                    text={'C8 CERVICAL NERVE'}
                    x={-60}
                    y={-25}
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
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, 
                                openNerveModal, 
                                setCursorOpacity, 
                                removeCursorOpacity,
                                setCursorTextOpacity, 
                                removeCursorTextOpacity,
                                selectPM2,
                                removePM2,
                                selectBB1, 
                                removeBB1, 
                                selectBB2,
                                removeBB2,
                                selectTM, 
                                removeTM,
                                selectLD, 
                                removeLD,
                                selectSSC,
                                removeSSC }, 
    dispatch); 
};

export default connect(null, mapDispatchToProps)(C8);