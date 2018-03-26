import React, { Component } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import BrachialPlexus from './links/brachialPlexus';
import UlnarNerve from './links/ulnarNerve';
import MedianNerve from './links/medianNerve';
import Main from '../main';

class Home extends Component {
    constructor() {
        super();
        if (window.innerWidth <= 800) {
            this.state = {
              x: 0.7,
              y: 0.7,
              mobileX: -100
            }
        } else {
            this.state = {
              x: 1.1,
              y: 1.1,
              mobileX: -90
            }
        }
    }

    render() {
        const { x, y, mobileX } = this.state;

        window.addEventListener("orientationchange", function(){ window.location.reload(); });

        return (
        <div>
            <Main />
            <Stage width={window.innerWidth} height={window.innerHeight} draggable={'true'}>
                <Layer offsetX={mobileX} offsetY={-100} scaleX={x} scaleY={y}>
                    <Group>
                        <BrachialPlexus />
                        <MedianNerve />
                        <UlnarNerve />
                    </Group>
                </Layer>
            </Stage>
        </div>
        );
    }
}

export default Home;