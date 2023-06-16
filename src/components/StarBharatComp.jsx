import React from 'react'
import styled from 'styled-components';
import { starPlus } from '../data';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { useFirebase } from '../firebase/firebase';
import { usePopup } from '../Context/Context';
import { useState } from 'react';
import { useEffect } from 'react';
const StarBharatComp = () => {
  const starBharat = useFirebase();
  const [videoUrls, setVideoUrls] = useState([]);
  const [hover, setHover] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [value, setValue] = useState()
  const [isEnter, setIsEntered] = useState(false)
  const { storageRef } = starBharat;
  const [user, setUser] = useState();
  const [cardContainer, setCardContainer] = useState(0)
  const arr = [];
  useEffect(() => {
    if (starBharat.bharatData) {
      starBharat.bharatData.forEach((data) => {
        arr.push(data.data())
      });
      setUser(arr)
    }
  }, [starBharat.bharatData])

  let video = document.querySelector('video');
  useEffect(() => {
    listAll(storageRef)
      .then((res) => {
        const urls = [];
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef)
            .then((url) => {
              urls.push(url);
              setVideoUrls(urls);
            })
            .catch((error) => {
              console.error(error);
            });
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  const CardSliderR = () => {
    if (cardContainer > -60) {
      setCardContainer(cardContainer + (-20))
    }
  }
  const CardSliderL = () => {
    if (cardContainer < 0) {
      setCardContainer(cardContainer + (20))
    }
  }

  return (
    <>
      {
        isEnter &&
        <>
          <img src="assets/arrowleft.svg" alt="" className='hslidel' onClick={CardSliderL} onMouseEnter={
            () => setIsEntered(true)
          }
            onMouseLeave={
              () => setIsEntered(false)
            } />

          <img src="assets/arrowleft.svg" alt="" className='hslider' onClick={CardSliderR} onMouseEnter={
            () => setIsEntered(true)
          }
            onMouseLeave={
              () => setIsEntered(false)
            } />
        </>
      }

      <Cards style={{ transform: `translateX(${cardContainer}%)` }}
        onMouseEnter={
          () => setIsEntered(true)
        }
        onMouseLeave={
          () => setIsEntered(false)
        }>

        {user ?

          user.map((val, ind) => {
            return (
              <Card onMouseEnter={() => {
                setValue(ind)
                setHover(true)
                
              }}

                onMouseLeave={() => { setHover(false) }} key={ind} className='cards' >

                <img src={val.img} alt="" />
                <Details>
                  <button><img src="assets/play.svg" alt="" /><span>Watch Now</span></button>
                  <div>
                    <span>{val.subtitle}</span>
                    <p>{val.desc}</p>
                  </div>
                  <Divide></Divide>
                </Details>
              </Card>

            )
          })
          :

          (
            <div className='loading'>
              <img src="https://cdn.dribbble.com/users/347174/screenshots/2958807/media/57718cf1f96050b37782d96f41dc46d3.gif" alt="" />
            </div>
          )
        }

      </Cards>
    </>
  )
}

export default StarBharatComp;
const Divide = styled.div`
background-image:linear-gradient(to top, rgba(4,8,15,0), #16181f, #16181f);
width:92.8%;
max-height: 10%;
position: absolute;
left: 0;
/* margin-left:-1px; */
top: -1.1em;
transform: rotate(180deg);
`;
const Details = styled.div`
max-width:180px;
height: 51.2%;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1em;
position: absolute;
visibility: hidden;
transition: visibility .5s cubic-bezier(0.33, 0.04, 0.63, 0.93);
transition: background .2s ease-in-out;
background-color: #16181f;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
pointer-events: none;
button{
  display: flex;
  align-items: center;
  width:165px;
  height: 30px;
  padding: 1em;
  margin: 0 auto;
  justify-content: center;
  gap: .3em;
  border-radius: 5px;
  border: none;
  margin-top:8px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  img{
    filter: invert(1);
    height:13px;
    width: 13px;
  }
  span{
    color: #000000;
    font-size: 9px;
    font-weight: 600;
  }
  &:hover{
    transform: scale(1.02);
  }
}
div{
  padding: .2em .4em;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: .5em;
}
&:hover{
  background-color: #16181f;
}
span{
    color:white;
    font-size:.6rem;
    letter-spacing: .3px;
    color:#fff;
    padding: 0;
    margin: 0;
    word-spacing: .4em;
  }
  p{
    color:white;
    font-size:9px;
    font-weight: 500;
    line-height: 14px;
    color:#8f98b2;
}

`;
const Card = styled.div`
height: 240px;
cursor: pointer;
display: flex;
justify-content: center;
transition: transform .5s ease-in-out;
position: relative;
&:nth-child(1){
  &:hover{
    transform: translateX(2em) scaleY(1.3) scaleX(1.4);
    z-index: 9999;
  }
}
&:hover{
  transform: scaleY(1.3) scaleX(1.4);
  z-index: 99999;
    ${Details}{
        /* z-index: 2; */
        visibility: visible;
        transform: scale(1);
        height:54.2%
    }
}
`;
const Cards = styled.div`
height: fit-content;
width:fit-content;
position: relative;
display: flex;
gap: .7em;
transition: all .5s;
/* overflow: hidden; */
img{
    width:180px;
    height:240px;
    border-radius: 5px;
    pointer-events: none;
  }
  video{
  position: absolute;
  width:180px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  pointer-events: none;
  &:hover{
    /* z-index: 99999; */
  }
}
`;
