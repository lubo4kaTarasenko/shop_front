import { fullPath } from "./baseUrl";

export default class ProductsApi{

  postProductsIds(info){
    return fetch(fullPath("/order?message=Success"),{
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      "body": JSON.stringify({
        products: info.products,
        email: info.email,
        phone: info.phone,
        first_name: info.first_name,
        last_name: info.last_name,
        post_office: info.post_office,
        city: info.city
        
      })
     })
     .then(response => response.json())
     .catch(err => {
       console.log(err);
     })
  }
}