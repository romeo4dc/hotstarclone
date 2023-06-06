import React, { useState } from 'react'
import styled from 'styled-components';
import MainHome from './MainHome';
import Sidebar from "./Sidebar"
import { usePopup } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { firestore, useFirebase } from '../firebase/firebase';
import { QuerySnapshot, collection, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import MoreLikeThis from "../categories/MoreLikeThis";
import FooterFunc from './Footer';
const Shows = () => {
    const [user, setUser] = useState();
    const [active, setActive] = useState(false);
    const fb = useFirebase();
    const navigate = useNavigate();
    const context = usePopup();
    const { Bg, plus, Plusfunc, chk, Chkfunc, cInfo, pInfo } = context;
    const { showsArr, showsData, getDocsByQuery } = fb;

    useEffect(()=>{
        const colRef = collection(firestore, "shows")
        const unsubscribe = onSnapshot(colRef,(data)=>{
            const newData = data.docs.map((doc)=>doc.data())
            setUser(newData)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const Func=()=>{
        let nav = document.querySelector('.navbar')
        if(window.pageYOffset >= 550){
            nav.style.padding="3em 0em"
            nav.style.position = "sticky";
        }
        if(window.pageYOffset <= 550 ){
            nav.style.padding="1.5em 0em"
        }
    }
    window.addEventListener('scroll', Func)
    return (
        <>
        <Sidebar/>
        <Container className="main" style={{background: `url(${user && user.length > 0 ? user[0].img : ''}) no-repeat center/cover`}}>
        <Left>  
            <Title>
                <span>2023</span>
                <span>-</span>
                <span>2h 11m</span>
                <span>-</span>
                <span>Hindi</span>
                <span>-</span>
                <span>U/A 13+</span>
            </Title>
            <Desc>
            {
                user &&
                user.map((val,ind)=>{
                    return(
                <p key={ind}>{val.desc}</p>
                )
                })
            }
            </Desc>
            <SubTitle>
            {
                user &&
                user.map((val,ind)=>{
                    return(
                <span key={ind}>{val.subtitle}</span>
                )
                })
            }
            </SubTitle>
            <ButtonSec onClick={Bg}>
                <Buttons>
                    <img src="assets/play.svg" alt="" />
                    <Button onClick={()=>navigate('/subscribe')}>Subscribe to Watch</Button>
                </Buttons>
                <Plus style={{display:plus}} onClick={Plusfunc}>+</Plus>
                <img style={{display:chk}} onClick={Chkfunc} src="assets/check.svg" alt="#" />
                <span className='watch' style={{display:cInfo}}>Watchlist <span></span></span>
                <span className='add' style={{display:pInfo}}>Add to watchlist <span></span></span>
            </ButtonSec>
        </Left>
        </Container>
        <Bottom>
        <Navbar className="navbar">
            <span onClick={()=>setActive(true)}><a href="#MoreLikeThis" className={active ? 'navActive': ''}>More Like This</a></span>
            <span onClick={()=>setActive(false)}><a href="#Trailers&More" className={!active ? 'navActive': ''}>Trailers & More</a></span>
            </Navbar>
            <div id="MoreLikeThis">                
            <MoreLikeThis/>
            </div>
            <Trailer id="Trailers&More">
                <Heading>
                <span>Trailer & More</span></Heading>
                    <img src={user && user.length > 0 && user[0].img} alt="" />
                 <Details>
                 <img src="assets/play.svg" alt="" />
                    <span>1m</span>
                 </Details>
                    <Name>
                        {
                            user &&
                            <span>{user[0].subtitle}</span>
                        }
                    </Name>
            </Trailer>
        </Bottom>
        <div style={{marginLeft:'10px',paddingTop:'15em' }}><FooterFunc/></div>
        </>
    )
}

export default Shows;

const Container = styled.div`
/* border: 2px solid red; */
margin-left: 100px;
min-height:530px;
display: flex;
align-items: end;
justify-content: space-between;
padding-bottom: 1em;
background:linear-gradient(178.5deg,rgba(15,16,20,0) 57.9%,rgba(15,16,20,.01) 64.8%,rgba(15,16,20,.05) 67.56%,#0c0d11 96.94%),linear-gradient(90deg,#01040f,rgb(7 8 15 / 85%) 16.15%,rgb(4 5 7 / 73%) 25.52%,rgba(15,16,20,.6) 32.81%,rgba(15,16,20,.05) 52.08%,rgba(15,16,20,0) 65.1%),url(https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/8742/1478742-i-03dfaf5cb374) no-repeat center/cover;
background-attachment: fixed!important;
object-fit: cover;
position: relative;
&:after{
    content:"";
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height:10%;
    background:linear-gradient(180deg,rgba(15,16,20,0),#0f1014);
    z-index: 99999;
}
span{

}
`;
const Bottom = styled.div`
margin-left: 100px;
padding: 0 .5em ;
`;
const Navbar = styled.div`
display: flex;
gap: 4em;
padding: 1.5em 0em;
border-bottom: 2px solid #80808054;
position: relative;
top: 0;
bottom: 0;
z-index: 9999999;
background: #0f1014;
transition: all .35s ease-in-out;
cursor: pointer;
span{
    -webkit-text-stroke: .6px;
    letter-spacing: .5px;
    font-size: 1.15rem;
    a{
        text-decoration: none;
        color:hsla(0,0%,100%,.6);
    }
}
span:last-child{
    a{
        color:hsla(0,0%,100%,.6);
    }
}
`;

const Name = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    span{
        color:hsla(0,0%,100%,.9);
        -webkit-text-stroke: .3px;
        letter-spacing: .4px;
        font-size: 1.05rem;
        padding: 0 1em;
    }
`;
const Trailer = styled.div`
width:280px;
height: fit-content;
display: flex;
flex-direction: column;
gap: .5em;
padding-top: 1em;
transition: all .3s ease-in-out;
cursor: pointer;
img{
    width:100%;
    height: 160px;
    border-radius: 5px;
}
&:hover{
    margin-left: 1.5em;
    transform: scale(1.15);
}
`;
const Heading = styled.div`
span{
    color:#fff;
    -webkit-text-stroke: .6px;
    letter-spacing: .9px;
    font-size: 1.3rem;  
}
`;
const Details = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1em;
margin-top: -40px;
margin-bottom: 8px;
span{
    color:#fff;
    font-weight: 600;
    font-size: .8rem;
}
img{
    width:25px;
    height: 25px;
}
`;
const Left = styled.div`
/* border:2px solid green; */
max-width:480px;
height: fit-content;
display: flex;
flex-direction: column;
margin-left:.5em;
gap: 1.3em;
`;
const Title = styled.div`
display:flex;
gap:.5em;
align-items: center;
span:last-child{
background: hsla(0,0%,100%,.2);
border-radius: 4px;
/* height: 100%; */
padding: .3em .7em;
}
span{
font-size: 16px;
font-weight: 600;
line-height: 20px;
color: hsla(0,0%,100%,.84);
}
`;
const Desc = styled.div`
/* display: none; */
p{
font-size: 16px;
font-weight: 400;
line-height: 20px;
color: hsla(0,0%,100%,.84);
}
`;
const SubTitle = styled.div`
font-size: 16px;
font-weight: 600;
line-height: 20px;
color: hsla(0,0%,100%,.84);
display: flex;
gap: .6em;
`;
const ButtonSec = styled.div`
display:flex;
gap: 1em;
max-width:380px;
margin-top: 1.3em;
position: relative;
z-index:999999;
img{
width:25px;
height:25px;
background: hsla(0,0%,100%,.08);
color: hsla(0,0%,100%,.84);
outline: none;
/* display: none; */
border: none;
font-size: 35px;
padding: .3em 0.4em;
border-radius: 7px;
-webkit-transition: all .3s ease-in-out;
transition: all .3s ease-in-out;
cursor: pointer;
}

`;

const Buttons = styled.div`
/* border: 2px solid red; */
border-radius: 7px;
width:21em;
height: 3.3em;
display: flex;
justify-content: center;
align-items:center; 
background:#fff;
transition: all .3s ease-in-out;
cursor: pointer;
img{
width:25px;
height:25px;
padding: 0;
filter: invert(1);
background: transparent;
}
&:hover{
transform: scale(1.03);
background: hsla(0,0%,100%,.3);;
}

`;
const Button = styled.button`
background: transparent;
color: #000;
font-size: 1.1rem;
-webkit-text-stroke: .4px;
line-height: 20px;
outline: none;
border:none;
letter-spacing: .5px;
`;
const Plus = styled.button`
background:hsla(0,0%,100%,.08);
color: hsla(0,0%,100%,.84);
outline: none;
display: none;
border:none;
font-size:35px;
padding: 0em 0.4em;
border-radius: 7px;
transition: all .3s ease-in-out;
cursor: pointer;
&:hover{
background: hsla(0,0%,100%,.3);
}
`;