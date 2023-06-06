import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useFirebase } from '../firebase/firebase';
import StarBharatComp from '../components/StarBharatComp';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const PopularInFamily = () => {
  const starBharat = useFirebase();
  const carousel = useRef();
  const [width, setWidth] = useState();
  const [user, setUser] = useState()

  const arr = [];
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    if (starBharat.bharatData) {
      starBharat.bharatData.forEach((data) => {
        arr.push(data.data())
      });
      setUser(arr)
    }
  }, [starBharat.bharatData])

  return (
    <>
      <Container>
        <span style={{
          color:'white',
          fontSize: '1.2rem',
          WebkitTextStroke: '.2px',
          letterSpacing: '.3px',
          marginBottom: '1em',
          marginTop: '.8em'
        }}>Popular in Family</span>
        <StarBharatComp />
      </Container>
      <MoboRes>
        <div>
          <span>Popular in Family</span>
          <span>MORE</span>
        </div>
        <motion.div ref={carousel} drag="x" dragConstraints={{right:0, left:-width}} onDrag={()=>setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)}>
        {
            user ?
            user.map((val, ind) => {
              return (
                <img src={val.img} alt="" key={ind} />
              )
            })
            :
            <div className='loading'>
          <img src="https://cdn.dribbble.com/users/347174/screenshots/2958807/media/57718cf1f96050b37782d96f41dc46d3.gif" alt="" />
          </div>
          }
        </motion.div>
      </MoboRes>
    </>
  )
}

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* margin-bottom: 4em; */
overflow-x: hidden;
padding-bottom: 2em;
position: relative;
@media (max-width:768px){
  display: none;
}
`;
const MoboRes = styled.div`
display: none;
flex-direction: column;
gap: 1em;
width:100%;
padding-bottom: 2em;
div{
  display:flex;
  justify-content: space-between;
  span:first-child{
  color:#fff;
  font-size: 1.2rem;
  -webkit-text-stroke: .2px;
    letter-spacing: .3px;
  }
  span:last-child{
    color:blue;
    font-size: 1rem;
    font-weight: 500;
  }
}
div:last-child{
  display: flex;
  gap:.5em;
  height:150px;
  img{
    border-radius: 5px;
    height:150px;
    width:150px;
  }
}
@media (max-width:768px){
  display: flex;
}
`;

export default PopularInFamily;

