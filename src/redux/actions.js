import {UPDATE_PRODUCTS} from "./actionTypes";
import {UPDATE_PAGES} from "./actionTypes";

export const updateProducts = products => ({type: UPDATE_PRODUCTS, payload: { products } });
export const updatePages = pages => ({type: UPDATE_PAGES, payload: { pages } });