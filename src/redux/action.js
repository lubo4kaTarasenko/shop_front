import {UPDATE_PRODUCTS} from "./actionTypes";

export const updateProducts = products => ({type: UPDATE_PRODUCTS, payload: { products } });