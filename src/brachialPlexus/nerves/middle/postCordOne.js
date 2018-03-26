import React, { Component } from 'react';
import { Group, Line, Text, Circle } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, setCursorTextOpacity, removeCursorTextOpacity } from '../../../actions';
import { selectTM, removeTM, selectLD, removeLD, selectSSC, removeSSC } from '../../../actions/selectBrachialPlexusMuscle';

class PostCordOne extends Component {
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
        this.props.removeTM();
        this.props.removeLD();
        this.props.removeSSC();
        this.props.removeCursorOpacity();
        this.props.removeCursorTextOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveClick = () => {
        this.props.selectNerve('Posterior Cord 1');
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
                    points={[730, 275, 820, 275]}
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
                    x={730}
                    y={275}
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
                    text={'POSTERIOR CORD'}
                    x={850}
                    y={340}
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
                                selectTM, 
                                removeTM,
                                selectLD, 
                                removeLD,
                                selectSSC,
                                removeSSC  },
    dispatch); 
};

export default connect(null, mapDispatchToProps)(PostCordOne);