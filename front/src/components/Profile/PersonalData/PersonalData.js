import React,{Component} from 'react';
import { Tabs, Tab, Card, Button, Spinner } from 'react-bootstrap';
import {connect} from 'react-redux';
import { Link, withRouter} from 'react-router-dom';

import PreloaderSmall from '../../PreloaderSmall/PreloaderSmall';
import EditPassword from './EditPassword/EditPassword';
import EditProfile from './EditProfile/EditProfile';
import RealProfile from './RealProfile/RealProfile';
import "./PersonalData.scss";

import {getCustomer} from "../../../actions/profile";


class PersonalData extends Component{

    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.getCustomerAction();	
	}
    
    render() {
        const {customer} = this.props.customer;

        let customerInfo = (Object.keys(customer).length >= 4)?(
            <Tabs id="controlled-tab-example" className="d-flex 
            flex-row profile-tabs">
                <Tab eventKey="Profile" title="Profile">
                    <RealProfile></RealProfile>
                    <Link to='/' className="mt-5 profile-home_link">
                    <Button className="profile-home_btn">Go to home page</Button>
                </Link>
                </Tab>
                <Tab eventKey="Edit profile" title="Edit profile">
                    <EditProfile></EditProfile>
                </Tab>
                <Tab eventKey="Change password" title="Change password">
                    <EditPassword></EditPassword>
                </Tab>
                <Tab eventKey="Adress book" title="Adress book">
                   wait... need add new data in customer db
                </Tab>
            </Tabs>
        ):<PreloaderSmall></PreloaderSmall>
        

        return (
            <React.Fragment>
                {customerInfo}
            </React.Fragment>
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
        getCustomerAction:() => dispatch(getCustomer()),
    }
};

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalData))


