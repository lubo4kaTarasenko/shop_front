export default class ProductsApi{
  
  getList(q, p, f){
    return fetch(`http://localhost:3001/products?q=${q}&p=${p}&f=${f}`)
    .then(res => res.json())
  }

}
