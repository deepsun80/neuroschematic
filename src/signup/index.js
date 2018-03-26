import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { auth } from '../firebase';

require('./index.css');

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordOneChange = (event) => {
    this.setState({
      passwordOne: event.target.value
    });
  }

  handlePasswordTwoChange = (event) => {
    this.setState({
      passwordTwo: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      email,
      passwordOne,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      this.setState({ 
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null 
      });
      this.props.push('/home');      
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
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

    return (
        <div class='card text-white bg-primary mb-3'>
            <div class='card-header'>
              <div>
                <img src={logo} className='login-logo' alt='nerve-logo' />
                  NeuroSchematic &nbsp;
                <i className='fa fa-registered'></i>
              </div>
              <div>Sign Up</div>
            </div>
            <div class='card-body'>
                <form onSubmit={ this.handleSubmit }>

                  <div className='form-group'>
                    <label for='email'>Email</label>
                    <input 
                      type='email' 
                      className='form-control' 
                      id='email' 
                      aria-describedby='emailHelp' 
                      placeholder='Enter Email' 
                      value={ email }
                      onChange={ this.handleEmailChange } />
                    <small id='emailHelp' class='form-text' style={{ color: '#fff' }}>
                      We will never share your information with anyone else.
                    </small>
                  </div>

                  <div className='form-group'>
                    <label for='passWord'>Password</label>
                    <input 
                      type='password' 
                      className='form-control' 
                      id='passWord' 
                      placeholder='Enter Password' 
                      value={ passwordOne }
                      onChange={ this.handlePasswordOneChange } />
                    <input 
                      type='password' 
                      className='form-control' 
                      placeholder='Confirm Password' 
                      value={ passwordTwo }
                      onChange={ this.handlePasswordTwoChange } 
                      style={{ marginTop: 30 }}/>
                  </div>
                  
                  <h6>Already Have an Account? &nbsp; <a href='/login'>LOG IN</a></h6>
                  <button disabled={isInvalid} type='submit' className='btn btn-secondary'>
                    Sign Up
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

export default connect(null, mapDispatchToProps)(SignupForm);