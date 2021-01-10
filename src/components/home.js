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
              <div key={product.id} className="product">
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    {product.name}
                  </Grid>
                  <Grid item xs={3}>
                    {product.category}
                  </Grid>
                  <Grid item xs={6}>
                    {product.price}
                  </Grid>
                </Grid>

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