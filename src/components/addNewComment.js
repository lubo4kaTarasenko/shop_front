import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Button, TextareaAutosize } from '@material-ui/core';
import CommentsApi from '../services/commentsApi';

export default function AddNewComment(props) {
  const [value, setValue] = React.useState(5);

  return (
    <div className='comment_cont'> 
      <h3 style={{textAlign: 'center'}}>New comment</h3>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          id='new_rating'
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box> 
      <TextareaAutosize aria-label="comment" 
        style={{width: '70%', margin:'10px'}}
        rowsMin={3} placeholder="comment" id='new_body'/>
      <div><Button variant='outlined' color='primary' onClick={() => createNewComment()}>
        Create comment
      </Button></div>
    </div>
  );

  function createNewComment(){
    const body = document.getElementById('new_body').value
    const comment = {
      product_id: props.product_id,
      rating: value,
      body: body
    }
    new CommentsApi().createComment(comment).then(
      (result) => {
        console.log(result)
      },
    )
  }
}
