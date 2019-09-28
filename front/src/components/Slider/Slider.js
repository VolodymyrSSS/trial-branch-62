import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import { getSlides } from '../../actions/slide'
import "./Slider.css"

class AdvertisingSlider extends Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getSlides();
    }

    render() {

        const { slides } = this.props;

        let banners = slides.map((slide, index) => {

            return <a href="/" className={"carousel-item" + (index == 0 ? " active" : "")} data-interval="3500">

                < img src={slide.imgUrl} className="d-block w-100" alt="notebooks" />
                <div className="carousel-caption d-none d-md-block">
                    <h1 className={`display-4 ${+slide.textDark ? 'text-body' : 'text-white'} ${+slide.textRight ? 'text-right' : 'text-left'}`}>{slide.bannerTitle}</h1>
                    <p className={`${+slide.textDark ? 'text-body' : 'text-white'} ${+slide.textRight ? 'text-right' : 'text-left'}`}>{slide.description}</p>
                </div>
            </a >
        })

        return (
            <div className="slidercontainer">
                <div className="bd-example">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                            {banners}
                        </div>
                        <a className="carousel-control-prev " href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="arrow-wraper">
                                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="arrow-wraper">
                                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}




const mapStateToProps = function (store) {
    return {
        slides: store.slide.slides,
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        getSlides: () => dispatch(getSlides())
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AdvertisingSlider))
