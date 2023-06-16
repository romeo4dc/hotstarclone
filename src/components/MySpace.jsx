import React from 'react'
import styled from 'styled-components';
import { usePopup } from '../Context/Context';
import FooterFunc from './Footer';
import Login from './Login';
import Sidebar from './Sidebar';
import { useEffect } from 'react';

const MySpace = () => {
  const loginFunc = usePopup();
  const {setLdis} = loginFunc;
  return (
    <>
    <Container>
    <Login/>
      <Header>
        <img src="/assets/stars.svg" alt="#" />
      </Header>
      <Help>
      <a href="">
        <img src="/assets/question.svg" alt="#" />
        <span>Help & Support</span>
        </a>
      </Help>
      <Content>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_640/feature/myspace/my_space_login_in.png" alt="" />
        <h2>Login to Disney+ Hotstar</h2>
        <span>Start watching from where you let off,personalise for kids and more</span>
        <button onClick={loginFunc.logFunc}>Login Now</button>
      </Content>
      <Last>
      <FooterFunc/>
      </Last>
    </Container>
    </>
  )
}
const Container = styled.div`
`;

const Content = styled.div`
/* border: 2px solid white; */
padding-top: 3em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.2em;
background: linear-gradient(360deg, #0f1014 13%, #0046af1c 97%);
img{
  max-width: 25%;
}
h2{
  color:#fff;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -.2px;
  margin-bottom: -4px;
}
span{
font-size: .9rem;
-webkit-text-stroke: .2px;
letter-spacing: .3px;
color:#8f98b2;
}
button{
  background: transparent;
outline: none;
border: none;
color:#fff;
font-size: 16px;
font-weight: 600;
padding: 1em 5.3em;
border-radius: 5px;
background:linear-gradient(93.87deg,#095ae6,#062794);
transition: all .2s ease-in-out;
cursor: pointer;
&:hover{
  transform: scale(1.02);
}
}
`;

const Header = styled.div`
background: linear-gradient(180deg,#081734,#0d1628 73px,#0e1420 168px,#0f1014 256px,#0f1014);
img{
    width:100%;
    height: 100px;
}
`;

const Help = styled.div`
/* border: 2px solid white; */
position: absolute;
right: 60px;
top: 60px;
transition: all .3s ease-in-out;
a{
background: none;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
background-color: hsla(0,0%,100%,.08);
border-radius: 8px;
height: 2em;
padding:.57em 0em;
padding-right: 3em;
padding-left: 2em;
cursor: pointer;
}
img{
  filter: invert(1);
  transform: scale(.43);
}
span{
  font-size: 1rem;
  color:#fff;
  font-weight: 600;
  margin-left: -.5em;
}
&:hover{
  transform: scale(1.05);
}
`;

const Last = styled.div`
/* border: 2px solid red; */
margin-left: 10px;
transform: translateY(10.2em);
`;
export default MySpace;
