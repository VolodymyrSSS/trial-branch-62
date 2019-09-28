import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';

import {logOut} from '../../actions/authentication';
import './Header.scss';


const Header = (props) => {
   
    const logOutAction = () => props.dispatch(logOut());

    return (

        <nav className="navbar navbar-expand main-navbar">
            <Link className="navbar-brand d-none d-sm-flex" to='/'></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse main-navbar_collapse d-flex justify-content-between align-items-start" id="navbarSupportedContent-333">
                <ul className="navbar-nav main-navbar_collapse-first flex-column flex-sm-row">
                    <li className="nav-item d-flex d-sm-none">
                        <Link className="nav-link" to='/'>Home Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/product-list'>Product list</Link>
                    </li>
                </ul>
                <ul className="navbar-nav nav-flex-icons main-navbar_collapse-second">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" to='/'
                           aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right dropdown-default text-left"
                             aria-labelledby="navbarDropdownMenuLink-333">

                            {props.loginIs?
                                (
                                    <React.Fragment>
                                        <Link className="dropdown-item" to='/profile'>Profile</Link>
                                        <Link className="dropdown-item" to='/' onClick={logOutAction}>LogOut</Link>
                                    </React.Fragment>
                                ):(
                                    <React.Fragment>
                                        <Link className="dropdown-item" to='/login'>Login</Link>
                                        <Link className="dropdown-item" to='/registration'>Registration</Link>
                                    </React.Fragment>
                                )
                            }
            
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link waves-effect waves-light" to='/'>
                            <i className="fas fa-shopping-cart">
                                <span className="badge badge-pill badge-danger">0</span>
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = function (store) {
    return {
        loginIs: store.loginIs.loginIs,
    }

};

export default withRouter(connect(mapStateToProps)(Header));