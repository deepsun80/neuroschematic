import React, { Component } from 'react';
import { Group, Text, Rect } from 'react-konva';

class SsNotchEntrapment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nerveColor: '#004691',
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

    render() {
        return (
            <Group>
                <Rect
                    x={400}
                    y={0}
                    width={15}
                    height={45}
                    fillLinearGradientEndPointY={60}
                    fillLinearGradientStartPointY={0}
                    fillLinearGradientColorStops={this.state.rectangleFillColor}
                    onMouseEnter={this.handleRectangleMouseEnter}
                    onMouseLeave={this.handleRectangleMouseLeave}
                    onTouchStart={this.handleRectangleMouseEnter}
                    onTouchEnd={this.handleRectangleMouseLeave}
                    stroke={'#6C93BE'}
                    strokeWidth={4}
                    lineJoin={'bevel'}
                />
                <Text
                    text={'Suprascapular Notch'}
                    x={340}
                    y={-40}
                    fontSize={23}
                    fontFamily={'Teko'}
                    fill={'#f46b42'}
                    opacity={this.state.textOpacity}
                />
            </Group>
        );
    }
}

export default SsNotchEntrapment;