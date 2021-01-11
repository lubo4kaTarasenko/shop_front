export default class ProductsApi{
  
  getList(){
    return fetch(`http://localhost:3001/categories`)
    .then(res => res.json())
  }

}
