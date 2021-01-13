export default class ProductsApi{
  
  getList(q, p){
    return fetch(`http://localhost:3001/products?q=${q}&p=${p}`)
    .then(res => res.json())
  }

}
