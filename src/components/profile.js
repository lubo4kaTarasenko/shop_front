import React from 'react'
import { Paper, Button} from '@material-ui/core';
import cookie from 'react-cookies'
import UserApi from '../services/userApi';
import { useAtom } from 'jotai'
import {emailAtom } from '../atoms/shopAtoms'
import { Redirect} from "react-router-dom";

export default function Profile() {  
  const [email, setEmail] = useAtom(emailAtom)
  if(email === '' || !email) return <Redirect push to={'/'} />
  return(      
    <Paper elevation={3} className='profile_cont'>
      <div className='profile_info'>
        <div>{email}</div>
        <div>History of orders</div>
        <Button variant='contained' color='secondary' onClick={() => {logOut()}}>LOG OUT</Button>
      </div>
    </Paper>  
  )
  function logOut(){    
    new UserApi().deleteSession().then(
      (result) => {
        console.log(result) 
        cookie.remove('token', { path: '/' })
        cookie.remove('email', { path: '/' })
        setEmail('')         
    })
  }

}

