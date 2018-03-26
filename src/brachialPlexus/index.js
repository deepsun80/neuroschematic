import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';

import Main from '../main';

import ScLine from './nerves/scLine';
import SupCLine from './nerves/supCLine';
import ClavLine from './nerves/clavLine';
import InfCLine from './nerves/infCLine';

import C5 from './nerves/c5';
import C6 from './nerves/c6';
import C7 from './nerves/c7';
import C8 from './nerves/c8';
import T1 from './nerves/t1';
import LTNerve from './nerves/ltn';
import DSNerve from './nerves/dsn';
import FirstIntercostal from './nerves/firstIntercostal';

import SupNerveOne from './nerves/upper/supTrunkOne';
import SupNerveTwo from './nerves/upper/supTrunkTwo';
import SupNerveThree from './nerves/upper/supTrunkThree';
import UpAntDivision from './nerves/upper/upAntDivision';
import LatCordOne from './nerves/upper/latCordOne';
import LatCordTwo from './nerves/upper/latCordTwo';

import MidTrunkOne from './nerves/middle/midTrunkOne';
import PostDivision from './nerves/middle/postDivision';
import PostCordOne from './nerves/middle/postCordOne';
import PostCordTwo from './nerves/middle/postCordTwo';
import PostCordThree from './nerves/middle/postCordThree';
import PostCordFour from './nerves/middle/postCordFour';

import InfTrunkOne from './nerves/lower/infTrunkOne';
import MedCordOne from './nerves/lower/medCordOne';
import LowAntDivision from './nerves/lower/lowAntDivision';
import MedCordTwo from './nerves/lower/medCordTwo';
import MedCordThree from './nerves/lower/medCordThree';
import MedCordFour from './nerves/lower/medCordFour';

import MCBranch from './nerves/mcBranch';
import RadialBranch from './nerves/radialBranch';
import AuxiliaryBranch from './nerves/axBranch';
import UlnarBranch from './nerves/ulnarBranch';
import MedianBranch from './nerves/medianBranch';
import SuperSNerve from './nerves/ssn';
import SubNerve from './nerves/subn';
import LPNerve from './nerves/lpn';
import SubSNerveOne from './nerves/ss1';
import SubSNerveTwo from './nerves/ss2';
import TDNerve from './nerves/tdn';
import MPNerve from './nerves/mpn';
import MBCNerve from './nerves/mbcn';
import MABCNerve from './nerves/mabcn';

import SsNotchEntrapment from './nerves/ssNotchEntrapment';
import SgNotchEntrapment from './nerves/sgNotchEntrapment';
import CcEntrapment from './nerves/ccEntrapment';
import AxillaEntrapment from './nerves/axillaEntrapment';
import QsEntrapment from './nerves/qsEntrapment';

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

  render() {
    const { x, y, mobileY, shadowNerveBlur } = this.state;
    
    window.addEventListener("orientationchange", function(){ window.location.reload(); });
    
    return (
      <div>
        <Main />
        <Cursor />
        <h5 className='text'>Brachial Plexus</h5>
        <Stage width={window.innerWidth} height={window.innerHeight} draggable={true}>
          <Layer offsetX={-150} offsetY={mobileY} className='nerve-layer' scaleX={x} scaleY={y}>
            <ScLine shadowNerveBlur={shadowNerveBlur} />
            <SupCLine shadowNerveBlur={shadowNerveBlur} />
            <ClavLine shadowNerveBlur={shadowNerveBlur} />
            <LTNerve shadowNerveBlur={shadowNerveBlur} />
            <InfCLine shadowNerveBlur={shadowNerveBlur} />
            <C5 shadowNerveBlur={shadowNerveBlur} />
            <DSNerve shadowNerveBlur={shadowNerveBlur} />
            <C6 shadowNerveBlur={shadowNerveBlur} />
            <SupNerveOne shadowNerveBlur={shadowNerveBlur} />
            <SupNerveTwo shadowNerveBlur={shadowNerveBlur} />
            <SupNerveThree shadowNerveBlur={shadowNerveBlur} />
            <PostDivision shadowNerveBlur={shadowNerveBlur} />
            <UpAntDivision shadowNerveBlur={shadowNerveBlur} />
            <LatCordOne shadowNerveBlur={shadowNerveBlur} />
            <LatCordTwo shadowNerveBlur={shadowNerveBlur} />
            <SuperSNerve shadowNerveBlur={shadowNerveBlur} />
            <SubNerve shadowNerveBlur={shadowNerveBlur} />
            <LPNerve shadowNerveBlur={shadowNerveBlur} />
            <C7 shadowNerveBlur={shadowNerveBlur} />
            <MidTrunkOne shadowNerveBlur={shadowNerveBlur} />
            <PostCordOne shadowNerveBlur={shadowNerveBlur} />
            <PostCordTwo shadowNerveBlur={shadowNerveBlur} />
            <PostCordThree shadowNerveBlur={shadowNerveBlur} />
            <PostCordFour shadowNerveBlur={shadowNerveBlur} />
            <MedianBranch shadowNerveBlur={shadowNerveBlur} />
            <MCBranch shadowNerveBlur={shadowNerveBlur} />
            <AuxiliaryBranch shadowNerveBlur={shadowNerveBlur} />
            <RadialBranch shadowNerveBlur={shadowNerveBlur} />
            <SubSNerveOne shadowNerveBlur={shadowNerveBlur} />
            <SubSNerveTwo shadowNerveBlur={shadowNerveBlur} />
            <TDNerve shadowNerveBlur={shadowNerveBlur} />
            <C8 shadowNerveBlur={shadowNerveBlur} />
            <T1 shadowNerveBlur={shadowNerveBlur} />
            <FirstIntercostal shadowNerveBlur={shadowNerveBlur} />
            <InfTrunkOne shadowNerveBlur={shadowNerveBlur} />
            <LowAntDivision shadowNerveBlur={shadowNerveBlur} />
            <MedCordOne shadowNerveBlur={shadowNerveBlur} />
            <MedCordTwo shadowNerveBlur={shadowNerveBlur} />
            <MedCordThree shadowNerveBlur={shadowNerveBlur} />
            <MedCordFour shadowNerveBlur={shadowNerveBlur} />
            <UlnarBranch shadowNerveBlur={shadowNerveBlur} />
            <MPNerve shadowNerveBlur={shadowNerveBlur} />
            <MBCNerve shadowNerveBlur={shadowNerveBlur} />
            <MABCNerve shadowNerveBlur={shadowNerveBlur} />
            <SsNotchEntrapment shadowNerveBlur={shadowNerveBlur} />
            <SgNotchEntrapment shadowNerveBlur={shadowNerveBlur} />
            <CcEntrapment shadowNerveBlur={shadowNerveBlur} />
            <AxillaEntrapment shadowNerveBlur={shadowNerveBlur} />
            <QsEntrapment shadowNerveBlur={shadowNerveBlur} />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default UlnarNerve;