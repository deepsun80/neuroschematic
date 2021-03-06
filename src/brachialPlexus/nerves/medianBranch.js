import React, { Component } from 'react';
import { Group, Line, Text, Rect } from 'react-konva';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity } from '../../actions';

class MedianBranch extends Component {
    constructor() {
        super();
        this.state = {          
            rectangleFillColor: [0, '#6A91BC', 0.3, '#3F658F'],
            textRectangleOpacity: 0,
            shadowOpacity: 0            
        }
    }

    handleRectangleMouseEnter = () => {
        this.setState ({
            rectangleFillColor: [0, '#4a81bd', 0.3, '#20548e'],
            textRectangleOpacity: 1
        });
        document.body.style.cursor = 'pointer';
    }

    handleRectangleMouseLeave = () => {
        this.setState ({
            rectangleFillColor: [0, '#6A91BC', 0.3, '#3F658F'],
            textRectangleOpacity: 0           
        });
        document.body.style.cursor = 'default';
    }

    handleRectangleClickDown = () => {
        this.setState({
            shadowOpacity: 15
        });
    };
    
    handleRectangleClickUp = () => {
        this.setState({
            shadowOpacity: 0
        });
        this.props.push('/median-nerve');
    };

    handleNerveMouseEnter = () => {
        this.props.setCursorOpacity();
        document.body.style.cursor = 'pointer';
    }

    handleNerveMouseLeave = () => {
        this.props.removeCursorOpacity();
        document.body.style.cursor = 'default';
    }

    handleNerveClick = () => {
        this.props.setCursorOpacity();
        setTimeout(() => {
            this.props.removeCursorOpacity();            
        }, 300);
    }

    render() {
        const { shadowNerveBlur } = this.props;        
        
        return (
            <Group>
                <Line
                    points={[1085, 430, 1150, 395, 1200, 295, 1260, 275]}
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
                <Line
                    points={[1085, 100, 1150, 135, 1200, 245, 1260, 275]}
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
                <Rect
                    x={1260}
                    y={260}
                    width={120}
                    height={30}
                    fillLinearGradientEndPointY={60}
                    fillLinearGradientStartPointY={0}
                    fillLinearGradientColorStops={this.state.rectangleFillColor}
                    onMouseEnter={this.handleRectangleMouseEnter}
                    onMouseLeave={this.handleRectangleMouseLeave}
                    onTouchStart={this.handleRectangleMouseEnter}
                    onTouchEnd={this.handleRectangleMouseLeave}
                    shadowBlur={this.state.shadowOpacity}
                    shadowColor={'#004691'}
                    onMouseDown={this.handleRectangleClickDown}
                    onMouseUp={this.handleRectangleClickUp}
                    stroke={'#6C93BE'}
                    strokeWidth={4}
                    lineJoin={'bevel'}
                />
                <Text
                    text={'To Median Nerve'}
                    x={1263}
                    y={225}
                    fontSize={23}
                    fontFamily={'Teko'}
                    fill={'#446E9B'}
                    opacity={this.state.textRectangleOpacity}
                />
            </Group>
        );
    }
}

//-----Redux Functions-----
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ selectNerve, openNerveModal, push, setCursorOpacity, removeCursorOpacity }, dispatch); 
};

export default connect(null, mapDispatchToProps)(MedianBranch);