import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';

import Main from '../main';

import MedianNerveOne from './nerves/medianNerveOne';
import MedianNerveTwo from './nerves/medianNerveTwo';
import MedianNerveThree from './nerves/medianNerveThree';
import MedianNerveFour from './nerves/medianNerveFour';
import MedianNerveFive from './nerves/medianNerveFive';
import MedianNerveSix from './nerves/medianNerveSix';
import AiNerve from './nerves/aiNerve';
import PtNerve from './nerves/ptNerve';
import FcrNerve from './nerves/fcrNerve';
import PlNerve from './nerves/plNerve';
import FdpNerve from './nerves/fdpNerve';
import FdsNerve from './nerves/fdsNerve';
import FplNerve from './nerves/fplNerve';
import PqNerve from './nerves/pqNerve';
import TcBranch from './nerves/tcBranch';
import RmBranch from './nerves/rmBranch';
import LumBranch from './nerves/lumBranch';
import DigitalBranch from './nerves/digitalBranch';

import LosEntrapment from './nerves/losEntrapment';
import LfEntrapment from './nerves/lfEntrapment';
import PsEntrapment from './nerves/psEntrapment';
import FsbEntrapment from './nerves/fsbEntrapment';
import CtEntrapment from './nerves/ctEntrapment';
import KnsEntrapment from './nerves/knsEntrapment';
import AhfplEntrapment from './nerves/ahfplEntrapment';

import Cursor from '../cursor.js';

require('./index.css');

class MedianNerve extends Component {
  constructor() {
    super();
    if (window.innerWidth <= 1024) {
      this.state = {
        x: 0.6,
        y: 0.6,
        mobileY: 60,
        shadowNerveBlur: 0,
      }
    } else {
      this.state = {
        x: 1.0,
        y: 1.0,
        mobileY: -70,
        shadowNerveBlur: 15,
      }
    }
  }

  render() {
    const { x, y, mobileY, shadowNerveBlur } = this.state;
    window.addEventListener("orientationchange", function(){ window.location.reload(); });
    
    return (
      <div>
        <Main />
        <Cursor />
        <h4 className='text'>Median Nerve</h4>
        <Stage width={window.innerWidth} height={window.innerHeight} draggable={true}>
          <Layer offsetX={-150} offsetY={mobileY} className='nerve-layer' scaleX={x} scaleY={y}>
            <LumBranch shadowNerveBlur={shadowNerveBlur} />
            <DigitalBranch shadowNerveBlur={shadowNerveBlur} />
            <RmBranch shadowNerveBlur={shadowNerveBlur} />
            <TcBranch shadowNerveBlur={shadowNerveBlur} />
            <MedianNerveOne shadowNerveBlur={shadowNerveBlur} />
            <MedianNerveTwo shadowNerveBlur={shadowNerveBlur} />
            <MedianNerveThree shadowNerveBlur={shadowNerveBlur} />
            <MedianNerveFour shadowNerveBlur={shadowNerveBlur} />
            <MedianNerveFive shadowNerveBlur={shadowNerveBlur} />
            <MedianNerveSix shadowNerveBlur={shadowNerveBlur} />
            <AiNerve shadowNerveBlur={shadowNerveBlur} />
            <PtNerve shadowNerveBlur={shadowNerveBlur} />
            <FcrNerve shadowNerveBlur={shadowNerveBlur} />
            <PlNerve shadowNerveBlur={shadowNerveBlur} />
            <FdpNerve shadowNerveBlur={shadowNerveBlur} />
            <FdsNerve shadowNerveBlur={shadowNerveBlur} />
            <FplNerve shadowNerveBlur={shadowNerveBlur} />
            <PqNerve shadowNerveBlur={shadowNerveBlur} />
            <LosEntrapment />
            <LfEntrapment />
            <PsEntrapment />
            <FsbEntrapment />
            <CtEntrapment />
            <KnsEntrapment />
            <AhfplEntrapment />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default MedianNerve;