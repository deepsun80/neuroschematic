import React, { Component } from 'react';
import { Group, Line, Rect, Circle, Text } from 'react-konva';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class BrachialPlexus extends Component {
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
        this.props.dispatch(push('/brachial-plexus'));
    }

    render() {
        return (
            <Group 
                scaleX={0.5} 
                scaleY={0.5}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onTouchStart={this.handleMouseEnter}
                onTouchEnd={this.handleMouseLeave}
                onClick={this.handleClick}
                onTap={this.handleClick}>
                <Group offsetX={465}>
                    <Rect 
                        x={350}
                        y={5}
                        width={910}
                        height={550}
                    />
                    <Line
                        points={[1085, 430, 1150, 395, 1200, 295, 1260, 275]}
                        stroke={'#fff'}
                        strokeWidth={12}
                        lineCap={'bevel'}
                        lineJoin={'bevel'}
                        shadowBlur={5}
                        tension={0.5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Line
                        points={[1085, 100, 1150, 135, 1200, 245, 1260, 275]}
                        stroke={'#fff'}
                        strokeWidth={12}
                        lineCap={'bevel'}
                        lineJoin={'bevel'}
                        shadowBlur={5}
                        tension={0.5}
                        shadowColor={this.state.nerveColor}
                    />
                </Group>
                <Line
                    points={[320, 275, 380, 250, 440, 135, 510, 100]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[320, 100, 380, 135, 440, 250, 510, 275]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[320, 430, 380, 410, 440, 310, 510, 275]}
                    stroke={'#fff'}
                    strokeWidth={12}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[250, 100, 585, 100]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[-65, 30, 50, 30, 110, 40, 150, 60, 205, 95, 250, 100]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    tension={0.4}
                    shadowColor={this.state.nerveColor}
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
                    text={'C5'}
                    x={-102}
                    y={15}
                    fontSize={38}
                    fontFamily={'Teko'}
                    fill={'#fff'}
                    opacity={this.state.textRectangleOpacity}
                />
                <Line
                    points={[-65, 195, 50, 195, 130, 175, 205, 115, 250, 100]}
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
                    x={250}
                    y={100}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Rect
                    x={-110}
                    y={175}
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
                    text={'C6'}
                    x={-102}
                    y={180}
                    fontSize={38}
                    fontFamily={'Teko'}
                    fill={'#fff'}
                    opacity={this.state.textRectangleOpacity}
                />
                <Line
                    points={[585, 100, 640, 90, 720, 40, 780, 30]}
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
                    x={585}
                    y={100}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={780}
                    y={30}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[-65, 275, 585, 275]}
                    stroke={'#fff'}
                    strokeWidth={15}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Rect
                    x={-110}
                    y={255}
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
                    text={'C7'}
                    x={-102}
                    y={260}
                    fontSize={38}
                    fontFamily={'Teko'}
                    fill={'#fff'}
                    opacity={this.state.textRectangleOpacity}
                />
                <Line
                    points={[585, 275, 640, 265, 720, 210, 780, 195]}
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
                    x={785}
                    y={195}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Line
                    points={[585, 275, 640, 285, 720, 340, 780, 355]}
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
                    x={585}
                    y={275}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Circle
                    radius={9}
                    x={780}
                    y={355}
                    stroke={'#fff'}
                    fill={'#fff'}
                    strokeWidth={7}
                    shadowBlur={5}
                    shadowColor={this.state.nerveColor}
                />
                <Group offsetY={-330}>
                    <Line
                        points={[250, 100, 585, 100]}
                        stroke={'#fff'}
                        strokeWidth={15}
                        lineCap={'bevel'}
                        lineJoin={'bevel'}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Line
                        points={[-65, 30, 50, 30, 110, 40, 150, 60, 205, 95, 250, 100]}
                        stroke={'#fff'}
                        strokeWidth={15}
                        lineCap={'bevel'}
                        lineJoin={'bevel'}
                        shadowBlur={5}
                        tension={0.4}
                        shadowColor={this.state.nerveColor}
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
                    <Line
                        points={[-65, 195, 50, 195, 130, 175, 205, 115, 250, 100]}
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
                        x={250}
                        y={100}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                    <Rect
                        x={-110}
                        y={175}
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
                        text={'T1'}
                        x={-102}
                        y={180}
                        fontSize={38}
                        fontFamily={'Teko'}
                        fill={'#fff'}
                        opacity={this.state.textRectangleOpacity}
                    />
                    <Line
                        points={[585, 100, 640, 110, 720, 165, 780, 180]}
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
                        x={585}
                        y={100}
                        stroke={'#fff'}
                        fill={'#fff'}
                        strokeWidth={7}
                        shadowBlur={5}
                        shadowColor={this.state.nerveColor}
                    />
                </Group>
                <Text
                    text={'Brachial Plexus'}
                    x={270}
                    y={-70}
                    fontSize={45}
                    fontFamily={'Teko'}
                    fill={'#004691'}
                    opacity={this.state.textOpacity}
                />
            </Group>
        );
    }
}

export default connect()(BrachialPlexus);