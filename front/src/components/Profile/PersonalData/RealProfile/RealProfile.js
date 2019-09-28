import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { ListGroup, Card } from 'react-bootstrap';

import './RealProfile.scss'


class RealProfile extends Component {

    constructor(props) {
        super(props)
        
    }

    render() {

        const {customer} = this.props.customer;

        return(
            <div className="relprofile">
                <Card.Header as="h2" className="relprofile_header" style={{border:'1px solid white'}}>Welcome, <span>{customer.login}</span></Card.Header>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Your profile</Card.Title>
                    <ListGroup className="text-left">
                        <ListGroup.Item><b>email: </b>{customer.email}</ListGroup.Item>
                        <ListGroup.Item><b>First name:</b> {customer.first_name}</ListGroup.Item>
                        <ListGroup.Item><b>Last name:</b> {customer.last_name}</ListGroup.Item>
                    </ListGroup> 
                </Card.Body>
            </div>
        )
    }

}

const mapStateToProps = function (store) {
    return {
        customer: store.customer,
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
       
    }
};


export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RealProfile));
