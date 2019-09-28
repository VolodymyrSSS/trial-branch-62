import React, {Component} from 'react';
import './Contacts.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Contacts extends Component {

    render() {

        return (
            <React.Fragment>
                <Header></Header>
                <div className="container-fluid">
                    <div className="jumbotron col-12 p-0 bg-info min-vh-100 text-center m-0 d-flex
                                flex-column justify-content-center align-items-center">
                        <h1>THIS is CONTACT page!</h1>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}


export default Contacts