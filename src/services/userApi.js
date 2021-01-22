import { fullPath } from "./baseUrl";

export default class UserApi {

  deleteSession(){
    return fetch(fullPath("/users/sign_out"),{
      "method": "DELETE",
      })
      .catch(err => {
        console.log(err);
    });
  }  
}
