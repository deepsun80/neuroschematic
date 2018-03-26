import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { auth } from '../firebase';
import { BeatLoader } from 'react-spinners';

require('./index.css');

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
      loading: true
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      email,
      password,
    } = this.state;

    auth.doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ 
        email: '',
        password: '',
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

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            loading: false
        });
    }, 300);
  }

  render() {
    const {
      email,
      password,
      error,
      loading
    } = this.state;

    const isInvalid = 
      password === '' ||
      email === '';

    return (
      <div>
        <div className='loading'>
          <BeatLoader
            color={'#446E9B'} 
            loading={loading}/>
        </div>
        {!loading &&
          <div class='card text-white bg-primary mb-3'>
              <div class='card-header'>
                <div>
                  <img src={logo} className='login-logo' alt='nerve-logo' />
                    NeuroSchematic &nbsp;
                  <i className='fa fa-registered'></i>
                </div>
                <div>Log In</div>
              </div>
              <div class='card-body'>
                  <form onSubmit={ this.handleSubmit }>

                    <div className='form-group'>
                      <label for='email'>Email</label>
                      <input 
                        type='email' 
                        className='form-control' 
                        id='email' 
                        placeholder='Enter Email' 
                        value={ email }
                        onChange={ this.handleEmailChange } />
                    </div>

                    <div className='form-group'>
                      <label for='passWord'>Password</label>
                      <input 
                        type='password' 
                        className='form-control' 
                        id='passWord' 
                        placeholder='Enter Password' 
                        value={ password }
                        onChange={ this.handlePasswordChange } />
                    </div>
                    
                    <h6>Don't Have an Account? &nbsp; <a href='/signup'>SIGN UP</a></h6>
                    <h6>Forgot Password? &nbsp; <a href='/reset-user'>RESET PASSWORD</a></h6>
                    <button disabled={isInvalid} type='submit' className='btn btn-secondary'>
                      Log In
                    </button>

                    { error && <p style={{ color: '#f46b42'}}>{error.message}</p> }

                  </form>
              </div>
          </div>
        }
      </div>
    );
  }
}

//-----Redux Functions-----
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ push }, dispatch); 
};

export default connect(null, mapDispatchToProps)(LoginForm);