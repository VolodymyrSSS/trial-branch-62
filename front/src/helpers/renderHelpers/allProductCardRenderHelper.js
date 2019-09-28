import React from 'react';
import {Link} from 'react-router-dom';

import {Carousel} from 'react-bootstrap';


const allProductCardRenderHelper = (data, gridType) => {

    return (data.map((obj, index) => {
        
        return(
            <div key={obj._id + obj.price} className={
                (gridType==="row")?
            "product-card card col-6 col-lg-4":
            "product-card w-100 d-flex"}
            >
                <div className="product-card-inner">
                    <div className="product-card-front" >
                        <img className="product-card-front__img" 
                        src={obj.images[0]}
                        alt="front"
                        style={{width:'720',height:"465"}}
                        />
                    </div>
                    <div className="product-card-back">
                        <img className="product-card-back__img" 
                        src={obj.images[1]}
                        alt="back"
                        style={{width:'720',height:"464"}}
                        />
                        <div className="product-card-back_more">
                            <Link className="product-card-back_more-link1" to="/"
                            data-toggle="modal"
                            data-target={".back_more-link1_modal" + obj._id}>
                            <i className="fa fa-eye"></i></Link>
                            <Link className="product-card-back_more-link2" to="/"><i className="fa fa-heart"></i></Link>
                        </div>
                        <button type="button"
                        className="product-card-back__addtocart p-2">
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>

                <div className="product-card_info text-center">
                    
                    <div className={"modal fade bd-example-modal-lg" + " back_more-link1_modal"+ obj._id} tabIndex="-1" role="slider" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">

                                <Carousel>
                                    {obj.images.map((link, index) => {
                                        return (
                                            <Carousel.Item key={link}>
                                            <img className="modal-content__img" 
                                            src={link}
                                            alt="front"
                                            style={{width:'720',height:"465"}}
                                            />
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className={
                        (gridType==="row")?
                    "product-card_info-row":
                    "product-card_info-row d-flex flex-column justify-content-center align-items-center"}>
                        <h4 className="product-card_info-tittle">
                            <Link className="product-card_info-tittle__head" to="/">{obj.brand + " " 
                                + obj.model.replace(/[-_—]+/g, ' ') + " "
                                + (obj.seria
                                ?obj.seria
                                :"")}
                                <p className={obj.ram}>
                                    {obj.ram?obj.ram + "Gb/":""}
                                    {obj.rom?obj.rom + "Gb":""}
                                </p>
                            </Link>
                        </h4> 
                        <span className="product-card_info_newprice" >{obj.price}  {" $ "}</span> 
                            {obj.old_price != 0
                            ?<span className="product-card_info_oldprice">{obj.old_price} {" $ "}</span>
                            :null}
                        <p className="product-card_info_rating">
                            <i className={obj.star > 0?"fa fa-star":"fa fa-star-o"}></i>
                            <i className={obj.star > 1?"fa fa-star":"fa fa-star-o"}></i>
                            <i className={obj.star > 2?"fa fa-star":"fa fa-star-o"}></i>
                            <i className={obj.star > 3?"fa fa-star":"fa fa-star-o"}></i>
                            <i className={obj.star > 4?"fa fa-star":"fa fa-star-o"}></i>
                        </p>
                    </div>
                </div>
            </div>
        )   
    }))
}

export default allProductCardRenderHelper;