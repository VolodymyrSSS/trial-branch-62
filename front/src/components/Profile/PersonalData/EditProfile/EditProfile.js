import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { InputGroup,FormControl, Button, Form, Col } from 'react-bootstrap';

import './EditProfile.scss'
import FormValidator from '../../../../modules/formValidator';
import formRules from '../../../../modules/formValidationRules';

import {editProfile} from "../../../../actions/profile";



class EditProfile extends Component {

    constructor(props) {
        super(props)

        this.validator = new FormValidator(formRules);
        
        this.state = {
            email:'',
            login:'',
            firstName:'',
            lastName:'',
            validation: this.validator.valid(),
        }

        this.submitted = false;
    }
    
    handleInputChange = event => {
        event.preventDefault();
        
        this.setState({
          [event.target.name]: event.target.value,
        });
    }
        
      handleFormSubmit = event => {
        event.preventDefault();
    
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;
    
        if (validation.isValid) {
            this.props.editProfileAction(this.state.email, this.state.login, this.state.firstName, this.state.lastName);
        }
    }

    componentDidMount(){

        this.setState({
            email:this.props.customer.customer.email,
            login:this.props.customer.customer.login,
            firstName:this.props.customer.customer.first_name,
            lastName:this.props.customer.customer.last_name,
        })
    }

    render() {
        const {customer} = this.props.customer;

        let validation = this.submitted?            // if the form has been submitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation                   // otherwise just use what's in state

        return(
            <InputGroup className="d-flex flex-column align-items-center justify-content-center">
                <Form.Group as={Col} md="5" className={"mt-3 " + `${validation.email.isInvalid && 'has-error'}`}>
                    <Form.Label>Your email</Form.Label>
                    <FormControl
                        aria-label="Your Email"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Your Email"
                        name="email"
                        ref={ref => this.email = ref}
                        defaultValue={customer.email}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.email.message}</span>
                </Form.Group>
                <Form.Group as={Col} md="5" className={"mt-3 " + `${validation.login.isInvalid && 'has-error'}`}>
                    <Form.Label>Your login</Form.Label>
                    <FormControl
                        aria-label="Your login"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Your login"
                        name="login"
                        ref={ref => this.login = ref}
                        defaultValue={customer.login}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.login.message}</span>
                </Form.Group>
                <Form.Group as={Col} md="5" className={"mt-3 " + `${validation.firstName.isInvalid && 'has-error'}`}>
                    <Form.Label>First name</Form.Label>
                    <FormControl
                        aria-label="First name"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="First name"
                        name="firstName"
                        ref={ref => this.firstName= ref}
                        defaultValue={customer.first_name}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.firstName.message}</span>
                </Form.Group>
                <Form.Group as={Col} md="5" className={"mt-3 " + `${validation.lastName.isInvalid && 'has-error'}`}>
                    <Form.Label>Last name</Form.Label>
                    <FormControl
                        aria-label="Last name"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Last name"
                        name="lastName"
                        ref={ref => this.lastName = ref}
                        defaultValue={customer.last_name}
                        onChange={this.handleInputChange}
                    />
                    <span className="help-block">{validation.lastName.message}</span>
                </Form.Group>
                <Button variant="info" type="submit" className="mt-5" 
                    onClick={this.handleFormSubmit}>
                        Edit profile
                </Button>
          </InputGroup>
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
        editProfileAction:(email, login, firstName, lastName) => dispatch(editProfile(email, login, firstName, lastName)),

    }
};


export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile));
