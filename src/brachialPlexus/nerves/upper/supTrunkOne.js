import React, { Component } from 'react';
import { Group, Line, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../../actions';
import { selectPM1, 
        removePM1, 
        selectSC, 
        removeSC, 
        selectSS, 
        removeSS, 
        selectIS, 
        removeIS, 
        selectAJGJ, 
        removeAJGJ,
        selectTM, 
        removeTM,
        selectLD, 
        removeLD,
        selectSSC,
        removeSSC } from '../../../actions/selectBrachialPlexusMuscle';

class SupTrunkOne extends Component {
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
        this.props.selectPM1();
        this.props.selectSC();
        this.props.selectSS(); 
        this.props.selectIS();
        this.props.selectAJGJ();
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
        this.props.removePM1();
        this.props.removeSC();
        this.props.removeSS(); 
        this.props.removeIS(); 
        this.props.removeAJGJ();
        this.props.removeTM();
        this.props.removeLD();
        this.props.removeSSC();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveClick = () => {
        this.props.selectNerve('Superior Trunk 1');
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
            this.props.openNerveModal();            
        }, 300);
    }

    render() {
        const { shadowNerveBlur } = this.props;        
        
        return (
            <Group>
                <Line
                    points={[250, 100, 310, 100]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#004691'}
                    onMouseEnter={this.handleNerveMouseEnter}
                    onMouseLeave={this.handleNerveMouseLeave}
                    onTouchStart={this.handleNerveMouseEnter}
                    onTouchEnd={this.handleNerveMouseLeave}
                    onClick={this.handleNerveClick}
                    onTap={this.handleNerveClick}
                />
                <Circle
                    radius={5}
                    x={250}
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
                    text={'UPPER TRUNK'}
                    x={350}
                    y={140}
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
                                selectPM1, 
                                removePM1,
                                selectSC, 
                                removeSC,
                                selectSS, 
                                removeSS, 
                                selectIS, 
                                removeIS, 
                                selectAJGJ, 
                                removeAJGJ,
                                selectTM, 
                                removeTM,
                                selectLD, 
                                removeLD,
                                selectSSC,
                                removeSSC }, 
    dispatch); 
};

export default connect(null, mapDispatchToProps)(SupTrunkOne);