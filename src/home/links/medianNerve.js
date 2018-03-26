import React, { Component } from 'react';
import { Group, Rect, Text, Circle, Line } from 'react-konva';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class MedianNerve extends Component {
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
        this.props.dispatch(push('/median-nerve'));
    }

    render() {
        return (
            <Group scaleX={0.5} 
                scaleY={0.5} 
                offsetX={-900} 
                offsetY={-15}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onTouchStart={this.handleMouseEnter}
                onTouchEnd={this.handleMouseLeave}
                onClick={this.handleClick}
                onTap={this.handleClick}>
                <Rect 
                        x={-104}
                        y={50}
                        width={1430}
                        height={345}
                />
                <Line
                    points={[-105, 260, 1057, 260]}
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
                    x={-105}
                    y={260}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[430, 260, 480, 240, 510, 175, 550, 160]}
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
                    x={430}
                    y={260}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={550}
                    y={160}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Group offsetX={-70}>
                    <Line
                        points={[430, 260, 480, 240, 510, 175, 550, 160]}
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
                        x={430}
                        y={260}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Circle
                        radius={9}
                        x={550}
                        y={160}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                </Group>
                <Group offsetX={-140}>
                    <Line
                        points={[430, 260, 480, 240, 510, 175, 550, 160]}
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
                        x={430}
                        y={260}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Circle
                        radius={9}
                        x={550}
                        y={160}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                </Group>
                <Group offsetX={-210}>
                    <Line
                        points={[430, 260, 480, 240, 510, 175, 550, 160]}
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
                        x={430}
                        y={260}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Circle
                        radius={9}
                        x={550}
                        y={160}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                </Group>
                <Line
                    points={[880, 260, 980, 230, 1060, 100, 1150, 70]}
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
                    x={1150}
                    y={70}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[880, 260, 925, 270, 965, 350, 1000, 365, 1100, 370]}
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
                    x={880}
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
                    y={370}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[1057, 260, 1130, 220, 1185, 120, 1230, 90, 1280, 90]}
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
                    x={1280}
                    y={90}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Group offsetX={95}>
                    <Line
                        points={[1170, 260, 1240, 250, 1330, 200, 1400, 235]}
                        stroke={'#fff'}
                        strokeWidth={15}
                        lineCap={'bevel'}
                        lineJoin={'bevel'}
                        shadowBlur={5}
                        tension={0.5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Circle
                        radius={9}
                        x={1400}
                        y={235}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Line
                        points={[1150, 260, 1240, 272, 1330, 320, 1400, 285]}
                        stroke={'#fff'}
                        strokeWidth={15}
                        lineCap={'bevel'}
                        lineJoin={'bevel'}
                        shadowBlur={5}
                        tension={0.5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Circle
                        radius={9}
                        x={1400}
                        y={285}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />    
                    <Circle
                        radius={5}
                        x={1150}
                        y={260}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                </Group>
                <Text
                    text={'Median Nerve'}
                    x={350}
                    y={0}
                    fontSize={45}
                    fontFamily={'Teko'}
                    fill={'#004691'}
                    opacity={this.state.textOpacity}
                />
            </Group>
        );
    }
}

export default connect()(MedianNerve);