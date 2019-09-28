import React, {Component} from 'react';
import './Checkout.scss';
import Header from '../Header/Header';

class Checkout extends Component {

    render() {

        return (
            <React.Fragment>
                <Header></Header>
                <div className="container-fluid">
                    <div className="jumbotron col-12 p-0 bg-info min-vh-100 text-center m-0 d-flex
                                flex-column justify-content-center align-items-center">
                        <h1>THIS is CHECKOUT page!</h1>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Checkout