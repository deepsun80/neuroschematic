import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, openInfoModal } from '../actions';
import { auth } from '../firebase';

require('./index.css');

class Navbar extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         nerveSearch: '',
    //         muscleSearch: ''
    //     }
    // }

    // handleNerveChange = (event) => {
    //     this.setState({
    //         nerveSearch: event.target.value
    //     });
    // }

    // handleMuscleChange = (event) => {
    //     this.setState({
    //         muscleSearch: event.target.value
    //     });
    // }

    // handleNerveSubmit = (event) => {
    //     event.preventDefault();
    //     const selectedNerveResponse = selectNerveName(this.state.nerveSearch);
    //     const selectedNerveLink = selectNerveLink(selectedNerveResponse);
    //     if (selectedNerveLink !== 'Please Enter a Correct Nerve') {
    //         this.props.push(selectedNerveLink);
    //         this.props.selectNerve(selectedNerveResponse);
    //         setTimeout(() => {
    //             this.props.openNerveModal();            
    //         }, 300);  
    //     } else {
    //         alert(selectedNerveLink);
    //     }  
    // }

    handleOpenModal = () => {
        this.props.openInfoModal();
    }

    render() {
        return(
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <a className='navbar-brand' href='' >
                    <img src={logo} className='logo' alt='nerve-logo' />
                        NeuroSchematic &nbsp;
                    <i class='fa fa-registered'></i>
                </a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
            
                <div className='collapse navbar-collapse' id='navbarColor01'>
                <ul className='navbar-nav ml-auto'>
                    <li class='nav-item'>
                        <a class='nav-link' href='/home'>Home</a>
                    </li>
                    <li class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle' href='' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            Nerve Menu
                        </a>
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <a class='dropdown-item' href='/ulnar-nerve'>Ulnar Nerve</a>
                            <a class='dropdown-item' href='/median-nerve'>Median Nerve</a>
                            <a class='dropdown-item' href='/brachial-plexus'>Brachial Plexus</a>
                        </div>
                    </li>
                    {/* <li class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            Search
                        </a>
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <form class='form-inline' onSubmit={ this.handleNerveSubmit }>
                                <input class='form-control' type='text' placeholder='Enter Nerve' value={ this.state.nerveSearch } onChange={ this.handleNerveChange }/>
                                <button class='btn btn-secondary btn-sm btn-block' type='submit'>Search</button>
                            </form>
                            <form class='form-inline' onSubmit={ this.handleMuscleSubmit }>
                                <input class='form-control' type='text' placeholder='Enter Muscle' value={ this.state.muscleSearch } onChange={ this.handleMuscleChange }/>
                                <button class='btn btn-secondary btn-sm btn-block' type='submit'>Search</button>
                            </form>
                        </div>
                    </li> */}
                    <li>
                        <a class='nav-link' onClick={ this.handleOpenModal }>
                            <i className='fa fa-question-circle' style={{ fontSize: 32 }}></i>
                        </a>
                    </li>
                    <li class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle' href='' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            <i className='fa fa-user-circle' style={{ fontSize: 32 }}></i>
                        </a>
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <p style={{ marginLeft: 29, marginBottom: 0, marginTop: 8 }}>{this.props.authUserEmail}</p>
                            <a class='dropdown-item' href='/login' onClick={auth.doSignOut}>Logout</a>
                        </div>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        authUserEmail: state.authUser.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectNerve, openNerveModal, setCursorOpacity, removeCursorOpacity, openInfoModal, push }, dispatch); 
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Navbar);