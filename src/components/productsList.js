import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { updateProducts } from "../redux/actions";
import { Redirect} from "react-router-dom";

function ProductList(props) {
  return (
    <div id='products'>
      { props.products.map(product =>                
        <div onClick={() =>{productRedirect(product.url_name)}} key={product.id} className="product_block">
        <Paper className="product_container" >
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
      </div>       
      )}
    </div>
  )
  function productRedirect(url_name){
    return(
      <Redirect to={`/product/${url_name}`}/>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      products: state.products.products
    }
}
  
  export default connect(
    mapStateToProps,
    { updateProducts }
  )(ProductList);
  
