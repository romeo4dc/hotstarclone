import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import FooterFunc from '../components/Footer';
import MoboFooter from '../MoboComp/MoboFooter';
import { useFirebase } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { moviesCategory } from '../data';
import { moviesFilmsCategory } from '../data';

const Movies = () => {
  const [moviesData, setMoviesData] = useState();
  const [isEnter, setIsEntered] = useState(false);
  const [cardContainer, setCardContainer] = useState(0);
  const [value, setValue] = useState("");
  const [width, setWidth] = useState();

  const carousel = useRef();
  const fb = useFirebase();
  const navigate = useNavigate();
  const { updateData, moboUpdate, getDocsByQuery } = fb;

  const fetchData = async () => {
    try {      
      const totalPages = 4;
      const totalData = [];

      for (let page = 1; page <= totalPages; page++) {
        const res = await axios.get(`https://www.omdbapi.com?s=movie&apikey=5b411b8a&page=${page}`);
        const { Search } = res.data;

        for (let i = 0; i < Search.length; i++) {
          const id = Search[i];
          const details = await axios.get(`https://www.omdbapi.com?i=${id.imdbID}&apiKey=5b411b8a&plot=full`);
          totalData.push(details.data)
        }
      }
      setMoviesData(shuffle(totalData))
    } catch (err) {
      console.log(err)
    }
  }
  const shuffle = (moviesData) => {
    const a = [...moviesData];
    for (let i = a.length - 1; i > 0; i--) {
      const b = Math.floor(Math.random() * (i + 1));
      [a[i], a[b]] = [a[b], a[i]]
    }
    return a;
  }
  useEffect(() => {
    getDocsByQuery()
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    fetchData()    
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
        moviesCategory &&
        moviesCategory.map((data, index) => {
          return (
            <Container key={index + 1} >
              <span style={{
                color: 'white',
                fontSize: '1.2rem',
                WebkitTextStroke: '.2px',
                letterSpacing: '.3px',
                marginBottom: '1em',
                marginTop: '.8em'
              }}>{data}</span>
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
              <Cards   style={{ transform: value === index && `translateX(${cardContainer}%)` }}
                onMouseEnter={
                  () => {
                    setIsEntered(true)
                    setValue(index)
                  }
                }
                onMouseLeave={
                  () => {
                    setIsEntered(false)
                    setValue(index)
                  }
                }>
                {
                 moviesData ?
                    moviesData.map((val, ind) => {
                      return (
                        moviesFilmsCategory[index] === val.Genre && (
                          <Card id="cards"
                          className="cards" 
                          key={val.Title + ind + 2} 
                          onClick={()=>navigate(`/shows/view/${val.imdbID}`)}>
                            <img src={val.Poster} alt="" />
                            <Details>
                              <button>
                                <img src="/assets/play.svg" alt="" />
                                <span>Watch Now</span>
                              </button>
                              <div>
                                <span style={{
                                  fontWeight: '900',
                                  fontSize: '.6rem',
                                  marginTop: '-1.5em'
                                }}>
                                  {`${val.Year} - ${val.Runtime} - ${val.Language}`}</span>
                                <span>{val.Title}</span>
                                <p>{val.Plot}</p>
                              </div>
                              <Divide></Divide>
                            </Details>
                          </Card>
                        )
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
            </Container>
          )
        })
      }
              <Footer><FooterFunc/></Footer>
      {
        <MoboContainer >
        <MoboRes>
          {
            moviesCategory &&
            moviesCategory.map((val, index)=>{
             return(
              <React.Fragment key={index+3}>
                <div>
                  <span>{val}</span>
                  <span>MORE</span>
                </div>
                <motion.div ref={carousel} drag="x" dragConstraints={{right:0 ,left:-width}} onDrag={()=>setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)}>
                  {
                    moviesData ?
                    moviesData.map((val, ind)=>{
                      return(
                        moviesFilmsCategory[index] === val.Genre &&
                        <img src={val.Poster} alt="" key={val.imdbID + 1} onClick={()=>navigate(`/mshows/view/${val.imdbID}`)}/>
                      )
                    })
                    :
                    (
                      <div className='loading'>
                        <img src="https://cdn.dribbble.com/users/347174/screenshots/2958807/media/57718cf1f96050b37782d96f41dc46d3.gif" alt="" />
                      </div>
                    )
                  }
                </motion.div>
              </React.Fragment>
             )
            })
          }
        </MoboRes>
        <Mobo><MoboFooter/></Mobo>
        </MoboContainer>
      }

    </>
  )
}
const Container = styled.section`
/* padding-top: 1em;
padding: 0em .5em;
height: 250px;
display: flex;
flex-direction: column;
gap:1em;
height: fit-content;
overflow: hidden;
position:relative;
background: #0f1014; */
/* width: 100%; */
margin-left: 100px;
display: flex;
flex-direction: column;
/* margin-bottom: 4em; */
overflow-x: hidden;
padding-bottom: 2em;
position: relative;
@media(max-width:768px){
  display: none;
}
`;
const Divide = styled.div`
background-image:linear-gradient(to top, rgba(4,8,15,0), #16181f, #16181f);
width:92.8%;
max-height: 10%;
position: absolute;
left: 0.35px;
top: -12px;
transform: rotate(180deg);
`;
const Details = styled.div`
max-width:180px;
right: 0;
bottom: 0px;
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
  margin: 0 auto ;
  justify-content: center;
  z-index:999;
  gap: .3em;
  border-radius: 5px;
  border: none;
  margin-top:20px;
  margin-bottom: 5px;
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
    word-spacing: .4em;
    margin:0;
  }
  p{
    color:white;
    font-size:9px;
    font-weight: 500;
    line-clamp: 5;
    height: calc(5 * 14px);
    line-height: 14px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: -30px;
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
overflow: hidden;

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
height: 240px;
width:fit-content;
position: relative;
display: flex;
gap: .7em;
transition: all .5s;
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
const Footer = styled.div`
margin-left: 0px;
@media(max-width:768px){
  display: none;
}
`;
const MoboRes = styled.div`
display: none;
flex-direction: column;
gap: 1em;
width:100%;
padding-bottom: 2em;
img{
  height:200px!important;
  transform: scaleX(1.07);
  width: fit-content!important;
  border-radius: 8px;
}
div{
  display:flex;
  justify-content: space-between;
  gap:1.2em;
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
/* div:last-child{
  display: flex;
  gap:.5em;
  height:150px;
  img{
    border-radius: 5px;
    height:150px!important;
    width:fit-content
  }
} */
@media (max-width:768px){
  display: flex;
}
`;
const MoboContainer = styled.div`
padding-top: 1em;
padding-left: 6.5em;
height: 250px;
display: none;
flex-direction: column;
gap:1em;
/* width: 100%; */
height: fit-content;
overflow: hidden;
@media (max-width:768px) {
  padding-inline: .6em;
  display: flex;
}
`;
const Mobo = styled.div`
display: none;
@media(max-width:768px){
  display: block;
}
`;
export default Movies;
