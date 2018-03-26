import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { auth } from '../firebase';

require('./index.css');

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: null
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;

    auth.doPasswordReset(email)
    .then(() => {
      this.setState({ 
        email: '',
        error: null 
      });
      this.props.push('/login');      
    })
    .catch(error => {
      this.setState({
        error: error
      });
    });
  }

  render() {
    const {
      email,
      error
    } = this.state;

    const isInvalid = email === '';

    return (
        <div class='card text-white bg-primary mb-3'>
            <div class='card-header'>
              <div>
                <img src={logo} className='login-logo' alt='nerve-logo' />
                  NeuroSchematic &nbsp;
                <i className='fa fa-registered'></i>
              </div>
              <div>Reset Password</div>
            </div>
            <div class='card-body'>
                <form onSubmit={ this.handleSubmit }>

                  <div className='form-group'>
                    <label for='email'>Enter Your Email</label>
                    <input 
                      type='email' 
                      className='form-control' 
                      id='email' 
                      placeholder='Enter Email' 
                      value={ email }
                      onChange={ this.handleEmailChange } />
                  </div>
                  <h6 style={{ lineHeight: '2em' }}>A Link Will Be Sent To Your Email Account To Reset With New Password.<br/>
                     Login On The Next Screen With Your New Password. </h6>
                  
                  <button disabled={isInvalid} type='submit' className='btn btn-secondary'>
                    Reset Password
                  </button>

                  { error && <p style={{ color: '#f46b42'}}>{error.message}</p> }

                </form>
            </div>
        </div>
    );
  }
}

//-----Redux Functions-----
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ push }, dispatch); 
};

export default connect(null, mapDispatchToProps)(ForgetPassword);