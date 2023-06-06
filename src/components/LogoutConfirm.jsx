import React from 'react'
import styled from 'styled-components';
import { getAuth, signOut } from 'firebase/auth';
import { usePopup } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
const LogoutConfirm = () => {
    const auth = getAuth()
    const Func = usePopup();
    const {ComingBG, csBg, cs} = Func;
    const navigate = useNavigate()
    return (
      <ProfileSec style={{background:csBg, display:cs}}>
        <MoreProfiles className='pranim'>
        <img style={{
          position:'absolute',
          top:'20px',
          right:'20px',
          height:'30px',
          width:'30px',
          filter:'invert(1)',
          cursor:'pointer'
        }} src="assets/cross.svg" alt="" onClick={ComingBG} />
          <MoreCont>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/web-images/prompt-box-logout-icon" alt="" />
            <span>Are you sure you want to log out?</span>
            <span style={{marginBottom:'1em'}}>You will be asked to log in again to watch your favourites.</span>
          </MoreCont>
          <BtnSec>
          <Cancel onClick={ComingBG}>
            Cancel
          </Cancel>
          <LoggedOut onClick={()=> 
         { signOut(auth)
          navigate("/")}
          }>
            Log Out
          </LoggedOut>
          </BtnSec>
        </MoreProfiles>
        </ProfileSec>
    )
}

export default LogoutConfirm;

const ProfileSec = styled.div`
position:fixed;
left:50%;
top:50%;
transform: translate(-50%,-50%);
width:100%;
height:100%;    
z-index:200;
background: rgba(0,0,0,0.85);
`;
const MoreProfiles = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
position:absolute;
left:50%;
top:50%;
transform: translate(-50%,-50%);
width:43em;
aspect-ratio:2/1;
background:#16181f;
padding:3.8em 0em;
border-radius: .5em;
`;
const MoreCont = styled.div`
display: flex;
flex-direction: column;
align-items:center;
width:100%;
gap:.8em;
padding:2em 0em;
img{
width:15em;
margin-top:-2em;
}
span:nth-child(2){
  color:#e1e6f0;
  font-size:20px;
  font-weight: 600;
  margin-top:.6em;
}
span:nth-child(3){
  color:#8f98b2;
  font-size:12px;
  font-weight: 400;
  letter-spacing: .5px;
}
`;
const BtnSec = styled.div`
display: flex;
justify-content: center;
gap: 1em;
`;
const LoggedOut = styled.button`
    outline: none;
    border: none;
    color: #fff;
    font-size: 16px;
    /* margin:0 auto; */
    font-weight: 600;
    padding: 1em 8.5em;
    border-radius: 5px;
    background: linear-gradient(93.87deg,#095ae6,#062794);
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    cursor: pointer;
    transition: transform .3s ease-in-out;
    &:hover{
      transform: scale(1.02);
    }
`;
const Cancel = styled.button`
    outline: none;
    border: none;
    color: #fff;
    font-size: 16px;
    /* margin:0 auto; */
    font-weight: 600;
    padding: 1em 4.5em;
    border-radius: 5px;
    background: #252833;
    transition: transform .3s ease-in-out;
    cursor:pointer;
    &:hover{
      transform: scale(1.02);
    }
`;