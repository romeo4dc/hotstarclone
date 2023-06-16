import React from 'react'
import styled from 'styled-components';
import { popularChannels } from '../data';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { useFirebase } from '../firebase/firebase';

const PopularChannels = () => {
  const [user, setUser] = useState();
  const carousel = useRef();
  const [width, setWidth] = useState();
  const fb = useFirebase();
  const { allChannelsData } = fb;

  const arr=[];
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth));
    if(allChannelsData){
      allChannelsData.forEach((data) => {
        arr.push(data.data())
      }); 
      setUser(arr)
    }
  },[allChannelsData])
  return (
    <Container>
      <span>Popular Channels</span>
     <motion.div ref={carousel} drag="x" dragConstraints={{right:0, left:-width}} onDrag={()=>setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)}>
        {
          user ?
          user.map((val, ind) => {
            return (
                <img src={val.img} alt="" key={ind}/>
            )
          })
          :
          (  
         <div className='hloading' style={{marginLeft:'-235px'}}>
          <img src="https://cdn.dribbble.com/users/347174/screenshots/2958807/media/57718cf1f96050b37782d96f41dc46d3.gif" alt="" />
          </div>
          )
        }
      </motion.div>
    </Container>
  )
}

const Container = styled.div`
/* border: 2px solid red; */
width:100%;
display: flex;
flex-direction: column;
overflow: hidden;
background: #0f1014;
span{
    color:white;
    font-size: 1.2rem;
    -webkit-text-stroke: .2px;
    letter-spacing: .3px;
    margin-bottom: 1em;
    margin-top: .8em;
}
div{
  display:flex;
  gap:.5em;
  height:150px;
  width: 100%;
  img{
    height: 120px;
    width:210px;
    border-radius: 5px;
    transition: all .3s;
    &:hover{
      transform: scaleY(1.3) scaleX(1.2);
    }
  }
  img:nth-child(1){
      &:hover{
        transform: scaleY(1.3) scaleX(1.2) translateX(1.4em);
        /* margin-left: 1.4em; */
      }
    }
}
`;



export default PopularChannels;