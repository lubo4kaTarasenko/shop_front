import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Button, TextareaAutosize } from '@material-ui/core';
import CommentsApi from '../services/commentsApi';

export default function EditComment(props) {
  const [value, setValue] = React.useState(props.comment.rating);

  return (
    <div className='comment_cont'> 
      <h3 style={{textAlign: 'center'}}>Edit comment</h3>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box> 
      <TextareaAutosize aria-label="comment" 
        style={{width: '70%', margin:'10px'}}
        rowsMin={3} placeholder="comment" id='edit_body'>
        {props.comment.body}
        </TextareaAutosize>
      <div><Button variant='outlined' color='primary' onClick={() => editComment()}>
        Update comment
      </Button></div>
    </div>
  );

  function editComment(){
    const body = document.getElementById('edit_body').value
    const comment = {
      id: props.comment.id,
      rating: value,
      body: body
    }
    new CommentsApi().updateComment(comment).then(
      (result) => {
        console.log(result)
        props.loadProduct()
        props.setEditable(false)
      },
    )
  }
}
