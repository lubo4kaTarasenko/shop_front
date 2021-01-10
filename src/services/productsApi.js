export default class ProductsApi{
  
  getList(){
    return fetch(`http://localhost:3001/products`)
    .then(res => res.json())
  }

}
