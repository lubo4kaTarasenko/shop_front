import { fullPath } from "./baseUrl";

export default class ProductsApi{
  getList(){
    return fetch(fullPath(`/categories`))
    .then(res => res.json())
  }
}
