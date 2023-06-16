import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavItems from './NavItems';
import { usePopup } from '../Context/Context';
import { TvpopUp } from '../data';
import { MpopUp } from '../data';
import { SpopUp } from '../data';
const Navbar = () => { 
    const Navigate = useNavigate();
    const popup = usePopup();
    const [wid, setWidth] = useState("240px")
    const [border, setBorder] = useState("1px solid lightgrey")
    const inpFunc=()=>{
        if(wid==='240px'){
            setWidth("370px")
            setBorder("1px solid #1f80e0")
        }
        if(wid === '370px'){
            setWidth("240px") 
            setBorder("1px solid lightgrey")
        }
    }
    return (
        <Container onMouseEnter={popup.TvDownFunc}> 
            <Left>
                <img src="/assets/hamicon.svg" alt="" 
                    onMouseEnter={()=> {popup.setPp("0.4em 0em")
                    popup.setPh("135px")
            }}  />
                <img src="/assets/logo.svg" alt="" onMouseEnter={popup.TvDownFunc} onClick={() => {Navigate("/")} } onMouseLeave={()=> {popup.setPp("0")
            popup.setPh("0px")
            }}/>
                <NavItems/>
            </Left>
            <HamPopUp style={{height:popup.pH, padding:popup.pP}} onMouseLeave={()=> {popup.setPp("0")
            popup.setPh("0px")
            }} >
                <li><img src="assets/channel.svg" alt="images" />Channels</li>
                <li><img src="assets/lang.svg" alt="images" />Languages</li>
                <li><img src="assets/genres.svg" alt="images" />Genres</li>
            </HamPopUp>
            <TVpopUp style={{transform:popup.tvTrf, visibility:popup.tvVis}} onMouseLeave={popup.TvDownFunc} >
            {TvpopUp.map((val, ind)=>{
                return(
                    <li key={ind}>{val}</li>
                )
            })}
            </TVpopUp>
            <MoviesPopUp style={{transform:popup.MTrf, visibility:popup.Mvis}} onMouseLeave={popup.MDownFunc}>
            {MpopUp.map((val, ind)=>{
                return(
              <li key={ind}>{val}</li>
                )
            })}
            </MoviesPopUp>
            <SportsPopUp style={{transform:popup.sTrf, visibility:popup.sVis}} onMouseLeave={popup.SDownFunc}>
            {SpopUp.map((val, ind)=>{
                return(
              <li key={ind}>{val}</li>
                )
            })}
            </SportsPopUp>
            <Right onClick={inpFunc}>
                <Input onClick={inpFunc} style={{width:wid, borderBottom: border}}>
                    <input type="text" placeholder='Search'/>
                    <img src="assets/search.svg" alt="" />
                </Input>
                <Button>
                    <button onClick={() => {Navigate("/subscribe")} }>SUBSCRIBE</button>
                    <button>LOGIN</button>
                </Button>
            </Right>
        </Container>
    )
}

const Container = styled.div`
/* border: 2px solid red; */
background: #0f1014;
padding: 0em 1.8em;
display: flex;
align-items: center;
height: 80px;
justify-content: space-between;
background:linear-gradient(to bottom, #141b29, #0c111b 300px);
position: relative;
`;
const Left = styled.div`
display: flex;
align-items: center;
gap: .2em;
padding-left: 2em;
/* border: 2px solid red; */
img{
    height:20px;
    width:18px;
    cursor: pointer;
}
img:nth-child(2){
    margin-bottom: 10px;
    width:150px;
    height: 35px;
    background: transparent;
}
ul{
    color:rgba(255, 255, 255, 0.7);
    display: flex;
    gap: 1.8em;
    -webkit-text-stroke: .04px;
    padding-left: 0;
    background:linear-gradient(to bottom, #141b29, #0c111b 300px);
    img{
        width: 45px;
    }
    li{
        cursor: pointer;
        list-style: none;
    }
}
`;
const Right = styled.div`
display: flex;
/* border: 2px solid red; */
gap: 1em;
`;
const Input = styled.div`
display: flex;
justify-content: space-between;
transition: width .2s ease-in-out;
input{
    outline: none;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 1em;
    ::placeholder{
        color:rgba(255, 255, 255, 0.8);
        font-size: 1rem;
    }
}
img{
    height: 16px!important;
    width: 16px!important;
    margin-top: 8px;
}
`;

const Button = styled.div`
border: none;
background: transparent;
button{
    outline: none;
    -webkit-text-stroke: .3px;
    font-size:.7rem;
    border: none;
    color:white;
    background-color: #1f80e0;
    letter-spacing: .7px;
    letter-spacing: .7px;
    border-radius: 5px;
    padding: .5em .8em;
    cursor: pointer;
}

button:last-child{
    background: transparent;
    letter-spacing: .5px;
    -webkit-text-stroke: .1px;
    color:rgba(255, 255, 255, 0.8);
    font-size: .85rem;
    margin-left:5px;
}
`;

const HamPopUp = styled.div`
    /* border: 2px solid red; */
    overflow: hidden;
    position: absolute;
    bottom: 0;
    width: fit-content;
    background: #192133;
    top: 50px;
    transition: all .2s ease-in-out;
    border-radius: 4px;
    margin-top: 1em;
    margin-left: 1.2em;
    li{
    background: #192133;
    list-style: none;
    cursor: pointer;
    font-size: 14px;
    font-weight:ter;
    transition: background .2s ease-in-out;
    padding: 13px 25px;
    display: flex;
    gap: 1.5em;
    align-items: center;
    color:rgba(255, 255, 255, 0.6);
    img{
        width: 18px;
        height: 18px;
    }
    &:hover{
        background: #030b17;
        color:#fff;
    }
}
`;


const MoviesPopUp = styled.div`
position: absolute;
top: 82px;
left: 21.3%;
background: #192133;
border-radius: 4px;
transition: transform .18s ease-in-out;
li{
    cursor: pointer;
    transition: background .1s ease-in-out;
    list-style: none;
    color: #fff;
    font-size: 14px;
    padding: .8em 1.5em;
    &:hover{
        background: #030b17;
    }
}
`;
const SportsPopUp = styled.div`
position: absolute;
top: 82px;
left: 27.6%;
background: #192133;
border-radius: 4px;
transition: transform .18s ease-in-out;

li{
    cursor: pointer;
    transition: background .1s ease-in-out;
    list-style: none;
    color: #fff;
    font-size: 14px;
    padding: .8em 1.3em;
    &:hover{
        background: #030b17;
    }
}
`

const TVpopUp = styled.div`
position: absolute;
top: 82px;
left: 17.6%;
background: #192133;
border-radius: 4px;
transition: transform .18s ease-in-out;

li{
    cursor: pointer;
    transition: background .1s ease-in-out;
    list-style: none;
    color: #fff;
    font-size: 14px;
    padding: .8em 1.3em;
    &:hover{
        background: #030b17;
    }
}
`;

export default Navbar;
