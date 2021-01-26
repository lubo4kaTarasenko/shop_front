import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { IconButton, Paper } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { useAtom } from 'jotai'
import { emailAtom } from '../atoms/shopAtoms'
import AddNewComment from './addNewComment';

export default function ShowAllComments(props) { 
  const [email, setEmail] = useAtom(emailAtom) 
  return (
    <Paper style={{padding: '10px'}}>
      <AddNewComment/>
      { props.comments.length > 0 && <h3 style={{textAlign: 'center'}}>Comments</h3> }
      { props.comments.map(c =>                
        <div key={c.id} className='comment_cont'>      
          <Box component="fieldset" mb={3} borderColor="transparent">            
            <Rating name="read-only" value={c.rating} readOnly />
            <Typography>{c.body}</Typography>
            <Typography><b style={{fontSize: 'small'}}>{c.email}</b>
              {renderCommentsButtons(c.email)}
            </Typography>
          </Box> 
      </div> 
      )}    
    </Paper>
  );
  function renderCommentsButtons(commentEmail){
    if(email === commentEmail ){
      return(
        <React.Fragment>
            <IconButton color='primary'>
              <Edit fontSize='small'/>
            </IconButton>
            <IconButton color='secondary'>
              <Delete fontSize='small'/>
            </IconButton>
        </React.Fragment>
    )}
  }
}