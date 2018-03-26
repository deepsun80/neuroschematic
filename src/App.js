import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { firebase } from './firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUser } from './actions';

import Signup from './signup';
import Login from './login';
import ForgetPassword from './forgetPassword';
import Home from './home';
import UlnarNerve from './ulnarNerve';
import MedianNerve from './medianNerve';
import BrachialPlexus from './brachialPlexus';
import history from './myHistory';

import LoggedOut from './loggedOut';

require('./index.css');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

 componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    const { authUser } = this.state;

    this.props.setUser(this.state.authUser);

    return (
      <div className='app-background'>
        <Router history={ history }>
          <div>
          <p className='demo'>
            Demo v1.0
          </p>
          <p className='copyright'>
            Copyright <i class='fa fa-copyright'></i> 2018 Neuroschematic. All Rights Reserved.
          </p>
          
          <Route path='/signup' component={ Signup } />
          <Route path='/login' component={ Login } />
          <Route path='/reset-user' component={ ForgetPassword } />

          { authUser && <Route exact path='/' component={ Home } /> }
          { !authUser && <Route exact path='/' component={ Login } /> }

          { authUser && <Route path='/home' component={ Home } /> }
          { !authUser && <Route path='/home' component={ LoggedOut } /> }

          { authUser && <Route path='/ulnar-nerve' component={ UlnarNerve } /> }
          { !authUser && <Route path='/ulnar-nerve' component={ LoggedOut } /> }

          { authUser && <Route path='/median-nerve' component={ MedianNerve }/> }
          { !authUser && <Route path='/median-nerve' component={ LoggedOut }/> }

          { authUser && <Route path='/brachial-plexus' component={ BrachialPlexus } /> }
          { !authUser && <Route path='/brachial-plexus' component={ LoggedOut } /> }
          </div>
        </Router>
      </div>
    );
  }
}

//-----Redux Functions-----
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUser }, dispatch); 
};

export default connect(null, mapDispatchToProps)(App);