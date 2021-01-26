import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

export default function ShowAllComments(props) {  
  return (
    <Paper>
      <h3 style={{textAlign: 'center'}}>Comments</h3>
      { props.comments.map(c =>                
        <div key={c.id}>      
          <Box component="fieldset" mb={3} borderColor="transparent">            
            <Rating name="read-only" value={c.rating} readOnly />
            <Typography>{c.body}</Typography>
            <Typography><b style={{fontSize: 'x-small'}}>{c.email}</b></Typography>
          </Box> 
      </div> 
      )}    
    </Paper>
  );
}