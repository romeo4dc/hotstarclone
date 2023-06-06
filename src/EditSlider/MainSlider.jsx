import React, { useEffect } from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { createContext, useState } from 'react';
import { usePopup } from '../Context/Context';
import { eSlider } from '../data';
export const MyContext = createContext()
const MainSlider = () => {;
    const Func = usePopup();

    useEffect(()=>{
      let All = document.querySelectorAll('img');
      All[4].style.transform = 'scale(1.5)';
    },[])
  return (
    <Container>
    <SliderComp style={{transform:Func.slTrf}} onClick={Func.profile ? Func.ImgSrc : Func.ImgMSrc}>
        {
          eSlider.map((val,ind)=>{
           return (
            <img key={ind} src={val} alt="" data-name={ind} onClick={Func.SepImg}/>
           )
          })
        }                
    </SliderComp>
    <Circle>
      <img src="assets/check.svg" alt="" />
    </Circle>
    </Container>
  )
}

const Container = styled.div`
min-height: 200px;
position: relative;
display: flex;
width: 78.65rem;
overflow: hidden;
align-items: center;
`;
const SliderComp = styled.div`
display: flex;
gap: 3em;
height:fit-content;
padding-left: 1.2em;
transform: translateX(0);
transition: scale .2s ease-in-out,
            transform .35s ease-in-out;
img{
    width:7.5%;
    height:7.5%;
    cursor: pointer;
    transition: all .1s ease-in-out;
}
`;


const Circle = styled.div`
border: 2px solid #fff;
position: absolute;
width:138px;
height:138px;
inset:50%;
padding: .2em;
transform: translate(-50%,-50%);
border-radius:50%;
img{
  width:22px;
  height:22px;
  padding:.6em;
  filter: brightness(2.5) invert(1);
  /* border: 2px solid white; */
  background-color: black;
  border-radius: 50%;
  position: relative;
  right: -100px;
  bottom: -100px;
}
`;
export default MainSlider;
