import React, { Component } from 'react';
import { Group, Text, Rect } from 'react-konva';

class PsEntrapment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nerveColor: '#004691',
            shadowOpacity: 0,
            textOpacity: 0,
            rectangleFillColor: [0, '#6A91BC', 0.3, '#3F658F']            
        }
    }

    handleRectangleMouseEnter = () => {
        this.setState ({
            rectangleFillColor: [0, '#4a81bd', 0.3, '#20548e'],
            textRectangleOpacity: 1,
            textOpacity: 1            
        });
        document.body.style.cursor = 'pointer';
    }

    handleRectangleMouseLeave = () => {
        this.setState ({
            rectangleFillColor: [0, '#6A91BC', 0.3, '#3F658F'],
            textRectangleOpacity: 0,
            textOpacity: 0            
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
    };

    handlePointClick = () => {
        this.setState ({
            textOpacity: 1           
        });        
        setTimeout(() => {
            this.setState ({
                textOpacity: 0           
            });            
        }, 1500);
    }

    render() {
        return (
            <Group>
                <Rect
                    x={720}
                    y={237}
                    width={15}
                    height={45}
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
                    onClick={this.handlePointClick}
                    onTap={this.handlePointClick}
                    stroke={'#6C93BE'}
                    strokeWidth={4}
                    lineJoin={'bevel'}
                />
                <Text
                    text={'Pronator Syndrome'}
                    x={665}
                    y={300}
                    fontSize={23}
                    fontFamily={'Teko'}
                    fill={'#f46b42'}
                    opacity={this.state.textOpacity}
                />
            </Group>
        );
    }
}

export default PsEntrapment;