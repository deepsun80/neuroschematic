import React, { Component } from 'react';
import { Group, Rect, Text, Circle, Line } from 'react-konva';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class UlnarNerve extends Component {
    constructor() {
        super();
        this.state = {
            nerveColor: '#004691',
            textOpacity: 0
        }
    }

    handleMouseEnter = () => {
        this.setState ({
            nerveColor: '#3d7dc1',
            textOpacity: 0.8
        });
        document.body.style.cursor = 'pointer';
    }

    handleMouseLeave = () => {
        this.setState ({
            nerveColor: '#004691',
            textOpacity: 0            
        });
        document.body.style.cursor = 'default';
    }

    handleClick = () => {
        this.props.dispatch(push('/ulnar-nerve'));
    };

    render() {
        return (
            <Group scaleX={0.5} 
                scaleY={0.5} 
                offsetX={-900} 
                offsetY={-250}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onTouchStart={this.handleMouseEnter}
                onTouchEnd={this.handleMouseLeave}
                onClick={this.handleClick}
                onTap={this.handleClick}>
                <Rect 
                        x={-104}
                        y={160}
                        width={1430}
                        height={305}
                />
                <Line
                    points={[-115, 260, 1100, 260]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={5}
                    x={-115}
                    y={260}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[440, 260, 510, 280, 560, 340]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={5}
                    x={440}
                    y={260}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={560}
                    y={340}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[520, 260, 580, 280, 630, 340]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={5}
                    x={520}
                    y={260}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={630}
                    y={340}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[620, 260, 700, 290, 740, 400, 830, 450]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={5}
                    x={620}
                    y={260}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={5}
                    x={830}
                    y={450}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Group offsetX={-90}>
                    <Line
                        points={[620, 260, 700, 290, 740, 380, 830, 420]}
                        stroke={'#fff'}
                        strokeWidth={15}
                        lineCap={'bevel'}
                        lineJoin={'bevel'}
                        shadowBlur={5}
                        tension={0.5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Circle
                        radius={5}
                        x={620}
                        y={260}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Circle
                        radius={5}
                        x={830}
                        y={420}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                </Group>
                <Line
                    points={[887, 260, 950, 250, 983, 230, 1028, 185, 1100, 180]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.4}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={1100}
                    y={180}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[887, 260, 950, 270, 983, 290, 1028, 335, 1100, 340]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.4}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={5}
                    x={887}
                    y={260}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={1100}
                    y={340}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[1100, 260, 1150, 280, 1195, 323, 1245, 320]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.4}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={1245}
                    y={320}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[1100, 260, 1150, 250, 1195, 207, 1245, 210]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.4}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={1245}
                    y={210}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={5}
                    x={1100}
                    y={260}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Text
                    text={'Ulnar Nerve'}
                    x={350}
                    y={470}
                    fontSize={45}
                    fontFamily={'Teko'}
                    fill={'#004691'}
                    opacity={this.state.textOpacity}
                />
            </Group>
        );
    }
}

export default connect()(UlnarNerve);