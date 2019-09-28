import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';


import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import './BlogDetails.scss';
import {getProductsDetailsById} from "../constants/products";


class BlogDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.setState({data: getProductsDetailsById(id)})
    }

    render() {
        const data = this.state.data
        return (
            <Fragment>
                <Header/>
                <div className=" container">
                    <div className="row">
                        <div className="col text-center justify-content-center ">
                            <h3 className=" container__headline font-italic ">{data.info}</h3>
                        </div>
                    </div>
                    <div className="row flex-row justify-content-around">
                        <div className="col-md-4 container__column">
                            <h3 className="  container__headline font-italic">{data.headline_1}</h3>
                            <div className="card mb-4 container__card ">
                                <img className="card-img-top card-img-100 " src={data.image_1} alt="Card image cap"/>
                                <div className="card-body ">
                                    <h3 className="container__card-title  font-italic ">{data.title_1}</h3>
                                    <p className="container__card-text font-weight-light text-primary ">{data.article_1}</p>
                                    <div className="card-footer text-muted  ">
                                        Posted on January 1, 2019
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="col-md-4 container__column">
                        <h3 className="  container__headline font-italic">{data.headline_2}</h3>
                        <div className="card mb-4 container__card ">
                            <img className="card-img-top card-img-100 " src={data.image_2} alt="Card image cap"/>
                            <div className="card-body ">
                                <h3 className="container__card-title  font-italic ">{data.title_2}</h3>
                                <p className="card-text font-weight-light text-primary ">{data.article_2}</p>
                                <div className="card-footer text-muted  ">
                                    Posted on January 1, 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 container__column">
                        <h3 className="  container__headline font-italic">{data.headline_3}</h3>
                        <div className="card mb-4 container__card ">
                            <img className="card-img-top card-img-100 " src={data.image_3} alt="Card image cap"/>
                            <div className="card-body ">
                                <h3 className="container__card-title  font-italic ">{data.title_3}</h3>
                                <p className="card-text font-weight-light text-primary ">{data.article_3}</p>
                                <div className="card-footer text-muted  ">
                                    Posted on January 1, 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default withRouter(BlogDetails)