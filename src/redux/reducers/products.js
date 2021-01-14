import { UPDATE_PRODUCTS, UPDATE_PAGES } from "../actionTypes";

const initialState = {
  products: [],
  pages: 1 
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS: {
      const products = action.payload.products;
      return {
        ...state,
        products: products
      };
    }
    case UPDATE_PAGES: {
      const pages = action.payload.pages;
      return {
        ...state,
        pages: pages
      };
    }        
    default:
      return state;
  }
}
