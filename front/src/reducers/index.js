import { combineReducers } from 'redux';
import { customerReducer } from './customer';
import { popupValidatorReducer } from './popupValidator';
import { slideReducer } from './slide';
import { productsMenuReducer } from './productsMenu';
import { recProductReducer } from './recommendedProduct';
import { allProductsReducer } from './products';
import { allProductsFiltersReducer } from './allProductsFilters';
import { authenticationReducer } from './authentication';
import { subscribeReducer } from './subscribe';

export const rootReducer = combineReducers({
    customer: customerReducer,
    popupValidator: popupValidatorReducer,
    slide: slideReducer,
    productsMenu: productsMenuReducer,
    recProduct: recProductReducer,
    allProducts: allProductsReducer,
    allProductsFilters: allProductsFiltersReducer,
    loginIs: authenticationReducer,
    subscribe: subscribeReducer
});
