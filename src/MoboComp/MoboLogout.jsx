import React from 'react'
import styled from 'styled-components';
import MoboNavbar from './MoboNavbar';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import MoboSiderBar from './MoboSiderBar';
import { useEffect } from 'react';
import { useFirebase } from '../firebase/firebase';
import { usePopup } from '../Context/Context';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import Cateogory from '../components/Category';

const MoboLogout = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const Func = usePopup();
    const { isPath, setIsPath } = Func;
    const fb = useFirebase();
    const {AuthUser, currentUser, number} = fb;
    useEffect(()=>{
        AuthUser()
    },[])
    return (
        
            <>
            <MoboNavbar />
            <Container>
                <User>{
                    currentUser.photoURL ?
                  <img src={currentUser.photoURL} alt="" style={{filter:'unset',border:'none'}}/>
                  :
                  <img src="assets/newhumanuser.svg" alt="" />

                }
                    <span>Kid</span>
                    {
                        currentUser.email && <span style={{color:'ffffffd1', fontSize:'1rem'}}>{currentUser.email}</span>
                    }
                    {
                        number  && <span>{number}</span>
                    }
                    <span></span>
                </User>
                <Subscription>
                    <span>Get more with Disney+ Hotstar Premium</span>
                    <span>Only ₹1499/year</span>
                    <button onClick={() => navigate("/subscribe")}>
                        <span>GET DISNEY+ HOTSTAR PREMIUM <img src="assets/arright.svg" alt="" /></span>
                    </button>
                </Subscription>
                <Account>
                    <span>Account Settings</span><img src="assets/arright.svg" alt="" />
                </Account>
                <Others>
                    <div>
                        <span>Manage Devices</span><img src="assets/arright.svg" alt="" />
                    </div>
                    <div onClick={() => {
                        signOut(auth)
                        navigate("/")
                    }
                    }>
                        <span>Log Out</span><img src="assets/arright.svg" alt="" />
                    </div>
                    <div style={{ borderBottom: 'none' }}>
                        <span>Log Out All Devices</span><img src="assets/arright.svg" alt="" />
                    </div>
                </Others>
            </Container>
            <MoboRes>
                <div>
                    <img src="assets/home.svg" alt="" />
                    <span>Home</span>
                </div>
                <div>
                    <img src="assets/tv.svg" alt="" />
                    <span>TV</span>
                </div>
                <img src="assets/di.svg" alt="" />
                <div>
                    <img src="assets/movies.svg" alt="" />
                    <span>Movies</span>
                </div>
                <div>
                    <img src="assets/sports.svg" alt="" />
                    <span>Sports</span>
                </div>
            </MoboRes>
           <MoboSiderBar/>
           </>
        
    )
}

export default MoboLogout;

const Container = styled.div`
padding: 1em;
`;
const User = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:.3em;
margin-bottom: .5em;
img{
    width:50px;
    height:50px;
    filter: invert(1);
    border: 2px solid #000000;
    border-radius: 50%;
    padding: .5em;
}
span{
    color:#fff;
    font-weight: 600;
    font-size:1.5rem;
}
span:last-child{
    color:#ffffffd1;
    font-size: 1rem;
}
`;
const Subscription = styled.div`
background: #0b162b;
display: flex;
flex-direction: column;
border-radius:.5em;
gap:.5em;
padding: 1em;
span{
    color:#fff;
    font-size:1.2rem;
}
span:nth-child(2){
    color:#ffffffd1;
    font-size: 1rem;
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .1em;
    color:#fff;
    background:#1854ff;
    border: none!important;
    border-radius:5px;
    padding: 1em 0em;
    span{
        color:#fff;    
        font-size: .9rem;
    }
    img{
        width:12px;
        height: 10px;
        filter: invert(1);
        margin: 0!important;
    }
}
`;
const Account = styled.div`
display: flex;
justify-content: space-between;
padding: 1em ;
background: #0b162b;
margin:.5em 0em;
background: #0b162b;
span{
    color:#fff;
    letter-spacing: .3px;
    font-size: 1.1rem;
}
img{
    width:15px;
    height: 13px;
    filter: invert(1);
}
`;
const Others = styled(Account)`
background: #0b162b;
flex-direction: column;
border-radius: .5em;
padding: 0em;
div{
    display: flex;
    justify-content: space-between;
    padding:1em;
    border-bottom:1px solid #8080803d;
}
`;
const MoboRes = styled.div`
position: fixed;
bottom: 0;
width:100%;
height: 16%;
display: none;
z-index:99999;
justify-content: space-between;
background: #0f1014;
padding: 0em .5em;
div{
display: flex;
flex-direction: column;
align-items: center;
height:50%;
margin: auto 0em;
gap:.5em;
img{
  width:60%;
  height:100%;
}
span{
  font-weight: 500;
  color:#fff;
}
}
  img{
    z-index:99999;
    height:50%;
    cursor: pointer;
    margin:auto 0em;
  }
@media (max-width:768px){
  display:flex;
}
`;