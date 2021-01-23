import { fullPath } from "./baseUrl";

export default class ProductsApi{

  postProductsIds(info){
    return fetch(fullPath("/order"),{
      "method": "POST",
      "body": JSON.stringify({
        products_ids: info.products_ids,
        email: info.email,
        phone: info.phone,
        first_name: info.first_name,
        last_name: info.last_name,
        post_office: info.post_office
        
      })
     })
     .then(response => response.json())
     .catch(err => {
       console.log(err);
     })
  }
}