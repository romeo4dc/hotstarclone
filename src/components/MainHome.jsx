import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { usePopup } from '../Context/Context';
import { homeImgs } from '../data';
const MainHome = () => {
 
    const Func = usePopup();
    const navigate = useNavigate();
    const {FuncShows, setSfunc} = Func;

    const { imgl, title, desc, subtitle } = homeImgs[Func.sFunc];
    return (
        <>
            <Left>
            <img src={imgl} style={{ maxWidth: '75%' }}  alt="" />
            <Title>
            {
                title.map((val,ind)=>{
                    return(
                    <span key={ind}>{val}</span>
                    )
                })
            }
                </Title>
                <Desc>
                    <p>{desc}</p>
                </Desc>
                <SubTitle>
                {
                  subtitle.map((val,ind)=>{
                    return(
                      <span key={ind}>{val}</span>
                    )
                  })
                }
                </SubTitle>
                <ButtonSec  onClick={Func.Bg}>
                    <Buttons>
                        <img src="assets/play.svg" alt="" />
                        <Button onClick={()=>navigate('/subscribe') }>Watch Now</Button>
                    </Buttons>
                    <Plus style={{display:Func.plus}} onClick={Func.Plusfunc}>+</Plus>
                    <img style={{display:Func.chk}} onClick={Func.Chkfunc} src="assets/check.svg" alt="#" />
                    <span className='watch' style={{display:Func.cInfo}}>Watchlist <span></span></span>
                    <span className='add' style={{display:Func.pInfo}}>Add to watchlist <span></span></span>
                </ButtonSec>
            </Left>
            </>
    )
}

const Left = styled.div`
/* border:2px solid green; */
max-width:480px;
height: fit-content;
display: flex;
flex-direction: column;
margin-left:.2em;
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
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: hsla(0,0%,100%,.84);
}
`;
const Desc = styled.div`
display: none;
p{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: hsla(0,0%,100%,.84);
}
`;
const SubTitle = styled.div`
    font-size: 14px;
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
width:18.5em;
height: 3em;
display: flex;
justify-content: center;
align-items:center; 
background:hsla(0,0%,100%,.08);
transition: all .3s ease-in-out;
cursor: pointer;
img{
    width:25px;
    height:25px;
    padding: 0;
    background: transparent;
}
&:hover{
    transform: scale(1.03);
    background: hsla(0,0%,100%,.3);;
}
`;
const Button = styled.button`
background: transparent;
color: hsla(0,0%,100%,.84);
font-size: 14px;
font-weight: 600;
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


export default MainHome;

