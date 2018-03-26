import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';

require('./index.css');
 
class LoggedOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            opacity: 1.0,
            loading: false
        });
    }, 2000);
  }

  render() {
    return (
      <div className='logged-out'>
        <BeatLoader
            color={'#446E9B'} 
            loading={this.state.loading}/>
        <h4 style={{ opacity: this.state.opacity }}>
            You Are Logged Out Of Neuroschematic.<br/> Please <a href='/login'>Login</a> To View.
        </h4>            
      </div>
    )
  }
}

export default LoggedOut;