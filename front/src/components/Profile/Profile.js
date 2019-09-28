import React, {Component, Fragment} from 'react';
import { ListGroup, Col, Row, Tab} from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import PersonalData from './PersonalData/PersonalData';
import PopUp from '../PopUp/PopUp';
import './Profile.scss';

class Profile extends Component {

    constructor(props) {
        super(props)
        
    }

	render() {

        const {popupValidator} = this.props;

        const popup = (popupValidator.statusError)
        ?(<PopUp 
        messageError={popupValidator.messageError} 
        statusError={popupValidator.statusError}></PopUp>)
        :null
        
		return (
            <Fragment>
                <Header/>
                <div className="jumbotron col-12 p-0 bg-white  min-vh-100 text-center m-0 d-flex 
                flex-column align-items-center">
                    {popup}
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row className="col-12">
                            <Col sm={3} className="profile-menu_tabs">
                                <ListGroup>
                                    <ListGroup.Item action href="#link1">
                                        Personal data
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Order Information
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Wish List
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        My comment
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={9} className="bg-light ">
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link1">
                                        <PersonalData></PersonalData>
                                    </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                        <h1> Order Information</h1>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link3">
                                        <h1>Wish List</h1>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link4">
                                        <h1>comment</h1>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                </Tab.Container>
            </div>
            <Footer/>
        </Fragment>
		);
	}
}


const mapStateToProps = function (store) {
    return {
        popupValidator:store.popupValidator.popupValidator
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
       
    }
};


export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile));