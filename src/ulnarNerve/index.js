import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../main';

import { removeFCU, 
  removeFDP, 
  removeDCB, 
  removePCB,
  removeFDM, 
  removeADM, 
  removeODM,
  removePB, 
  removeDI, 
  removePI, 
  removeLB, 
  removeAP, 
  removeFPB,
  removeDB } from '../actions/selectUlnarMuscle';

import UlnarNerveOne from './nerves/ulnarNerveOne';
import UlnarNerveTwo from './nerves/ulnarNerveTwo';
import UlnarNerveThree from './nerves/ulnarNerveThree';
import UlnarNerveFour from './nerves/ulnarNerveFour';
import UlnarNerveFive from './nerves/ulnarNerveFive';
import FcuNerve from './nerves/fcuNerve';
import FdpNerve from './nerves/fdpNerve';
import DcbNerve from './nerves/dcbNerve';
import PcbNerve from './nerves/pcbNerve';
import DmbNerve from './nerves/dmbNerve';
import DbNerve from './nerves/dbNerve';
import HbNerve from './nerves/hbNerve';
import AosEntrapment from './nerves/aosEntrapment';
import TupEntrapment from './nerves/tupEntrapment';
import CtEntrapment from './nerves/ctEntrapment';
import GcEntrapment from './nerves/gcEntrapment';

import Cursor from '../cursor.js';

require('./index.css');

class UlnarNerve extends Component {
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

  handleNerveMouseEnter = () => {
    this.props.removeFCU();
    this.props.removeFDP();
    this.props.removeDCB();
    this.props.removePCB();
    this.props.removeFDM();
    this.props.removeADM();
    this.props.removeODM();
    this.props.removePB();
    this.props.removeDI();
    this.props.removePI(); 
    this.props.removeLB(); 
    this.props.removeAP();
    this.props.removeFPB();
    this.props.removeDB();
}

  render() {
    const { x, y, mobileY, shadowNerveBlur } = this.state;
    window.addEventListener("orientationchange", function(){ window.location.reload(); });
    
    return (
      <div>
        <Main />
        <Cursor />
        <h4 className='text'>Ulnar Nerve</h4>
        <Stage width={window.innerWidth} height={window.innerHeight} draggable={true}>
          <Layer 
            offsetX={-150} 
            offsetY={mobileY} 
            className='nerve-layer' 
            scaleX={x} 
            scaleY={y}
            onTap={this.handleNerveMouseEnter}>
            <DbNerve shadowNerveBlur={shadowNerveBlur} />
            <DmbNerve shadowNerveBlur={shadowNerveBlur} />
            <HbNerve shadowNerveBlur={shadowNerveBlur} />
            <UlnarNerveOne shadowNerveBlur={shadowNerveBlur} />
            <UlnarNerveTwo shadowNerveBlur={shadowNerveBlur} />
            <UlnarNerveThree shadowNerveBlur={shadowNerveBlur} />
            <UlnarNerveFour shadowNerveBlur={shadowNerveBlur} />
            <UlnarNerveFive shadowNerveBlur={shadowNerveBlur} />
            <FcuNerve shadowNerveBlur={shadowNerveBlur} />
            <FdpNerve shadowNerveBlur={shadowNerveBlur} />
            <DcbNerve shadowNerveBlur={shadowNerveBlur} />
            <PcbNerve shadowNerveBlur={shadowNerveBlur} />
            <CtEntrapment />
            <GcEntrapment />
            <AosEntrapment />
            <TupEntrapment />
          </Layer>
        </Stage>
      </div>
    );
  }
}

//-----Redux Functions-----
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({  removeFCU, 
                               removeFDP,
                               removeDCB,
                               removePCB,
                               removeFDM, 
                               removeADM, 
                               removeODM,
                               removePB, 
                               removeDI, 
                               removePI, 
                               removeLB, 
                               removeAP, 
                               removeFPB,
                               removeDB }, 
   dispatch); 
};

export default connect(null, mapDispatchToProps)(UlnarNerve);