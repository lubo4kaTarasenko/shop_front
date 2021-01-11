import Paper from '@material-ui/core/Paper';
function ProductList(props) {
  return (
    <div id='products'>
      { props.products.map(product =>                
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
  )}
export default ProductList;