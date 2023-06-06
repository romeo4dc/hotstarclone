import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { usePopup } from '../Context/Context';
import FooterFunc from './Footer';
import ProfileComp from './ProfileComp';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { firestore, useFirebase } from '../firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
const LoggedIn = (props) => {
  const [mainBorder, setMainBorder] = useState()
  const [kidsBorder, setKidsBorder] = useState()
  const [user, setUser] = useState()
  const  Func = usePopup();
  const navigate = useNavigate();
  const {setImgMSrc, setImgSrc, setProfile, ComingBG, setLdis } = Func;
  const OTPFunc = useFirebase();
  const { users, AuthUser, getDocsByQuery, number, currentUser, userEmail } = OTPFunc;

  useEffect(()=>{
    AuthUser()
    GetUser()
    if(!user){
    if(user){
    setImgMSrc(user.photoURL)
    setImgSrc(user.kPhotoURL)
  }
    getDocsByQuery()
    }
    },[])
    
    const GetUser=()=>{
      onSnapshot(collection(firestore, "user"),(snap)=>{
       snap.forEach((data)=>{
        setUser(data.data())
       })
      })
     }

  return (
    <Container>
      <Top>
      <img style={{
        position:'absolute',
        top:'0',
        left:'0'
      }} src="assets/stars.svg" alt=""/>
      <Left>
        <span onClick={()=>navigate("/subscribe")}>Subscribe to enjoy Disney+ Hotstar <img src="assets/arright.svg" alt="" /></span><br/>
        {
          number ? 
        <span style={{fontWeight:'500',fontSize:'17px',letterSpacing:'.5px'}}>+91 {number}</span>
          :
        <span style={{fontWeight:'500',fontSize:'17px',letterSpacing:'.5px'}}>{userEmail}</span>
        }
      </Left>
      <Right>
        <Subscribe onClick={()=>navigate("/subscribe")}>Subscribe</Subscribe>
        <span>Plans start at ₹299</span>
        <Help onClick={()=>navigate("/logout")}><img src="assets/settings.svg" alt="" /> Help & Settings</Help>
      </Right>
      </Top>
      <Middle>
       <Header>
        <span>Profiles</span>
        <span style={{display:'flex', alignItems:'center',gap:'.5em',cursor:'pointer'}}  onClick={()=> navigate("/edit")}>
          <img src="assets/edit.svg" alt="" />
          <span style={{fontSize:'16px'}}>Edit</span>
        </span>
       </Header>
       <Profile>
        <Main onClick={()=>{
          setProfile(false)
          setMainBorder("2px solid #ffffff")
          setKidsBorder("2px solid transparent")
          if(user){
           setImgSrc(user.kPhotoURL)
          }
          }
         } >
          <img src={user && user.photoURL} alt="" style={{border:mainBorder}}/>
          <span>{user && user.mainVal}</span>
        </Main>
        <Kids onClick={()=> {
        setProfile(true)
        setKidsBorder("2px solid #ffffff")
        setMainBorder("2px solid transparent")
        if(user){
        setImgMSrc(user.photoURL)
        }
        }
        }>
          <img src={user && user.kPhotoURL} alt=""  style={{border:kidsBorder}}/>
          <span>{user && user.kidsVal}</span>
        </Kids>
        <Coming onClick={ComingBG}>
          <img src="assets/plus.svg" alt="" />
          <span>Coming Soon!</span>
        </Coming>
       </Profile>
      </Middle>
      <div style={{marginLeft:'10px'}}>
      <FooterFunc/>
      </div>
      <ProfileComp/>
    </Container>
  )
}
const Container = styled.div`
margin-left: 1em;
`;
const Top = styled.div`
margin-left: 100px;
position: relative;
background: linear-gradient(180deg,#081734,#0d1628 73px,#0e1420 168px,#0f1014 256px,#0f1014);
border-bottom: 2px solid #d3d3d312 ;
display: flex;
justify-content: space-between;
align-items: center;
/* width:100%; */
/* width:400px; */
height: 200px;
img{
    width:100%;
    height: 200px;
}
`;
const Middle = styled.div`
`; 
const Header = styled.div`
display: flex;
justify-content: space-between;
margin-left: 100px;
padding-right:4em;
padding-top: 3em;
padding-left: 1em;
span{
  color:#fff;
  font-size: 20px;
  font-weight: 600;
  transition:all .3s ease-in-out;
  &:hover{
    transform: scale(1.03);
  }
  img{
    height: 19px;
    width: 20px;
    filter: invert(1);
  }
  span:last-child{
  transition:all .3s ease-in-out;
  &:hover{
    transform: scale(1.03);
  }
}
}
`;
const Left = styled.div`
span{
  color:#e1e6f0;
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.8;
  padding-left: .5em;
  cursor: pointer;
  img{
    width:23px;
    height:18px;
    /* transform: rotateY(180deg) rotateX(0deg); */
    filter: invert(1);
  }
}
`;
const Right = styled.div`
display: flex;
gap: 1.5em;
height:50px;
position: relative;
padding-right:3em;
span{
    position: absolute;
    left: 50px;
    bottom: -28px;
    color: #707a94;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: .8px;
}
`;
const Subscribe = styled.button`
    outline: none;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: .8em 4.2em;
    border-radius: 5px;
    background: linear-gradient(93.87deg,#095ae6,#062794);
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    cursor: pointer;
    `;
const Help = styled.button`
font-size: 16px;
font-weight: 600;
color:#fff;
background: hsla(0,0%,100%,.08);
padding: .8em 1.8em;
display: flex; 
letter-spacing: .3px;
align-items: center;
border-radius: 5px;
outline: none;
border: none;
gap: .5em;
cursor: pointer;
img{
    width:23px;
    height:23px;
    filter:invert(1);
}
`;
const Profile = styled.div`
padding: 2em;
padding-left: 1em;
margin-left: 100px;
display: flex;
gap: 2.5em;
img{
  border:1px solid white;
  border-radius: 50%;
  width:95px;
  height:95px;
}
`;
const Main  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:.8em;
transition: transform .2s ease-in-out;
cursor: pointer;
span{
  color:#cad2e5;
  font-size: 14px;
  font-weight: 600;
}
&:hover{
  transform: scale(1.1);
}
`;
const Kids  = styled(Main)`
`;
const Coming  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:.8em;
cursor: pointer;
span{
  color:#cad2e5;
  font-size: 14px;
  font-weight: 600;
}
img{
  border:none;
  width:30px;
  height:30px;
  padding: 2.1em;
  background: #252833;
}
`;

export default LoggedIn;
