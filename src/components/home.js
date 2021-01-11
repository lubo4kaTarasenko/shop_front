import React from 'react'
import ProductsApi from '../services/productsApi';
import CategoriesApi from '../services/categoriesApi';
import Grid from '@material-ui/core/Grid';
import CategoriesList from './categoriesList';
import ProductsList from './productsList';


export default class Home extends React.Component {    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        products: [],
        categories: []
      }
    }
    componentDidMount() {
        this.loadListOfProducts()
        this.loadListOfCategories()
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

    loadListOfCategories(){
      new CategoriesApi().getList().then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            categories: result.categories
          });
        },
      )
    }

  render() {
    if(this.state.products.length !== 0){
      return (
        <Grid container >        
            <Grid item xs={4} sm={2} className='categories_grid'>
              <CategoriesList categories={this.state.categories}/>
            </Grid>
            <Grid item xs={8} sm={10}>
              <ProductsList products={this.state.products}/>
            </Grid>
        </Grid>  
    )}else{
      return(
        <div>Wait</div>
      )
    }
  }

}