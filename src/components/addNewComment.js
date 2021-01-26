import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextareaAutosize } from '@material-ui/core';

export default function AddNewComment() {
  const [value, setValue] = React.useState(5);

  return (
    <div className='comment_cont'> 
      <h3 style={{textAlign: 'center'}}>New comment</h3>
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
        rowsMin={3} placeholder="comment"/>
    </div>
  );
}
