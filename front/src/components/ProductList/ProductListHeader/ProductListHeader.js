import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './ProductListHeader.scss';

const ProductListHeader = (props) =>{

    useEffect(() => {

    });

    return(
        <div className="product-list_header d-flex align-items-center ">
            <Link to="/" className="fas fa-home"></Link>
            <Link to="/" className="product-list_header__category">?Category?</Link> 
        </div>
    )
}

export default ProductListHeader;