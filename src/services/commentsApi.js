import { fullPath } from "./baseUrl";

export default class CommentsApi{
  createComment(comment){
    return fetch(fullPath(`/comments`),{
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      "body": JSON.stringify(comment)
     })
     .then(response => response.json())
     .catch(err => {
       console.log(err);
     });
  }

  updateComment(comment){
    return fetch(fullPath(`/comments`),{
    "method": "PUT",
    headers: {
      'Content-Type': 'application/json',
       Accept: 'application/json'
    },
    "body": JSON.stringify({
      id: comment.id,
      body: comment.text,
      rating: comment.rating
    })
   })
   .then(response => response.json())   
   .catch(err => {
     console.log(err);
   });
  }

  delete(id){    
    return fetch(fullPath(`/comments?id=${id}`),{
      "method": "DELETE"})
     .then(response => response.json())
     .catch(err => {
       console.log(err);
     });
  }
}