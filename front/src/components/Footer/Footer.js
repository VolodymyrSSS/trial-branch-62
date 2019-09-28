import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import FooterBottom from './FooterBottom';
import './Footer.scss'



export default function Footer() {
    return (
        <Fragment>
            <div className="pt-5 pb-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xs-12 about-company">
                            <Link className="nav-link footer-link" to='/'><img src='/img/eWorld-logo.png'/></Link>
                            <p className="pr-5 footer__text-footer">There are many variations of passages of look even
                                slightly believable.</p>
                            <a href="#"><i className="fab fa-facebook-square fa-2x"></i> </a>
                            <a href="#"><i className="fab fa-twitter-square fa-2x"></i></a>
                            <a href="#"><i className="fas fa-rss-square fa-2x"></i></a>
                            <a href="#"><i className="fab fa-google-plus-square fa-2x"></i></a>

                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">INFORMATION</h4>
                            <ul className="m-0 p-0">
                                <Link className="nav-link footer-link" to='/'>About Us</Link>
                                <Link className="nav-link footer-link" to='/'>Delivery Information</Link>
                                <Link className="nav-link footer-link" to='/'>Privacy Policy</Link>
                                <Link className="nav-link footer-link" to='/'>Terms & Conditions</Link>
                                <Link className="nav-link footer-link" to='/contacts'>Contact Us</Link>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">MY ACCOUNT</h4>
                            <ul className="m-0 p-0">
                                <Link className="nav-link footer-link" to='/'>My Account</Link>
                                <Link className="nav-link footer-link" to='/'>Order History</Link>
                                <Link className="nav-link footer-link" to='/'>Wish List</Link>
                                <Link className="nav-link footer-link" to='/'>Newsletter</Link>
                                <Link className="nav-link footer-link" to='/'>Returns</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom/>
        </Fragment>
    );
}




