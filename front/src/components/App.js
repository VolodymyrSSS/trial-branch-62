import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Home from './Home/Home';
import BlogDetails from "./Blog/BlogDetails/BlogDetails";
import Profile from './Profile/Profile';
import ProductList from './ProductList/ProductList';
import ProductId from './ProductId/ProductId';
import Checkout from './Checkout/Checkout';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import NotFound from "./Page404/Page404";

import checkAccessExpHelper from '../helpers/tokenHelpers/checkAccessExp';
import updateAccessTokenHelper from '../helpers/tokenHelpers/updateAccessTokenHelper';
import '../scss/style.scss';


if (checkAccessExpHelper()) {  //refresh token
	updateAccessTokenHelper(window.location.href)
}

class App extends Component {

	constructor(props) {
		super(props);

	}


	componentDidMount() {
		if (localStorage.getItem('accessToken') != null)
			this.props.checkAuthAction();
	}

	render() {


		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/product-list" component={ProductList} />
					<Route exact path="/productId" component={ProductId} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/blog" component={Profile} />
					<Route exact path="/blog/id" component={Profile} />

					<PrivateRouter exact path="/profile" component={Profile} />
					<Route path="/login" component={() =>
						<LoginForm />
					} />
					<Route path="/registration" component={() =>
						<RegistrationForm />
					} />
					<Route path="/blog-posts/:id" component={(props) =>
						<BlogDetails {...props} />
					} />

					<Route path="*" component={NotFound} />
				</Switch>
		</React.Fragment>				
		);
	}
}

const mapStateToProps = function (store) {
	return {
		
	}

};
const mapDispatchToProps = function (dispatch) {
	return {
		
	}
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(App))
