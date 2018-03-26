import React, { Component } from 'react';
import { Group, Line } from 'react-konva';

class ClavLine extends Component {
    render() {
        const { shadowNerveBlur } = this.props;
        return (
            <Group>
                <Line
                    points={[730, -265, 730, 800]}
                    stroke={'#fff'}
                    strokeWidth={7}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    opacity={0.4}
                    shadowBlur={shadowNerveBlur}
                    shadowColor={'#910059'}
                    dash={[45, 15]}
                />
                <Line
                    points={[730, -265, 730, 800]}
                    stroke={'#fff'}
                    strokeWidth={7}
                    lineCap={'bevel'}
                    lineJoin={'bevel'}
                    opacity={0.6}
                    dash={[45, 15]}
                />
            </Group>
        );
    }
}

export default ClavLine;