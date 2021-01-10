import React from 'react'
import ProductsApi from '../services/productsApi';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Home extends React.Component {    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        products: []
      }
    }
    componentDidMount() {
        this.loadListOfProducts()
      }

    loadListOfProducts(){
      new ProductsApi().getList().then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
      )
    }

    renderProductsList(){
      const {error,  isLoaded, products } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
        return(
          <div id='products'>
            { products.map(product =>                
              <div key={product.id} className="product_container">
                  <div className='product_attr'>
                    <b>{product.name}</b>
                  </div>
                  <div className='product_attr' >
                    <i>{product.category}</i>
                  </div >
                  <div className='product_attr' >
                    <img src="./ava.jpg" width='100px' alt=''/>
                  </div >
                  <div className='product_attr'>
                    <h3>price: {product.price} $</h3>
                  </div >

             </div>         
            )}
          </div>
          )}
    }

  render() {
    if(this.state.products.length !== 0){
      return (
        <div>        
          <div>
              {this.renderProductsList()}
          </div>
        </div>  
    )}else{
      return(
        <div>Wait</div>
      )
    }
  }

}