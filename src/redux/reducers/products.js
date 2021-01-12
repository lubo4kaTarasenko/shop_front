import { UPDATE_PRODUCTS } from "../actionTypes";

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  //console.log(state, action)
  switch (action.type) {
    case UPDATE_PRODUCTS: {
      const products = action.payload.products;
      return {
        ...state,
        products: products
      };
    }    
    default:
      return state;
  }
}
