import React, { Component } from 'react';
import Navbar from '../navbar';
import NerveModal from '../nerveModal';
import InfoModal from '../infoModal';
import DemoModal from '../demoModal';

class Main extends Component {
    render () {
        return (
        <div>
            <Navbar />
            <InfoModal />
            <NerveModal />
            <DemoModal />
        </div>
        );
    }
}

export default Main;