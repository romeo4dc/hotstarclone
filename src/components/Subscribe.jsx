import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { usePopup } from '../Context/Context';
import { action } from '../data';
import { starPlus } from '../data';
import { starBharat } from '../data';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import FooterFunc from './Footer';
import { useFirebase } from '../firebase/firebase';
const Subscribe = () => {
  const Pricing = usePopup();
  const Navigate = useNavigate();
  const fb = useFirebase()
  const { AuthUser, currentUser } = fb;
  useEffect(()=>{
    AuthUser()
  },[])
    return (
        <>
            <Login/>
            <Container>
                <Header>
                    <Left>
                        <img src="assets/cross.svg" alt="" onClick={()=>Navigate('/')}/>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="" onClick={()=>Navigate('/')} style={{cursor:'pointer'}} />
                    </Left>
                    <Right>
                        <Lang>
                            <span>English</span>
                            <img src="assets/arrowdown.svg" alt="" />
                        </Lang>
                        <Log onClick={Pricing.logFunc}>
                            Login
                        </Log>
                    </Right>
                </Header>
                <Content>
                    <Heading>
                        <span>
                            Subscribe now and start streaming
                        </span>
                        <Box>
                            {
                                action.map((val, ind) => {
                                    return (
                                        <Card key={ind} className="animation">
                                            <img src={action[ind].img} alt="" />
                                        </Card>
                                    )
                                })
                            }
                            {
                                starPlus.map((val, ind) => {
                                    return (
                                        <Card key={ind} className="animation">
                                            <img src={starPlus[ind].img} alt="" />
                                        </Card>
                                    )
                                })
                            }
                            {
                                starBharat.map((val, ind) => {
                                    return (
                                        <Card key={ind} className="animation">
                                            <img src={starBharat[ind].img} alt="" />
                                        </Card>
                                    )
                                })
                            }
                        </Box>
                    </Heading>
                    <Desc>
                        <Offers>
                            <Quality>
                                <span>
                                    <span>All Content</span>
                                    <span>Movies, Live sports, TV, Specials</span>
                                </span>
                                <span>Watch on TV or Laptop</span>
                                <span>Ads free movies and shows (except sports)</span>
                                <span>Number of devices that can be logged in</span>
                                <span>Max video quality</span>
                                <span>
                                    <span>Max audio quality</span>
                                    <span>Atmos available on select titles only</span>
                                </span>
                            </Quality>
                            <Super style={{background:Pricing.Sbg}}>
                                <span  style={{color:Pricing.colS}}>Super</span>
                                <img src="assets/check.svg" alt="" />
                                <img src="assets/check.svg" alt="" />
                                <img src="assets/cross.svg" alt="" />
                                <div>2</div>
                                <div>Full HD <br/>1080p</div>
                                <div>Dolby Atmos</div>
                            </Super>
                            <Premium style={{background:Pricing.Pbg}}>
                                <span style={{color:Pricing.colP}}>Premium</span>
                                <img src="assets/check.svg" alt="" />
                                <img src="assets/check.svg" alt="" />
                                <img src="assets/check.svg" alt="" />
                                <div>4</div>
                                <div>4K <br/>2160p</div>
                                <div>Dolby Atmos</div>
                            </Premium>
                        </Offers>
                        <Prices>
                            <Price onClick={Pricing.Super} style={{border:Pricing.Sbor}}>
                                <span style={{color:Pricing.colS}}>Super</span><br />
                                <span>₹</span>
                                <span>899</span>
                                <span>/ year</span>
                                <img style={{display:Pricing.Sdis}} src="assets/bluecheck.svg" alt="" />
                            </Price>
                            <Price onClick={Pricing.Premium} style={{border:Pricing.Pbor}}>
                                <span style={{color:Pricing.colP}}>Premium</span><br />
                                <span>₹</span>
                                <span>299</span>
                                <span>/ mnth</span>
                                <img style={{display:Pricing.Pdis}} src="assets/bluecheck.svg" alt="" />
                            </Price>
                            <Price onClick={Pricing.Premium} style={{border:Pricing.Pbor}}>
                                <span style={{color:Pricing.colP}}>Premium</span><br />
                                <span>₹</span>
                                <span>1499</span>
                                <span>/ year</span>
                                <img style={{display:Pricing.Pdis}} src="assets/bluecheck.svg" alt="" />
                            </Price>
                        </Prices>
                        <ContinueBtn onClick={Pricing.logFunc}>
                            Continue with {Pricing.Price} <img src="assets/arright.svg" alt="" />
                        </ContinueBtn>
                        <MoboContinueBtn onClick={()=>Navigate(currentUser ? "/mobologout" : "/mobologin")}>
                            Continue with {Pricing.Price} <img src="assets/arright.svg" alt="" />
                        </MoboContinueBtn>
                    </Desc>
                </Content>
            <FooterFunc/>
            </Container>
        </>
    )
}

const Container = styled.div`
background-color: #0f1014 !important;
`;
const Header = styled.div`
padding: 1.2em 4em;
display: flex;
justify-content: space-between;
@media(max-width:768px){
    display: none;
}
`;
const Right = styled.div`
display: flex;
gap: 1em;
height: 50px;
`;
const Left = styled.div`
display: flex;
gap: 3em;
align-items:center;
img:first-child{
width:30px;
height: 30px;
filter: invert(1);
cursor: pointer;
}
img:nth-child(2){
    width:80px;
    height: 60px;
}
`;
const Lang = styled.button`
background: transparent;
outline: none;
border: none;
padding: 1.2em 3em;
border-radius: 5px;
background-color: hsla(0,0%,100%,.08);
span{
    color:#fff;
    font-size: 16px;
    font-weight: 600;
}
img{
    filter: invert(1);
    width: 15px;
    height: 13px;
}
`;
const Log = styled.button`
background: transparent;
outline: none;
border: none;
color:#fff;
font-size: 16px;
font-weight: 600;
padding: 1em 2.3em;
border-radius: 5px;
background:linear-gradient(93.87deg,#095ae6,#062794);
transition: all .2s ease-in-out;
cursor: pointer;
&:hover{
  transform: scale(1.02);
}
`;
const Content = styled.div`
display: flex;
/* gap: 1em; */
margin-top: 2em;
height:fit-content;
overflow: hidden;
@media(max-width:768px){
    flex-direction: column;
    width:100%;
}
`;
const Heading = styled.div`
height:fit-content;
width:65%;
/* padding-left: 4em; */
/* padding-right:3em; */
display: flex;
flex-direction: column;
background: transparent;
@media(max-width:768px){
    width:100%;
    padding-left:3.7em;
}
@media(max-width:500px){
    padding-left:3.5em;
}
@media(max-width:450px){
    padding-left:2.5em;
}
@media(max-width:400px){
    padding-left:1.5em;
}
@media(max-width:350px){
    padding-left:1.7em;
}
span{
    background: transparent;
    width:440px;
    font-size: 32px;
    font-weight: 600;
    color:#fff;
    margin-left: 2em;
    position: relative;
    z-index: 100;
    @media(max-width:500px){
    margin-left: 0;
}
}
`;
const Desc = styled.div`
/* border: 2px solid white; */
width:50%;
padding-right:3em;
@media(max-width:768px){
    margin-top:-2em;
    width:100%;
    padding: 0;
    margin: 0;
}
`;
const Offers = styled.div`
/* border: 2px solid red; */
height:fit-content;
width:fit-content;
display: flex;
gap: 1em;
@media(max-width:768px){
    margin-left: 3.5em;
}
`;
const Quality = styled.div`
/* border: 2px solid greenyellow; */
display: flex;
flex-direction: column;
gap: 1.45em;
line-height: 1.5;
font-size: 16px;
font-weight: 400;
padding-top: 3em;
letter-spacing: 1px;

span{
    color:#e1e6f0;
}
span:first-child{
    display: flex;
    flex-direction: column;
    color:#e1e6f0;
    span:last-child{
        color:#707a94;
        font-size: 14px;
        font-weight: 400;
    }
}
span:last-child{
    display: flex;
    flex-direction: column;
    span:last-child{
        color:#707a94;
        font-size: 14px;
        font-weight: 400;
    }
}
`;
const Super = styled.div`
display: flex;
flex-direction: column;
gap: 1.5em;
/* border: 2px solid red; */
border-radius: 5px;
align-items: center;
font-size: 18px;
font-weight: 600;
color: #707a94;
padding: 0em 1.5em;
padding-top: 1em;
text-align: center;
align-items: center;
span{
    color:#fff;
    margin:0;
    @media(width<=450px){
        font-size: 15px;
    }
}
img{
    filter: invert(1);
    width: 30px;
    height: 30px;
}
div{
    font-size: 16px;
    font-weight: 400;
    color: #707a94;
    margin:0;
    padding:0;
}
`;
const Premium = styled(Super)`
`;
const Prices = styled.div`
margin:2em 0em;
display: flex;
gap:1em;
@media(max-width:768px){
    padding: 0em 1.4em;
}
@media(width<=400px){
    margin-left: -3%;
    padding:0em 1em;
}
`;
const Price = styled.div`
border:2px solid #707a94;
border-radius: 8px;
padding: .9em 2em .5em 1em;
width:280px;
cursor: pointer;
line-height: 1.3;
word-spacing: 0px;
white-space: 0px;
position: relative;

img{
    border: none;
    background: none;
    border: 10px solid #0f1014;
    background:linear-gradient(93.87deg,#095ae6,#062794);
    border-radius: 50%;
    padding: .4em;
    transform: scale(.45);
    position: absolute;
    top:-35px;
    left:135px;
    display: none;
    @media(width<=1200px){
        display: none!important;
    }
}
span:nth-child(1){
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    @media(width<=450px){
        font-size: 16px;
    }
}
span:nth-child(3){
    font-size: 14px;
    font-weight: 600;
    color:#fff;
    color:#e1e6f0;
    position: relative;
    top: -7px;
    right: 2px;
    @media(width<=450px){
        font-size: 12px;
    }
}
span:nth-child(4){
    font-size: 24px;
    font-weight: 600;
    color:#e1e6f0;
    @media(width<=450px){
        font-size: 20px;
    }
}
span:nth-child(5){
    color:#e1e6f0;
    -webkit-text-stroke: .3px;
    word-spacing: 0px;
    letter-spacing: .2px;
    margin-left: 2px;
}

`;
const ContinueBtn = styled.button`
background:linear-gradient(93.87deg,#095ae6,#062794);
font-size: 18px;
font-weight: 600;
color:#d1e8ff;
padding: .8em 1em;
width:100%;
border-radius: 8px;
transition: all .3s ease-in-out;
outline: none;
border: none;
cursor: pointer;
&:hover{
    transform: scale(1.02);
}
img{
    height:15px;
    width:15px;
    filter: invert(1);
    margin-bottom:-.1em;
    margin-left:.4em;
}
@media(max-width:768px){
    width:95%;
    margin:0em 1em;
    display: none;
}
`;
const MoboContinueBtn = styled.button`
background:linear-gradient(93.87deg,#095ae6,#062794);
font-size: 18px;
font-weight: 600;
color:#d1e8ff;
padding: .8em 1em;
width:100%;
border-radius: 8px;
transition: all .3s ease-in-out;
outline: none;
border: none;
cursor: pointer;
display: none;
&:hover{
    transform: scale(1.02);
}
img{
    height:15px;
    width:15px;
    filter: invert(1);
    margin-bottom:-.1em;
    margin-left:.4em;
}
@media(max-width:768px){
    display: block;
    width:95%;
    margin:0em 1em;

}
`;
const Box = styled.div`
display: flex;
flex-wrap: wrap;
gap:.6em;
align-items: center;
height:575px;
overflow: hidden;
position:relative;
margin-top: -90px;
@media(max-width:768px){
    height:250px;
}
&::after{
    content:"";
    position: absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background: linear-gradient(0deg,rgba(13,17,26,0),rgba(13,17,25,0.5) 28.62%,rgba(15,16,20,0.7) 72.5%,#0f1014),linear-gradient(90deg,#16181f 1.48%,rgba(22,24,31,0.8) 21.89%,rgba(15,16,20,0.5) 36.68%,rgba(15,16,20,0.9) 74.14%,#101115);    
}
`;
const Card = styled.div`
/* border: 2px solid white; */
height: 175px;
width:fit-content;
position: relative;
display: flex;
transition: all .5s;
img{
    width:120px;
    height:175px;
    border-radius: 5px;
    border: none;
}
`;

export default Subscribe;
