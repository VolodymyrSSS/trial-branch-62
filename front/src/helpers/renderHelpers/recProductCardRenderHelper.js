import React from 'react';
import {Link} from 'react-router-dom';

import {Carousel} from 'react-bootstrap';


const recProductCardRenderHelper = (data) => {

    return (data.map((obj, index) => {
        
        return(
            <div key={obj._id} className="product-card card col-md-6 col-lg-4 col-xl-3">
                <div className="product-card-inner">
                    <div className="product-card-front" >
                        <img className="product-card-front__img" 
                        src={obj.product_link.images[0]}
                        alt="front"
                        style={{width:'720',height:"465"}}
                        />
                    </div>
                    <div className="product-card-back" >
                        <img className="product-card-back__img" 
                        src={obj.product_link.images[1]}
                        alt="back"
                        style={{width:'720',height:"464"}}
                        />
                        <div className="product-card-back_more">
                            <Link className="product-card-back_more-link1" to="/"

                            data-toggle="modal"
                            data-target={".back_more-link1_modal" + obj._id}
                            
                            >
                            <i className="fa fa-eye"></i></Link>
                            <Link className="product-card-back_more-link2" to="/"><i className="fa fa-heart"></i></Link>
                        </div>
                        <button type="button" className="product-card-back__addtocart w-100">
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
                <div className="product-card_info">
                    
                    <div className={"modal fade bd-example-modal-lg" + " back_more-link1_modal"+ obj._id} tabIndex="-1" role="slider" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">

                                <Carousel>
                                    {obj.product_link.images.map((link, index) => {
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

                    <h4 className="product-card_info-tittle">
                        <Link className="product-card_info-tittle__head" to="/">{obj.product_link.brand + " " 
                            + obj.product_link.model.replace(/[-_—]+/g, ' ') + " "
                            + (obj.product_link.seria
                            ?obj.product_link.seria
                            :"")}
                            <p className={obj.product_link.ram}>
                                {obj.product_link.ram?obj.product_link.ram + "Gb/":""}
                                {obj.product_link.rom?obj.product_link.rom + "Gb":""}
                            </p>
                        </Link>
                    </h4> 
                    <span className="product-card_info_newprice">{obj.product_link.price}  {" $ "}</span> 
                        {obj.product_link.old_price != 0
                        ?<span className="product-card_info_oldprice">{obj.product_link.old_price} {" $ "}</span>
                        :null}
                    <p className="product-card_info_rating">
                        <i className={obj.product_link.star > 0?"fa fa-star":"fa fa-star-o"}></i>
                        <i className={obj.product_link.star > 1?"fa fa-star":"fa fa-star-o"}></i>
                        <i className={obj.product_link.star > 2?"fa fa-star":"fa fa-star-o"}></i>
                        <i className={obj.product_link.star > 3?"fa fa-star":"fa fa-star-o"}></i>
                        <i className={obj.product_link.star > 4?"fa fa-star":"fa fa-star-o"}></i>
                    </p>
                </div>
            </div>
        )   
    }))
}

export default recProductCardRenderHelper;