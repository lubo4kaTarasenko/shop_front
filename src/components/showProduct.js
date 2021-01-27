import React from 'react';
import ProductsApi from '../services/productsApi';
import {ShoppingCart, Star } from '@material-ui/icons';
import {Paper, Grid, IconButton} from '@material-ui/core';
import PromotionStepper from './promotionStepper';
import cookie from 'react-cookies'
import { useAtom } from 'jotai'
import {cartAtom} from '../atoms/shopAtoms'
import {useEffect, useState} from 'react'
import ShowAllComments from './showAllComments';

export default function ShowProduct(props) {  
  const [product, setProduct] = useState({})
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState([])
  useEffect(() =>{loadProduct()}, []) 
  const [cart, setCart] = useAtom(cartAtom)

  function loadProduct(){
    new ProductsApi().getProduct(props.match.params.url_name).then(
      (result) => {
        setProduct(result.product);
        setComments(result.comments);
        setNewComment(result.new_comment);
      },
    )
  }
  return(  
    <div>    
        <Grid container  style={{paddingTop: '20px'}}>     
          <Grid item xs={12} sm={2} md={12} lg={2} ></Grid>     
          <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className='show_product_paper'>
            <div className='product_show_img show'><img src={product.image} width='200px'/></div>
            {product.rating && <div style={{marginLeft: '40px'}}><Star style={{color: '#ffb400'}}/><b>{product.rating}</b></div>}
            </Paper>
          </Grid>  
          <Grid item xs={12} sm={4} md={8} lg={4}>   
            <Paper className='show_product_paper'>                 
              <div className='product_show_name show'><b>name: </b> {product.name}</div>                    
              <div className='product_show_description show'><b>description: </b>{product.description}</div>
              <div className='product_show_country show'><b>country: </b>{product.country}</div> 
              <div className='product_show_price show' style={{color: 'green'}}><b>price: </b>{product.price} $ </div>
              <IconButton 
                variant='contained' className='category_btn'
                style={{color: 'green'}}
                onClick={()=>{addToCart()}}>                     
              <ShoppingCart  fontSize='large'/>
                BUY
            </IconButton>
            { addedNumber() }
            </Paper>                
          </Grid>                       
        </Grid>  
        <Grid container >        
            <Grid item xs={12} sm={2} md={12} lg={2} ></Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              {
                product.id && <ShowAllComments loadProduct={ loadProduct } product_id={product.id} 
                                               comments={comments} newComment={newComment} />
              }
            </Grid> 
        </Grid>       
        <Grid container >        
            <Grid item xs={12} sm={2} md={12} lg={2} ></Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}><PromotionStepper/></Grid> 
        </Grid> 
      </div>
  )

  function addToCart(){
    let currentCart = JSON.parse(JSON.stringify(cart))
    if(currentCart[product.id]){
      currentCart[product.id].count++
    }
    else{
      currentCart[product.id] = { 
        'price': product.price, 
        'count': 1,
        'name': product.name,
        'id': product.id
      }
    }
    cookie.save('cart', currentCart, { path: '/' })
    setCart(currentCart)
  }

  function addedNumber() {
    if(cart[product.id]){
      return `Added to cart ${ cart[product.id].count > 1 ? `x${cart[product.id].count}` : '' }`
    } else {
      return '';
    }
  }
}