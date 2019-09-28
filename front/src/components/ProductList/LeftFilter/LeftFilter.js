import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getProductsMenu} from '../../../actions/productsMenu';
import {getProductsFilters} from '../../../actions/poroductFilters';
import './LeftFilter.scss';



class LeftFilter extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getProductsMenuAction();
        this.props.getProductsFiltersAction();
    }

    render(){

        const {productsMenu, allProductsFilters} = this.props;
        
        const mainCategory = productsMenu.map((obj, index) => {

            return(<React.Fragment>
                    {(obj.lvl === 1)
                    ?<li>
                        <Link to="/">{obj.name}</Link>
                    </li>
                    :null
                    }
                </React.Fragment>
            )  
        })

        const productsFiulter =  allProductsFilters.length > 2?
            allProductsFilters.map((obj, index) => {
                    {return(
                        Object.keys(obj).map((arr, index)=>{
                            return(
                                arr != "_id"?
                            <div key={obj._id}className="type-list d-flex flex-md-column flex-wrap">
                                <span className={"type-list_"+ arr}>
                                    {arr + "s :"}
                                </span>
                                    {obj[arr].map((atr, index) => {
                                        return(
                                            <div key={atr} className="form-check_filters">
                                                <input className="form-check-input_filters" type="checkbox" value="" id={atr + "-check"}/>
                                                <label className="form-check-label_filters" htmlFor={atr + "-check"}>
                                                    {atr}
                                                </label>
                                            </div>
                                        )
                                    })}
                            </div>
                            :null
                            )
                        })
                    )}
                })
                :null
                    
        return(
            <React.Fragment>
  
                    <button class="btn hidden product-filter__btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Filter menu
                    </button>
                    
                    <div class="collapse dont-collapse-sm" id="collapseExample">
                       <div className="product-filter_category d-flex flex-column">
                            <span className="product-filter_category-title">Category</span>
                            <div className="product-filter_category_list d-flex flex-column">
                                <ul className="category_list_box-category d-flex flex-column">
                                    {mainCategory}
                                </ul>
                            </div>
                        </div>
                        <div className="product-filter_type d-flex flex-column">
                            <span className="product-filter_type-title">REFINE SEARCH</span>
                            <div className="product-filter_type-list">  
                                {productsFiulter}
                            </div>
                        </div>
                    </div>
            </React.Fragment>
            
        )
    }
}


const mapStateToProps = function (store) {
    return {
        productsMenu:store.productsMenu.productsMenu,
        allProductsFilters: store.allProductsFilters.allProductsFilters
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        getProductsMenuAction: () => dispatch(getProductsMenu()),
        getProductsFiltersAction: () => dispatch(getProductsFilters())
		
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftFilter))
