import React from 'react'
import styled from 'styled-components';
import { usePopup } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../firebase/firebase';
const MoboNavbar = () => {
    const navigate = useNavigate();
    const fb =  useFirebase();
    const Func = usePopup()
    const { setSideBar } = Func;
    const { AuthUser } = fb;
  return (
    <Nav>
    <Left>
        <img src="assets/hamicon.svg" alt="" onClick={()=>{
            setSideBar(true)
            AuthUser()
            }}/>
        <img src="assets/dph.svg" alt="" onClick={()=>navigate("/")}/>
        <button onClick={()=>navigate("/subscribe")}>SUBSCRIBE</button>
    </Left>
    <img src="assets/search.svg" alt="" />
</Nav>
  )
}

export default MoboNavbar;

const Nav = styled.div`
display: flex;
height:60px;
align-items: center;
padding: 0em 1em;
img{
    width:3%
}
`;
const Left = styled.div`
width:fit-content;
display:flex;
align-items:center;
height:100%;
gap:1em;
img:first-child{
    width:4%;
}
img:nth-child(2){
    width:19%;
    filter: invert(1);
    margin-bottom:10px;
}
button{
    color: #fff;
    background: #005eff;
    border: none;
    font-weight: 500;
    padding: .3em .6em;
    font-size: .7rem;
    border-radius: 4px;
    letter-spacing: .3px;
}
`;
