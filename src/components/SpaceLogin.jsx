import React, { useEffect } from 'react'
import { useFirebase } from '../firebase/firebase'
import LoggedIn from './LoggedIn';
import MySpace from './MySpace';
import Sidebar from './Sidebar';
import { getAuth } from 'firebase/auth';
import { usePopup } from '../Context/Context';

const SpaceLogin = () => {
    const fb = useFirebase();
    const { AuthUser, currentUser } = fb;
    const Func = usePopup()
    const {setLdis} = Func;

    useEffect(()=>{
      if(!currentUser){
     AuthUser()
     console.log(currentUser)
    }
    },)
  return (
    <>
      {
        currentUser ?
        <><Sidebar/><LoggedIn/></>
        :
        <><Sidebar/><MySpace/></>
      }
    </>
  )
}

export default SpaceLogin
