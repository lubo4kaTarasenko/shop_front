import React from 'react'
import ProductsApi from '../services/productsApi';
import CategoriesApi from '../services/categoriesApi';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import {Assignment } from '@material-ui/icons';

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

    renderCategoriesList(){
      const  categories  = this.state.categories;
      return(
        <div id='categories'>
          { categories.map(category =>                
            <div key={category.id} className="category_container">               
              <IconButton color='primary'><Assignment className='category_icon' fontSize='large'/>{category.name}</IconButton>
            </div>
          )}
        </div>
        )
    }


    renderProductsList(){
      const  products = this.state.products;
        return(
          <div id='products'>
            { products.map(product =>                
              <Paper key={product.id} className="product_container">
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

             </Paper>         
            )}
          </div>
          )
    }

  render() {
    if(this.state.products.length !== 0){
      return (
        <Grid container >        
            <Grid item xs={4} sm={2} className='categories_grid'>
             {this.renderCategoriesList()}
            </Grid>
            <Grid item xs={8} sm={10}>
              {this.renderProductsList()}
            </Grid>
        </Grid>  
    )}else{
      return(
        <div>Wait</div>
      )
    }
  }

}