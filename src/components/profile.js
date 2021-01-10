import React from 'react'
import { Paper} from '@material-ui/core';

export default class Profile extends React.Component {     
  render() {
    console.log(this.props.isClick)
    return(  
      <Paper elevation={3} className='profile_cont'>
        <div className='profile_info inl left'>
          <div><img src="./ava.png" width='100px' alt=''/></div>
          <div>First name</div>
          <div>Last name</div>
        </div>
      </Paper>  
  )}
}

