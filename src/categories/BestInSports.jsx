import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useFirebase } from '../firebase/firebase';
import { useRef } from 'react';
const BestInSports = () => {
  const bestInSports = useFirebase();
  const carousel = useRef();
  const [width, setWidth] = useState();
  const [user, setUser] = useState();
  const arr = []
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    if(bestInSports.bestInSportsData){
      bestInSports.bestInSportsData.forEach((data) => {
        arr.push(data.data())
      }); 
      setUser(arr)
    }
  },[bestInSports.bestInSportsData])
  return (
    <Container>
    <span>Best in Sports</span>
    <motion.div className="cards" ref={carousel} drag="x" dragConstraints={{right:0, left:-width}} onDrag={()=>setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)}>
        { user ?
          user.map((val, ind)=>{
            return(
            <Card key={ind}>
        <img src={val.img} alt="" className='mainimg'/>
        <Duration>{val.title}</Duration>
        <Desc>
          <img src="assets/play.svg" alt="" />
          <span>{val.subtitle}</span>
        </Desc>
        <Details>
        <DetDesc>
          <img src="assets/play.svg" alt="" />
          <span>{val.subtitle}</span>
          </DetDesc>
         <br/>
          <span>{val.subtitle}</span>
          <p>{val.desc}</p>
          <Watchlist>
            <span>+</span><span>ADD TO WATCHLIST</span>
          </Watchlist>
        </Details>
        </Card>
            )
          })
          :
       (  
         <div className='hloading'>
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
span{
    color:white;
    font-size: 1.2rem;
    -webkit-text-stroke: .2px;
    letter-spacing: .3px;
    margin-bottom: 1em;
    margin-top: .8em;
}
`;

// const cards = styled.div`
// height: 140px;
// /* overflow: hidden; */
// width:fit-content;
// position: relative;
// border-radius: 3px;
// display: flex;
// gap: .7em;
// transition: all .5s;
// img{
//     width:200px;
//     height:110px;
//     border-radius: 5px;
// }
// `;

const Details = styled.div`
max-width:180px;
height: 90px;
background-image:linear-gradient(to bottom,#00000000 0%, #192133, #192133);
position: absolute;
bottom: 0px;
display: flex;
flex-direction: column;
justify-content: end;
padding: 10px;
padding-right:10px;
transition: all .5s ease-in-out;
visibility: hidden;
transition: background .2s ease-in-out;
&:hover{
  background-color: #ffffff1f;
}
span{
    color:white;
    font-size:.6rem;
    letter-spacing: .3px;
    color:#fff;
    padding: 0;
    margin: 0;
}
span:nth-child(3){
    margin-top: -14px;
    /* margin-bottom: 4px; */
    color:white;
    font-size:.5rem!important;
    color:#fff;
}
p{
    color:white;
    font-size:.55rem;
    -webkit-text-stroke: .2px;
    color:#ffffffb8;
}
`;

const Desc = styled.div`
/* border: 2px solid red; */
background-image:linear-gradient(to bottom,#33436600,#33436687,#1c2940);
display: flex;
padding: 7px;
padding-bottom: 0px;
align-items: center;
gap: 5px;
position: absolute;
border-radius: 3px;
bottom: 0;
img{
  height: 20px;
  width: 20px;
}
span{
  font-size:.85rem;
}
`;

const Watchlist = styled.div`
display: flex!important;
align-items:center!important;
justify-content: space-between;
width: 100px;
margin-top: 5px;
span{
    font-size:.5rem!important;
    color:#ffffffab;
    padding:0;
    margin: 0;
}
span:nth-child(1){
    font-size: 1.1rem!important;
    -webkit-text-stroke: .1px;
    color:#ffffffab;
}
`;

const Duration = styled.div`
position: absolute;
right: 5px;
top: 8px;
font-weight: 700;
font-size: .63rem;
color: white;
`;

const DetDesc = styled.div`
display: flex;
left: 7px;
padding: 0;
max-width:180px;
align-items: center;
gap: 5px;
position: absolute;
top: 17px;
line-height: 1.3;
img{
  height: 20px;
  width: 20px;
}
span{
  font-size:.65rem;
}
`;

const Card = styled.div`
overflow: hidden;
height: 110px;
min-width: 210px;
cursor: pointer;
display: flex;
justify-content: center;
transition: all .5s ease-in-out;
border-radius: 3px;
position: relative;
img{
  border-radius: 5px;
}
&:hover{
    transform: scaleY(1.3) scaleX(1.2);
    z-index:100;
    ${Details}{
        visibility: visible;
        transform: scale(1);
    }

}
`;

export default BestInSports;