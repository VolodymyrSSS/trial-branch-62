import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import './Footer.scss'



export default function FooterBottom() {
    return (
                <section className='footer-bottom'>
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <h5>Powered By OpenCart Avnet Electronics Store © 2019</h5>
                            <div className='d-flex align-items-center'>
                                <img src='/img/Footer/american_express.png' />
                                <img src='/img/Footer/discover.png' />
                                <img src='/img/Footer/google_wallet.png' />
                                <img src='/img/Footer/paypal.png' />
                                <img src='/img/Footer/visa.png' />
                            </div>
                        </div>
                    </div>
                </section>
    );
}