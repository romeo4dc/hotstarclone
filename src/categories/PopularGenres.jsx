import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { genres } from '../data';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFirebase } from '../firebase/firebase';

const PopularGenres = () => {
  const carousel = useRef();
  const [width, setWidth] = useState();
  const [user, setUser] = useState("");
  const fb = useFirebase();
  const { genresData } = fb;

  const arr=[];
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth));
    if(genresData){
      genresData.forEach((data) => {
        arr.push(data.data())
      }); 
      setUser(arr)
    }
  },[genresData])
  return (
    <Container>
      <span>Popular Genres</span>
      <motion.div ref={carousel} drag="x" dragConstraints={{right:0, left:-width}} onDrag={()=>setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)}>
        {
          user ?
          user.map((val, ind) => {
            return (
              <Card  key={ind}>
                <img src={val.img} alt="" />
                <span>{val.title}</span>
              </Card>
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
width: 100%;
display: flex;
flex-direction: column;
background:  #0f1014;
position: relative;
span{
    color:white;
    font-size: 1.2rem;
    -webkit-text-stroke: .2px;
    letter-spacing: .3px;
    margin-bottom: 1em;
    margin-top: .8em;
}
div{
height: fit-content;
width:100%;
position: relative;
border-radius: 3px;
display: flex!important;
gap: .7em;
transition: all .5s;
img{
    width:200px;
    height:110px;
    border-radius: 5px;
}

}
`;
const Card = styled.div`
/* overflow: hidden; */
height: 110px;
width: 210px!important;
cursor: pointer;
background: rgba(0,0,0,0.8);
display: flex;
justify-content: center;
align-items: center;
transition: all .5s ease-in-out;
border-radius: 3px;
width:fit-content;
position: relative;
img{
height: 110px;
width: 210px;
}
span{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-weight: 700;
    font-size: .8rem;
    margin: 0;
}
&:hover{
    transform: scaleY(1.3) scaleX(1.2);
z-index: 999;
&:nth-child(1){
  margin-left: 1em;
}
}
&::before{
    content:"";
    position: absolute;
    bottom: 0;
    left:0;
    background: rgba(0,0,0,0.3);
    height:100%;
    width:100%;
    z-index: 200;
}
`;

export default PopularGenres;
